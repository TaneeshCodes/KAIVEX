import React, { useState, useEffect, useRef } from 'react';

export default function IntroAnimation({ onTransitionStart, onComplete, targetLogoRef }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [phase, setPhase] = useState('playing'); // 'playing' | 'flying' | 'done'
  const [flyingStyle, setFlyingStyle] = useState({});
  const transitionFiredRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTransition = () => {
      if (transitionFiredRef.current) return;
      transitionFiredRef.current = true;

      // Notify parent that entrance animations can begin
      if (onTransitionStart) onTransitionStart();

      // Get target corner position of the navbar logo
      let targetRect = { left: 37, top: 29, width: 40, height: 40 };
      if (targetLogoRef?.current) {
        const rect = targetLogoRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          targetRect = {
            left: rect.left,
            top: rect.top,
            width: rect.width || 40,
            height: rect.height || 40
          };
        }
      }

      // Initial center position (center of screen, matching video logo)
      const centerSize = Math.min(window.innerWidth * 0.28, 170);
      const startX = window.innerWidth / 2 - centerSize / 2;
      const startY = window.innerHeight / 2 - centerSize / 2;

      setPhase('flying');
      setFlyingStyle({
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${centerSize}px`,
        height: `${centerSize}px`,
        opacity: 1,
        transform: 'scale(1)',
        filter: 'drop-shadow(0 0 35px rgba(224, 67, 31, 0.9)) drop-shadow(0 0 60px rgba(255, 102, 54, 0.5))'
      });

      // Animate smoothly to the corner in the next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setFlyingStyle({
            left: `${targetRect.left}px`,
            top: `${targetRect.top}px`,
            width: `${targetRect.width}px`,
            height: `${targetRect.height}px`,
            opacity: 1,
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 10px rgba(224, 67, 31, 0.5))',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
          });
        });
      });

      // Once flight lands in corner, complete the handoff
      setTimeout(() => {
        setPhase('done');
        if (onComplete) onComplete();
      }, 950);
    };

    const handleTimeUpdate = () => {
      // Trigger smooth transition slightly before the video cuts off
      if (video.duration && video.currentTime >= video.duration - 0.65) {
        startTransition();
      }
    };

    const handleEnded = () => {
      startTransition();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Auto-play video
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: muted is default, but if failed, transition after timeout
        setTimeout(startTransition, 5000);
      });
    }

    // Safety timeout in case video is blocked
    const fallbackTimer = setTimeout(() => {
      if (!transitionFiredRef.current) {
        startTransition();
      }
    }, 5500);

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, [onTransitionStart, onComplete, targetLogoRef]);

  const handleSkip = () => {
    if (transitionFiredRef.current) return;
    transitionFiredRef.current = true;

    if (onTransitionStart) onTransitionStart();

    let targetRect = { left: 37, top: 29, width: 40, height: 40 };
    if (targetLogoRef?.current) {
      const rect = targetLogoRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        targetRect = {
          left: rect.left,
          top: rect.top,
          width: rect.width || 40,
          height: rect.height || 40
        };
      }
    }

    const centerSize = Math.min(window.innerWidth * 0.28, 170);
    const startX = window.innerWidth / 2 - centerSize / 2;
    const startY = window.innerHeight / 2 - centerSize / 2;

    setPhase('flying');
    setFlyingStyle({
      left: `${startX}px`,
      top: `${startY}px`,
      width: `${centerSize}px`,
      height: `${centerSize}px`,
      opacity: 1,
      transform: 'scale(1)',
      filter: 'drop-shadow(0 0 35px rgba(224, 67, 31, 0.9))'
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFlyingStyle({
          left: `${targetRect.left}px`,
          top: `${targetRect.top}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
          opacity: 1,
          transform: 'scale(1)',
          filter: 'drop-shadow(0 0 10px rgba(224, 67, 31, 0.5))',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        });
      });
    });

    setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 850);
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
          transition: 'opacity 0.75s ease-out'
        }}
      >
        <video
          ref={videoRef}
          id="iv"
          src="/intro-video.mp4"
          muted={muted}
          playsInline
          preload="auto"
        />

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

      {/* Floating Logo that swoops from center to corner */}
      {phase === 'flying' && (
        <div
          className="flying-logo"
          style={{
            position: 'fixed',
            zIndex: 9999,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...flyingStyle
          }}
        >
          <img
            src="/logo-icon.webp"
            alt="Kaivex"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      )}
    </>
  );
}
