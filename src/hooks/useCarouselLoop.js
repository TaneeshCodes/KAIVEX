import { useEffect, useRef, useCallback } from 'react';

const N = 10;
const PITCH = 196;
const LOOP = N * PITCH; // 1960

export function useCarouselLoop({
  hostRef,
  frameRef,
  active = true,
  reduceMotion = false,
  onTick,
  onFrameDuration,
}) {
  const extraRef = useRef(0);
  const velRef = useRef(0);
  const draggingRef = useRef(false);
  const lxRef = useRef(0);
  const ltRef = useRef(0);
  const prevTimeRef = useRef(0);
  const rafIdRef = useRef(0);

  const isVisibleRef = useRef(true);
  const isTabVisibleRef = useRef(true);

  // Cached layout dimensions to eliminate getBoundingClientRect inside the loop
  const layoutRef = useRef({
    S: 1,
    K: 1,
    R: 706,
    CX: 720,
    CY: 687,
    mobile: false,
    hostWidth: 1440,
    hostHeight: 1080,
  });

  const onTickRef = useRef(onTick);
  onTickRef.current = onTick;

  const onFrameDurationRef = useRef(onFrameDuration);
  onFrameDurationRef.current = onFrameDuration;

  // Measure and cache layout dimensions
  const updateLayout = useCallback(() => {
    const host = hostRef.current;
    if (!host) return;

    const mobile = window.matchMedia('(max-width: 820px)').matches;
    const l = layoutRef.current;
    l.mobile = mobile;

    if (!mobile) {
      l.S = Math.min(window.innerWidth / 1440, window.innerHeight / 1080);
      if (frameRef?.current) {
        frameRef.current.style.setProperty('--s', l.S);
      }
      l.K = 1;
      l.R = 706;
      l.CX = 720;
      l.CY = 687;
      l.hostWidth = 1440;
      l.hostHeight = 1080;
      host.style.width = '1440px';
      host.style.height = '1080px';
      host.style.transform = '';
      host.style.transformOrigin = '0 0';
    } else {
      l.S = 1;
      const stageW = Math.max(window.innerWidth, 320);
      l.K = stageW / 560;
      l.R = 280;
      l.CX = 280;
      l.CY = 135;
      l.hostWidth = 560;
      l.hostHeight = 270;
      host.style.width = '560px';
      host.style.height = '270px';
      host.style.transform = 'scale(' + l.K + ')';
      host.style.transformOrigin = 'top left';
    }
  }, [hostRef, frameRef]);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout, { passive: true });
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  // Main animation loop
  useEffect(() => {
    if (!active) return;

    prevTimeRef.current = performance.now();

    function loop(now) {
      const frameStart = now;
      const prev = prevTimeRef.current || now;
      // Clamp delta time to 0.1s to prevent huge jumps after backgrounding or long frames
      const dt = Math.min(Math.max((now - prev) / 1000, 0.001), 0.1);
      prevTimeRef.current = now;

      if (!draggingRef.current) {
        extraRef.current += velRef.current * dt;
        // ~95% per second momentum decay
        velRef.current *= Math.pow(0.05, dt);
      }

      const off = (reduceMotion ? 0 : (-now / 1000) * 50) + extraRef.current;

      if (onTickRef.current) {
        onTickRef.current(now, dt, off, layoutRef.current);
      }

      const frameDuration = performance.now() - frameStart;
      if (onFrameDurationRef.current) {
        onFrameDurationRef.current(frameDuration);
      }

      if (isVisibleRef.current && isTabVisibleRef.current) {
        rafIdRef.current = requestAnimationFrame(loop);
      }
    }

    rafIdRef.current = requestAnimationFrame(loop);

    // Pause when off-screen or tab hidden, resume with no position jump
    const host = hostRef.current;
    let observer;
    if (host && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry?.isIntersecting ?? true;
          if (isIntersecting && !isVisibleRef.current) {
            isVisibleRef.current = true;
            prevTimeRef.current = performance.now();
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = requestAnimationFrame(loop);
          } else if (!isIntersecting && isVisibleRef.current) {
            isVisibleRef.current = false;
            cancelAnimationFrame(rafIdRef.current);
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(host);
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        isTabVisibleRef.current = false;
        cancelAnimationFrame(rafIdRef.current);
      } else {
        isTabVisibleRef.current = true;
        prevTimeRef.current = performance.now();
        cancelAnimationFrame(rafIdRef.current);
        if (isVisibleRef.current) {
          rafIdRef.current = requestAnimationFrame(loop);
        }
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      if (observer) observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [active, reduceMotion, hostRef]);

  // Pointer dragging setup with pointer capture and passive listeners
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const onPointerDown = (e) => {
      draggingRef.current = true;
      velRef.current = 0;
      lxRef.current = e.clientX;
      ltRef.current = performance.now();
      try {
        e.target.setPointerCapture?.(e.pointerId);
      } catch (_) {}
      host.classList.add('drag');
    };

    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const now = performance.now();
      const l = layoutRef.current;
      const dx = (e.clientX - lxRef.current) / (l.S * l.K);
      const dt = Math.max(now - ltRef.current, 1) / 1000;
      extraRef.current += dx;
      velRef.current = 0.6 * velRef.current + 0.4 * (dx / dt);
      lxRef.current = e.clientX;
      ltRef.current = now;
    };

    const onPointerUp = (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      host.classList.remove('drag');
      try {
        e.target.releasePointerCapture?.(e.pointerId);
      } catch (_) {}
      if (performance.now() - ltRef.current > 90) {
        velRef.current = 0;
      }
    };

    host.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });

    return () => {
      host.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [hostRef]);

  return {
    extraRef,
    velRef,
    draggingRef,
    layoutRef,
  };
}
