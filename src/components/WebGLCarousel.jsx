import React, { useEffect, useRef } from 'react';
import { useCarouselLoop } from '../hooks/useCarouselLoop';

const N = 10;
const PITCH = 196;
const LOOP = N * PITCH; // 1960
const TR = 1 / 0.7111;

const VS_SOURCE = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec2 a_local;
attribute vec2 a_half_size;

uniform vec2 u_res;

varying vec2 v_uv;
varying vec2 v_local;
varying vec2 v_half_size;

void main() {
  vec2 zeroToOne = a_pos / u_res;
  vec2 clipSpace = zeroToOne * 2.0 - 1.0;
  gl_Position = vec4(clipSpace.x, -clipSpace.y, 0.0, 1.0);
  v_uv = a_uv;
  v_local = a_local;
  v_half_size = a_half_size;
}
`;

const FS_SOURCE = `
precision mediump float;

uniform sampler2D u_sampler;

varying vec2 v_uv;
varying vec2 v_local;
varying vec2 v_half_size;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + vec2(r);
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  float dist = roundedBoxSDF(v_local, v_half_size, 15.0);
  float alpha = 1.0 - smoothstep(-0.75, 0.75, dist);
  if (alpha < 0.01) discard;

  vec4 tex = texture2D(u_sampler, v_uv);
  float borderDist = abs(dist + 0.5);
  float borderAlpha = 1.0 - smoothstep(0.0, 1.0, borderDist);
  vec3 rgb = mix(tex.rgb, vec3(1.0), borderAlpha * 0.08);

  gl_FragColor = vec4(rgb * alpha, alpha);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error('Shader compilation error: ' + info);
  }
  return shader;
}

function createProgram(gl, vs, fs) {
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error('Program link error: ' + info);
  }
  return program;
}

