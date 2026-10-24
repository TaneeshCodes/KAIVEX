import React, { useRef } from 'react';
import { useCarouselLoop } from '../hooks/useCarouselLoop';

const N = 10;
const PITCH = 196;
const LOOP = N * PITCH; // 1960

export default function LowTierCarousel({
  frameRef,
  active = true,
  reduceMotion = false,
  onFrameDuration,
}) {
  const hostRef = useRef(null);
  const cardsRef = useRef([]);
  const playButtonsRef = useRef([]);

  const handleTick = (now, dt, off, layout) => {
    const { CX, CY, R } = layout;

    for (let i = 0; i < N; i++) {
      const cardEl = cardsRef.current[i];
      if (!cardEl) continue;

      const tt = ((((i * PITCH + off) % LOOP) + LOOP) % LOOP) - LOOP / 2;
      const x = CX + tt * (1 + 0.083 * Math.pow(tt / R, 2));

      if (Math.abs(x - CX) > R + 320) {
        cardEl.style.display = 'none';
        continue;
      }

      cardEl.style.display = 'block';
      const d = Math.abs(x - CX) / R;
      const w = 170 + 48 * d * d;
      const x1 = x - w / 2;
      const q = Math.abs(x - CX) / R;
      const h = 280 + 92 * Math.pow(q, 2.6);
      const cy = CY - 12 * d * d;
      const top = cy - h / 2;

      // Pure transform: translate3d - compositor accelerated!
      cardEl.style.transform = `translate3d(${x1.toFixed(1)}px, ${top.toFixed(1)}px, 0)`;
      cardEl.style.width = `${w.toFixed(1)}px`;
      cardEl.style.height = `${h.toFixed(1)}px`;

      const playBtn = playButtonsRef.current[i];
      if (playBtn) {
        playBtn.style.transform = `translate3d(14px, ${(h - 48).toFixed(1)}px, 0)`;
      }
    }
  };

  useCarouselLoop({
    hostRef,
    frameRef,
    active,
    reduceMotion,
    onTick: handleTick,
    onFrameDuration,
  });

  return (
    <div className="rowwrap" id="rowwrap" style={{ contain: 'layout paint style' }}>
      <div
        className="host"
        id="host"
        ref={hostRef}
        aria-label="Video reels carousel (low-power tier)"
        style={{ touchAction: 'pan-y' }}
      >
        {Array.from({ length: N }).map((_, i) => {
          const col = i % 5;
          const row = (i / 5) | 0;
          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card card-low-tier"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                willChange: 'transform',
                backgroundImage: 'url(/reels-poster.webp)',
                backgroundSize: '500% 200%',
                backgroundPosition: `${col * 25}% ${row * 100}%`,
                backgroundRepeat: 'no-repeat',
                display: 'none',
              }}
            >
              <div
                ref={(el) => (playButtonsRef.current[i] = el)}
                className="play play-fast"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
              >
                <svg width="12" height="14" viewBox="0 0 12 14">
                  <path d="M2 1.5v11l9-5.5z" fill="#fff" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
