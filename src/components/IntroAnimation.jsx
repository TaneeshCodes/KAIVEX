import React, { useState, useEffect, useRef } from 'react';

export default function IntroAnimation({ onTransitionStart, onComplete, targetLogoRef }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [phase, setPhase] = useState('playing'); // 'playing' | 'flying' | 'done'
  const [flyingTransform, setFlyingTransform] = useState('');
  const [targetCoords, setTargetCoords] = useState({ left: 37, top: 29, width: 40, height: 40 });
  const transitionFiredRef = useRef(false);

  // Free video decoder function
  const freeVideoDecoder = () => {
    const video = videoRef.current;
    if (video) {
      try {
        video.pause();
        video.removeAttribute('src');
        // Clear all sources
        while (video.firstChild) {
          video.removeChild(video.firstChild);
        }
        video.load();
      } catch (_) {}
    }
  };

  const startTransition = () => {
    if (transitionFiredRef.current) return;
    transitionFiredRef.current = true;

    // Notify parent that entrance animations and handoff can begin
    if (onTransitionStart) onTransitionStart();

    // 1. Measure target corner position once before animation starts
    let targetRect = { left: 37, top: 24, width: 48, height: 48 };
    if (targetLogoRef?.current) {
      const rect = targetLogoRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        targetRect = {
          left: rect.left,
          top: rect.top,
          width: rect.width || 48,
          height: rect.height || 48,
        };
      }
    }
    setTargetCoords(targetRect);

    // 2. Measure center start position once
    const centerSize = Math.min(window.innerWidth * 0.28, 170);
    const startX = window.innerWidth / 2 - centerSize / 2;
    const startY = window.innerHeight / 2 - centerSize / 2;

    // 3. FLIP animation: Invert from center to corner
    const initialTranslateX = startX - targetRect.left;
    const initialTranslateY = startY - targetRect.top;
    const initialScale = centerSize / targetRect.width;

    setPhase('flying');
    setFlyingTransform(
      `translate3d(${initialTranslateX.toFixed(1)}px, ${initialTranslateY.toFixed(1)}px, 0) scale(${initialScale.toFixed(3)})`
    );

    // Play FLIP transition smoothly to target (0,0 scale 1)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFlyingTransform('translate3d(0, 0, 0) scale(1)');
      });
    });

    // 4. Once flight lands, free the video decoder and complete handoff
    setTimeout(() => {
      freeVideoDecoder();
      setPhase('done');
      if (onComplete) onComplete();
    }, 950);
  };

  useEffect(() => {
    // Check if network is slow, data saver is on, memory <= 2GB, or reduced motion preferred
    const shouldSkip = () => {
      try {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (conn && (conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === '3g')) return true;
        if (navigator.deviceMemory && navigator.deviceMemory <= 2) return true;
      } catch (_) {}
      return false;
    };

    if (shouldSkip()) {
      startTransition();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.65) {
        startTransition();
      }
    };

    const handleEnded = () => {
      startTransition();
    };

    video.addEventListener('timeupdate', handleTimeUpdate, { passive: true });
    video.addEventListener('ended', handleEnded, { passive: true });

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setTimeout(startTransition, 3000);
      });
    }

    // 8-second safety timeout so black overlay is NEVER stuck
    const safetyTimer = setTimeout(() => {
      if (!transitionFiredRef.current) {
        startTransition();
      }
    }, 8000);

    return () => {
      clearTimeout(safetyTimer);
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      }
      freeVideoDecoder();
    };
  }, []);

  const handleSkip = () => {
    startTransition();
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  if (phase === 'done') return null;

  return (
    <>
      {/* Intro Video Overlay */}
      <div
        id="intro"
        className={phase === 'flying' ? 'done' : ''}
        role="presentation"
        style={{
          opacity: phase === 'flying' ? 0 : 1,
          pointerEvents: phase === 'flying' ? 'none' : 'auto',
          transition: 'opacity 0.75s ease-out',
        }}
      >
        <video
          ref={videoRef}
          id="iv"
          muted={muted}
          playsInline
          preload="metadata"
          poster="/intro-poster.webp"
        >
          <source src="/intro-video.webm" type="video/webm" />
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>

        {phase === 'playing' && (
          <>
            <button id="snd" type="button" onClick={toggleSound}>
              {muted ? 'Sound on' : 'Sound off'}
            </button>
            <button id="skip" type="button" onClick={handleSkip}>
              Skip intro
            </button>
          </>
        )}
      </div>

      {/* Floating Logo FLIP transition */}
      {phase === 'flying' && (
        <div
          className="flying-logo"
          style={{
            position: 'fixed',
            left: `${targetCoords.left}px`,
            top: `${targetCoords.top}px`,
            width: `${targetCoords.width}px`,
            height: `${targetCoords.height}px`,
            transform: flyingTransform,
            transformOrigin: 'top left',
            transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease',
            zIndex: 9999,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            willChange: 'transform',
          }}
        >
          <img
            src="/logo-icon.webp"
            alt="Kaivex"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 0 16px rgba(224, 67, 31, 0.75))',
            }}
          />
        </div>
      )}
    </>
  );
}
