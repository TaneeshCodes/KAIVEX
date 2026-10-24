import{a as e,i as t,r as n,t as r}from"./index-VB_RovfF.js";var i=e(t(),1),a=n(),o=10,s=196,c=1960,l=1/.7111,u=`
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
`,d=`
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
`;function f(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`Shader compilation error: `+t)}return r}function p(e,t,n){let r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let t=e.getProgramInfoLog(r);throw e.deleteProgram(r),Error(`Program link error: `+t)}return r}function m({frameRef:e,tier:t=`high`,active:n=!0,onFrameDuration:m}){let h=(0,i.useRef)(null),g=(0,i.useRef)(null),_=(0,i.useRef)(null),v=(0,i.useRef)([]),y=(0,i.useRef)(new Float32Array(320)),b=(0,i.useRef)(new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23,24,25,26,24,26,27,28,29,30,28,30,31,32,33,34,32,34,35,36,37,38,36,38,39])),x=(0,i.useRef)(null),S=(0,i.useRef)(!1),C=(0,i.useRef)(0),w=t===`mid`?`/reels-grid-mid.mp4`:`/reels-grid.mp4`;return(0,i.useEffect)(()=>{let e=g.current;if(!e)return;let t=e.getContext(`webgl`,{alpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)return;let n=f(t,t.VERTEX_SHADER,u),r=f(t,t.FRAGMENT_SHADER,d),i=p(t,n,r),a=t.getAttribLocation(i,`a_pos`),o=t.getAttribLocation(i,`a_uv`),s=t.getAttribLocation(i,`a_local`),c=t.getAttribLocation(i,`a_half_size`),l=t.getUniformLocation(i,`u_res`),m=t.getUniformLocation(i,`u_sampler`),h=t.createBuffer(),_=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_),t.bufferData(t.ELEMENT_ARRAY_BUFFER,b.current,t.STATIC_DRAW);let v=t.createTexture();t.bindTexture(t.TEXTURE_2D,v),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([16,17,21,255]));let y=new Image;return y.crossOrigin=`anonymous`,y.onload=()=>{t.bindTexture(t.TEXTURE_2D,v),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,y)},y.src=`/reels-poster.webp`,t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),x.current={gl:t,program:i,vbo:h,ibo:_,texture:v,locations:{aPos:a,aUv:o,aLocal:s,aHalfSize:c,uRes:l,uSampler:m},dpr:1},()=>{t.deleteBuffer(h),t.deleteBuffer(_),t.deleteTexture(v),t.deleteProgram(i),t.deleteShader(n),t.deleteShader(r),x.current=null}},[]),(0,i.useEffect)(()=>{let e=_.current;if(!e)return;let t,n=()=>{S.current=!0,`requestVideoFrameCallback`in e&&(t=e.requestVideoFrameCallback(n))};`requestVideoFrameCallback`in e?t=e.requestVideoFrameCallback(n):e.addEventListener(`timeupdate`,()=>{S.current=!0},{passive:!0});let r=e.play();return r!==void 0&&r.catch(()=>{}),()=>{t&&`cancelVideoFrameCallback`in e&&e.cancelVideoFrameCallback(t),e.pause()}},[w]),r({hostRef:h,frameRef:e,active:n,reduceMotion:!1,onTick:(e,n,r,i)=>{let a=x.current;if(!a)return;let{gl:u,program:d,vbo:f,texture:p,locations:m}=a,h=g.current;if(!h)return;let b=t===`mid`?1.35:2,w=Math.min(window.devicePixelRatio||1,b),T=Math.round(i.hostWidth*w),E=Math.round(i.hostHeight*w);(h.width!==T||h.height!==E)&&(h.width=T,h.height=E,u.viewport(0,0,T,E));let D=t===`mid`?33:0,O=e-C.current;S.current&&_.current&&_.current.readyState>=2&&O>=D&&(u.bindTexture(u.TEXTURE_2D,p),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,_.current),S.current=!1,C.current=e),u.clearColor(0,0,0,0),u.clear(u.COLOR_BUFFER_BIT),u.useProgram(d),u.uniform2f(m.uRes,i.hostWidth,i.hostHeight),u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,p),u.uniform1i(m.uSampler,0);let k=y.current,A=0,{CX:j,CY:M,R:N}=i;for(let e=0;e<o;e++){let t=((e*s+r)%c+c)%c-c/2,n=j+t*(1+.083*(t/N)**2),i=v.current[e];if(Math.abs(n-j)>N+320){i&&(i.style.display=`none`);continue}let a=Math.abs(n-j)/N,o=170+48*a*a,u=n-o/2,d=n+o/2,f=280+92*(Math.abs(u-j)/N)**2.6,p=280+92*(Math.abs(d-j)/N)**2.6,m=M-12*a*a,h=Math.max(f,p),g=m-h/2,_=h/2;if(i){i.style.display=`grid`;let e=g+(_+f/2-14-34);i.style.transform=`translate3d(${(u+14).toFixed(1)}px, ${e.toFixed(1)}px, 0)`}let y=e%5,b=e/5|0,x=Math.max(h,o*l),S=(1-o/(x/l))/2*.2,C=(1-h/x)/2*.5,w=y*.2+S,T=(y+1)*.2-S,E=b*.5+C,D=(b+1)*.5-C,O=o/2,P=h/2,F=A*32;k[F+0]=u,k[F+1]=m-f/2,k[F+2]=w,k[F+3]=E,k[F+4]=-O,k[F+5]=-f/2,k[F+6]=O,k[F+7]=P,k[F+8]=d,k[F+9]=m-p/2,k[F+10]=T,k[F+11]=E,k[F+12]=O,k[F+13]=-p/2,k[F+14]=O,k[F+15]=P,k[F+16]=d,k[F+17]=m+p/2,k[F+18]=T,k[F+19]=D,k[F+20]=O,k[F+21]=p/2,k[F+22]=O,k[F+23]=P,k[F+24]=u,k[F+25]=m+f/2,k[F+26]=w,k[F+27]=D,k[F+28]=-O,k[F+29]=f/2,k[F+30]=O,k[F+31]=P,A++}A>0&&(u.bindBuffer(u.ARRAY_BUFFER,f),u.bufferData(u.ARRAY_BUFFER,k.subarray(0,A*32),u.DYNAMIC_DRAW),u.enableVertexAttribArray(m.aPos),u.vertexAttribPointer(m.aPos,2,u.FLOAT,!1,32,0),u.enableVertexAttribArray(m.aUv),u.vertexAttribPointer(m.aUv,2,u.FLOAT,!1,32,8),u.enableVertexAttribArray(m.aLocal),u.vertexAttribPointer(m.aLocal,2,u.FLOAT,!1,32,16),u.enableVertexAttribArray(m.aHalfSize),u.vertexAttribPointer(m.aHalfSize,2,u.FLOAT,!1,32,24),u.drawElements(u.TRIANGLES,A*6,u.UNSIGNED_SHORT,0))},onFrameDuration:m}),(0,a.jsxs)(`div`,{className:`rowwrap`,id:`rowwrap`,style:{contain:`layout paint style`},children:[(0,a.jsxs)(`video`,{ref:_,muted:!0,loop:!0,playsInline:!0,preload:`auto`,style:{position:`fixed`,left:-9999,top:-9999,width:1,height:1,opacity:0,pointerEvents:`none`},children:[(0,a.jsx)(`source`,{src:`/reels-grid.webm`,type:`video/webm`}),(0,a.jsx)(`source`,{src:w,type:`video/mp4`})]}),(0,a.jsxs)(`div`,{className:`host`,id:`host`,ref:h,"aria-label":`Video reels carousel`,style:{touchAction:`pan-y`},children:[(0,a.jsx)(`canvas`,{ref:g,className:`webgl-carousel-canvas`,style:{position:`absolute`,left:0,top:0,width:`100%`,height:`100%`,pointerEvents:`none`}}),Array.from({length:o}).map((e,t)=>(0,a.jsx)(`div`,{ref:e=>v.current[t]=e,className:`play play-fast`,style:{position:`absolute`,left:0,top:0,display:`none`,willChange:`transform`},children:(0,a.jsx)(`svg`,{width:`12`,height:`14`,viewBox:`0 0 12 14`,children:(0,a.jsx)(`path`,{d:`M2 1.5v11l9-5.5z`,fill:`#fff`})})},t))]})]})}export{m as default};