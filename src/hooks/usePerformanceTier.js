import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Checks for initial device performance capability:
 * - URL param ?tier=high|mid|low overrides all
 * - sessionStorage caches previously determined tier
 * - Reduced motion, Save-Data, low memory/cores -> 'low'
 * - Mid-range hardware -> 'mid'
 * - High-end hardware -> 'high'
 */
function getInitialTier() {
  if (typeof window === 'undefined') return 'high';

  // 1. URL parameter override for testing (?tier=high|mid|low)
  try {
    const params = new URLSearchParams(window.location.search);
    const paramTier = params.get('tier')?.toLowerCase();
    if (paramTier === 'high' || paramTier === 'mid' || paramTier === 'low') {
      sessionStorage.setItem('kaivex_perf_tier', paramTier);
      return paramTier;
    }
  } catch (_) {}

  // 2. Previously stored session decision
  try {
    const saved = sessionStorage.getItem('kaivex_perf_tier');
    if (saved === 'high' || saved === 'mid' || saved === 'low') {
      return saved;
    }
  } catch (_) {}

  // 3. User & System Constraints
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return 'low';

  const nav = navigator;
  if (nav?.connection?.saveData) return 'low';

  const memory = nav?.deviceMemory; // in GB
  const cores = nav?.hardwareConcurrency;

  if ((memory && memory <= 2) || (cores && cores <= 2)) {
    return 'low';
  }

  // 4. WebGL check
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return 'low';
  } catch (_) {
    return 'low';
  }

  // 5. Mid-tier hardware heuristic
  if ((memory && memory <= 4) || (cores && cores <= 4)) {
    return 'mid';
  }

  return 'high';
}

export function usePerformanceTier(isIntroFinished = true) {
  const [tier, setTierState] = useState(getInitialTier);
  const tierRef = useRef(tier);
  tierRef.current = tier;

  // Frame-time governor state
  const governorSampledRef = useRef(false);
  const frameTimesRef = useRef([]);

  const setTier = useCallback((newTier) => {
    tierRef.current = newTier;
    setTierState(newTier);
    try {
      sessionStorage.setItem('kaivex_perf_tier', newTier);
    } catch (_) {}
  }, []);

  // Frame time reporting method for the carousel loop
  const recordFrame = useCallback((frameMs) => {
    if (!isIntroFinished || governorSampledRef.current || tierRef.current === 'low') {
      return;
    }

    const samples = frameTimesRef.current;
    samples.push(frameMs);

    if (samples.length >= 90) {
      governorSampledRef.current = true;
      // Calculate median frame time
      const sorted = [...samples].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];

      if (median > 30) {
        // Severe frame drops: drop straight to low tier
        setTier('low');
      } else if (median > 20) {
        // Moderate drops (>20ms per frame = <50fps): drop one tier
        if (tierRef.current === 'high') {
          setTier('mid');
        } else if (tierRef.current === 'mid') {
          setTier('low');
        }
      } else {
        // Performance is solid; persist current tier
        try {
          sessionStorage.setItem('kaivex_perf_tier', tierRef.current);
        } catch (_) {}
      }
    }
  }, [isIntroFinished, setTier]);

  return {
    tier,
    setTier,
    recordFrame,
  };
}
