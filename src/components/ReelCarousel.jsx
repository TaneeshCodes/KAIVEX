import React, { lazy, Suspense } from 'react';
import LowTierCarousel from './LowTierCarousel';

const WebGLCarousel = lazy(() => import('./WebGLCarousel'));

function ReelCarouselInner({
  frameRef,
  tier = 'high',
  active = true,
  onFrameDuration,
}) {
  if (tier === 'low') {
    return (
      <LowTierCarousel
        frameRef={frameRef}
        active={active}
        onFrameDuration={onFrameDuration}
      />
    );
  }

  return (
    <Suspense
      fallback={
        <LowTierCarousel
          frameRef={frameRef}
          active={active}
          onFrameDuration={onFrameDuration}
        />
      }
    >
      <WebGLCarousel
        frameRef={frameRef}
        tier={tier}
        active={active}
        onFrameDuration={onFrameDuration}
      />
    </Suspense>
  );
}

export default React.memo(ReelCarouselInner);