export default function WebGLCarousel({
  frameRef,
  tier = 'high',
  active = true,
  onFrameDuration,
}) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const playButtonsRef = useRef([]);

  // Pre-allocated typed arrays to guarantee ZERO allocations per frame
  // 10 cards * 4 vertices * 8 floats per vertex = 320 floats
  // Attributes per vertex: [x, y, uv_x, uv_y, local_x, local_y, half_w, half_h]
  const vertexDataRef = useRef(new Float32Array(320));

  // Pre-allocated index buffer: 10 cards * 6 indices = 60 uint16s
  const indexDataRef = useRef(
    new Uint16Array([
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
      8, 9, 10, 8, 10, 11,
      12, 13, 14, 12, 14, 15,
      16, 17, 18, 16, 18, 19,
      20, 21, 22, 20, 22, 23,
      24, 25, 26, 24, 26, 27,
      28, 29, 30, 28, 30, 31,
      32, 33, 34, 32, 34, 35,
      36, 37, 38, 36, 38, 39,
    ])
  );

  // WebGL context & GL resource references
  const glResourcesRef = useRef(null);

  // Video frame callback tracking
  const videoFrameReadyRef = useRef(false);
  const lastTextureUploadRef = useRef(0);

  // Video source selected according to tier
  const videoSrc = tier === 'mid' ? '/reels-grid-mid.mp4' : '/reels-grid.mp4';
  const webmSrc = '/reels-grid.webm';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });

    if (!gl) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE);
    const program = createProgram(gl, vs, fs);

    const aPos = gl.getAttribLocation(program, 'a_pos');
    const aUv = gl.getAttribLocation(program, 'a_uv');
    const aLocal = gl.getAttribLocation(program, 'a_local');
    const aHalfSize = gl.getAttribLocation(program, 'a_half_size');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uSampler = gl.getUniformLocation(program, 'u_sampler');

    const vbo = gl.createBuffer();
    const ibo = gl.createBuffer();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexDataRef.current, gl.STATIC_DRAW);

    // Initial placeholder texture (poster)
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // 1x1 black fallback pixel
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([16, 17, 21, 255])
    );

    // Load poster image immediately
    const posterImg = new Image();
    posterImg.crossOrigin = 'anonymous';
    posterImg.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, posterImg);
    };
    posterImg.src = '/reels-poster.webp';

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    glResourcesRef.current = {
      gl,
      program,
      vbo,
      ibo,
      texture,
      locations: { aPos, aUv, aLocal, aHalfSize, uRes, uSampler },
      dpr: 1,
    };

    return () => {
      gl.deleteBuffer(vbo);
      gl.deleteBuffer(ibo);
      gl.deleteTexture(texture);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      glResourcesRef.current = null;
    };
  }, []);

  // Video frame update callback setup (requestVideoFrameCallback)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let callbackId;
    let fallbackInterval;

    const onVideoFrame = () => {
      videoFrameReadyRef.current = true;
      if ('requestVideoFrameCallback' in video) {
        callbackId = video.requestVideoFrameCallback(onVideoFrame);
      }
    };

    if ('requestVideoFrameCallback' in video) {
      callbackId = video.requestVideoFrameCallback(onVideoFrame);
    } else {
      // Fallback: poll on timeupdate
      video.addEventListener('timeupdate', () => {
        videoFrameReadyRef.current = true;
      }, { passive: true });
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    return () => {
      if (callbackId && 'cancelVideoFrameCallback' in video) {
        video.cancelVideoFrameCallback(callbackId);
      }
      if (fallbackInterval) clearInterval(fallbackInterval);
      video.pause();
    };
  }, [videoSrc]);

  // Carousel rendering tick handler
  const handleTick = (now, dt, off, layout) => {
    const res = glResourcesRef.current;
    if (!res) return;
    const { gl, program, vbo, texture, locations } = res;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Responsive DPR adjustment per tier
    const maxDpr = tier === 'mid' ? 1.35 : 2;
    const targetDpr = Math.min(window.devicePixelRatio || 1, maxDpr);

    const targetWidth = Math.round(layout.hostWidth * targetDpr);
    const targetHeight = Math.round(layout.hostHeight * targetDpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      gl.viewport(0, 0, targetWidth, targetHeight);
    }

    // Video texture upload only when a new decoded frame is available
    // On mid tier, throttle texture updates to ~25-30 fps
    const minInterval = tier === 'mid' ? 33 : 0;
    const elapsed = now - lastTextureUploadRef.current;

    if (
      videoFrameReadyRef.current &&
      videoRef.current &&
      videoRef.current.readyState >= 2 &&
      elapsed >= minInterval
    ) {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoRef.current);
      videoFrameReadyRef.current = false;
      lastTextureUploadRef.current = now;
    }

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.uniform2f(locations.uRes, layout.hostWidth, layout.hostHeight);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(locations.uSampler, 0);

    const vertexData = vertexDataRef.current;
    let visibleCount = 0;

    const { CX, CY, R } = layout;

    for (let i = 0; i < N; i++) {
      const tt = ((((i * PITCH + off) % LOOP) + LOOP) % LOOP) - LOOP / 2;
      const x = CX + tt * (1 + 0.083 * Math.pow(tt / R, 2));

      const playBtn = playButtonsRef.current[i];

      if (Math.abs(x - CX) > R + 320) {
        if (playBtn) playBtn.style.display = 'none';
        continue;
      }

      const d = Math.abs(x - CX) / R;
      const w = 170 + 48 * d * d;
      const x1 = x - w / 2;
      const x2 = x + w / 2;
      const h1 = 280 + 92 * Math.pow(Math.abs(x1 - CX) / R, 2.6);
      const h2 = 280 + 92 * Math.pow(Math.abs(x2 - CX) / R, 2.6);
      const cy = CY - 12 * d * d;
      const hb = Math.max(h1, h2);
      const top = cy - hb / 2;
      const c0 = hb / 2;

      // Position play button overlay (pure DOM ref mutation, no React render)
      if (playBtn) {
        playBtn.style.display = 'grid';
        const playTop = top + (c0 + h1 / 2 - 14 - 34);
        playBtn.style.transform = `translate3d(${(x1 + 14).toFixed(1)}px, ${playTop.toFixed(1)}px, 0)`;
      }

      // UV mapping for 5x2 grid
      const col = i % 5;
      const row = (i / 5) | 0;

      const TH = Math.max(hb, w * TR);
      const TW = TH / TR;

      const marginU = ((1 - w / TW) / 2) * 0.2;
      const marginV = ((1 - hb / TH) / 2) * 0.5;

      const u0 = col * 0.2 + marginU;
      const u1 = (col + 1) * 0.2 - marginU;
      const v0 = row * 0.5 + marginV;
      const v1 = (row + 1) * 0.5 - marginV;

      const halfW = w / 2;
      const halfH = hb / 2;

      // 4 vertices for card quad:
      // Vertex 0: Top-Left (x1, cy - h1/2)
      // Vertex 1: Top-Right (x2, cy - h2/2)
      // Vertex 2: Bottom-Right (x2, cy + h2/2)
      // Vertex 3: Bottom-Left (x1, cy + h1/2)
      const offset = visibleCount * 32; // 4 vertices * 8 floats

      // Top-Left
      vertexData[offset + 0] = x1;
      vertexData[offset + 1] = cy - h1 / 2;
      vertexData[offset + 2] = u0;
      vertexData[offset + 3] = v0;
      vertexData[offset + 4] = -halfW;
      vertexData[offset + 5] = -h1 / 2;
      vertexData[offset + 6] = halfW;
      vertexData[offset + 7] = halfH;

      // Top-Right
      vertexData[offset + 8] = x2;
      vertexData[offset + 9] = cy - h2 / 2;
      vertexData[offset + 10] = u1;
      vertexData[offset + 11] = v0;
      vertexData[offset + 12] = halfW;
      vertexData[offset + 13] = -h2 / 2;
      vertexData[offset + 14] = halfW;
      vertexData[offset + 15] = halfH;

      // Bottom-Right
      vertexData[offset + 16] = x2;
      vertexData[offset + 17] = cy + h2 / 2;
      vertexData[offset + 18] = u1;
      vertexData[offset + 19] = v1;
      vertexData[offset + 20] = halfW;
      vertexData[offset + 21] = h2 / 2;
      vertexData[offset + 22] = halfW;
      vertexData[offset + 23] = halfH;

      // Bottom-Left
      vertexData[offset + 24] = x1;
      vertexData[offset + 25] = cy + h1 / 2;
      vertexData[offset + 26] = u0;
      vertexData[offset + 27] = v1;
      vertexData[offset + 28] = -halfW;
      vertexData[offset + 29] = h1 / 2;
      vertexData[offset + 30] = halfW;
      vertexData[offset + 31] = halfH;

      visibleCount++;
    }

    if (visibleCount > 0) {
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        vertexData.subarray(0, visibleCount * 32),
        gl.DYNAMIC_DRAW
      );

      const stride = 32; // 8 floats * 4 bytes
      gl.enableVertexAttribArray(locations.aPos);
      gl.vertexAttribPointer(locations.aPos, 2, gl.FLOAT, false, stride, 0);

      gl.enableVertexAttribArray(locations.aUv);
      gl.vertexAttribPointer(locations.aUv, 2, gl.FLOAT, false, stride, 8);

      gl.enableVertexAttribArray(locations.aLocal);
      gl.vertexAttribPointer(locations.aLocal, 2, gl.FLOAT, false, stride, 16);

      gl.enableVertexAttribArray(locations.aHalfSize);
      gl.vertexAttribPointer(locations.aHalfSize, 2, gl.FLOAT, false, stride, 24);

      gl.drawElements(gl.TRIANGLES, visibleCount * 6, gl.UNSIGNED_SHORT, 0);
    }
  };

  useCarouselLoop({
    hostRef,
    frameRef,
    active,
    reduceMotion: false,
    onTick: handleTick,
    onFrameDuration,
  });

  return (
    <div className="rowwrap" id="rowwrap" style={{ contain: 'layout paint style' }}>
      {/* Hidden single-decode video element */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        style={{ position: 'fixed', left: -9999, top: -9999, width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Main interactive host */}
      <div
        className="host"
        id="host"
        ref={hostRef}
        aria-label="Video reels carousel"
        style={{ touchAction: 'pan-y' }}
      >
        {/* Single WebGL canvas rendering all 10 cards */}
        <canvas
          ref={canvasRef}
          className="webgl-carousel-canvas"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        />

        {/* DOM play icons overlay */}
        {Array.from({ length: N }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (playButtonsRef.current[i] = el)}
            className="play play-fast"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              display: 'none',
              willChange: 'transform',
            }}
          >
            <svg width="12" height="14" viewBox="0 0 12 14">
              <path d="M2 1.5v11l9-5.5z" fill="#fff" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
