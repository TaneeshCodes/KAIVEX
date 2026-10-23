import React, { useEffect, useRef } from 'react';

const SRC = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/04fd3d5f-99d7-476e-98a4-46c08518ffb3.mp4';
const POSTER_SRC = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b7ebb74a-8c8a-4f7e-8f80-55e2d74ecd05.webp';

// Rounded quad SVG path generator for curved perspective
function rq(P, r) {
  let d = '';
  for (let k = 0; k < 4; k++) {
    const p = P[k];
    const a = P[(k + 3) % 4];
    const b = P[(k + 1) % 4];
    const ua = [a[0] - p[0], a[1] - p[1]];
    const ub = [b[0] - p[0], b[1] - p[1]];
    const la = Math.hypot(...ua);
    const lb = Math.hypot(...ub);
    const s = [p[0] + (ua[0] / la) * r, p[1] + (ua[1] / la) * r];
    const e = [p[0] + (ub[0] / lb) * r, p[1] + (ub[1] / lb) * r];
    d += (k ? 'L' : 'M') + s[0].toFixed(1) + ' ' + s[1].toFixed(1) + 'Q' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ' ' + e[0].toFixed(1) + ' ' + e[1].toFixed(1);
  }
  return d + 'Z';
}

export default function ReelCarousel({ frameRef }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const N = 10;
    const PITCH = 196;
    const LOOP = N * PITCH;
    const TR = 1 / 0.7111;

    let S = 1;
    let K = 1;
    let R = 706;
    let CX = 720;
    let CY = 687;
    let mobile = false;

    function layout() {
      mobile = window.matchMedia('(max-width:820px)').matches;
      if (!mobile) {
        S = Math.min(window.innerWidth / 1440, window.innerHeight / 1080);
        if (frameRef?.current) {
          frameRef.current.style.setProperty('--s', S);
        }
        K = 1;
        R = 706;
        CX = 720;
        CY = 687;
        host.style.cssText = '';
      } else {
        S = 1;
        K = window.innerWidth / 560;
        R = window.innerWidth / 2 / K;
        CX = R;
        CY = 125 / K;
        host.style.width = window.innerWidth / K + 'px';
        host.style.height = 250 / K + 'px';
        host.style.transform = 'scale(' + K + ')';
      }
    }

    window.addEventListener('resize', layout);
    layout();

    // Create cards
    host.innerHTML = '';
    const cards = [];
    const vids = [];

    for (let i = 0; i < N; i++) {
      const c = document.createElement('div');
      c.className = 'card';

      const lay = document.createElement('div');
      lay.className = 'layer';

      const p = document.createElement('div');
      p.className = 'layer poster';
      p.style.backgroundImage = `url("${POSTER_SRC}")`;

      const v = document.createElement('video');
      v.className = 'layer vid';
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.autoplay = true;
      v.preload = 'auto';
      v.setAttribute('muted', '');

      if (!reduce) {
        v.src = SRC;
        v.addEventListener('loadeddata', () => {
          const m = vids[0];
          if (m && m !== v && m.readyState > 1) {
            v.currentTime = m.currentTime;
          }
          v.classList.add('on');
          v.play().catch(() => {});
        });
        vids.push(v);
      }

      const pl = document.createElement('div');
      pl.className = 'play';
      pl.innerHTML = '<svg width="12" height="14" viewBox="0 0 12 14"><path d="M2 1.5v11l9-5.5z" fill="#fff"/></svg>';

      lay.appendChild(p);
      lay.appendChild(v);
      c.appendChild(lay);
      c.appendChild(pl);
      host.appendChild(c);

      cards.push({ c, lay, pl, col: i % 5, row: (i / 5) | 0 });
    }

    // Video sync interval
    const syncInterval = setInterval(() => {
      const m = vids[0];
      if (!m) return;
      for (const v of vids) {
        const d = Math.abs(v.currentTime - m.currentTime);
        if (v !== m && v.readyState > 1 && d > 0.12 && d < 4.88) {
          v.currentTime = m.currentTime;
        }
      }
    }, 1500);

    // Pointer dragging and momentum
    let extra = 0;
    let vel = 0;
    let dragging = false;
    let lx = 0;
    let lt = 0;

    const onPointerDown = (e) => {
      dragging = true;
      vel = 0;
      lx = e.clientX;
      lt = performance.now();
      host.classList.add('drag');
    };

    const onPointerMove = (e) => {
      if (!dragging) return;
      const now = performance.now();
      const dx = (e.clientX - lx) / (S * K);
      const dt = Math.max(now - lt, 1) / 1000;
      extra += dx;
      vel = 0.6 * vel + 0.4 * (dx / dt);
      lx = e.clientX;
      lt = now;
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      host.classList.remove('drag');
      if (performance.now() - lt > 90) vel = 0;
    };

    host.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // Animation frame tick
    let animationFrameId;
    let prev = performance.now();

    function tick(now) {
      const dt = Math.min((now - prev) / 1000, 0.1);
      prev = now;

      if (!dragging) {
        extra += vel * dt;
        vel *= Math.pow(0.05, dt);
      }

      const off = (reduce ? 0 : (-now / 1000) * 50) + extra;

      for (let i = 0; i < N; i++) {
        const o = cards[i];
        if (!o) continue;

        const tt = ((((i * PITCH + off) % LOOP) + LOOP) % LOOP) - LOOP / 2;
        const x = CX + tt * (1 + 0.083 * Math.pow(tt / R, 2));

        if (Math.abs(x - CX) > R + 320) {
          o.c.style.display = 'none';
          continue;
        }

        o.c.style.display = '';
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

        o.c.style.cssText =
          'display:;left:' +
          x1.toFixed(2) +
          'px;top:' +
          top.toFixed(2) +
          'px;width:' +
          w.toFixed(2) +
          'px;height:' +
          hb.toFixed(2) +
          'px;clip-path:path("' +
          rq([[0, c0 - h1 / 2], [w, c0 - h2 / 2], [w, c0 + h2/2], [0, c0 + h1 / 2]], 15) +
          '")';

        const TH = Math.max(hb, w * TR);
        const TW = TH / TR;
        const L = o.lay.style;
        L.width = (5 * TW).toFixed(1) + 'px';
        L.height = (2 * TH).toFixed(1) + 'px';
        L.left = ((w - TW) / 2 - o.col * TW).toFixed(1) + 'px';
        L.top = ((hb - TH) / 2 - o.row * TH).toFixed(1) + 'px';
        o.pl.style.top = (c0 + h1 / 2 - 14 - 34).toFixed(1) + 'px';
      }

      animationFrameId = requestAnimationFrame(tick);
    }

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', layout);
      clearInterval(syncInterval);
      host.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameRef]);

  return (
    <div className="rowwrap" id="rowwrap">
      <div className="host" id="host" ref={hostRef} aria-label="Video reels carousel" />
    </div>
  );
}
