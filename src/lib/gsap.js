import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Configure ScrollTrigger defaults
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

/**
 * Standard luxury easing curves tailored for high-end digital design
 */
export const EASINGS = {
  expoOut: 'expo.out',
  power3Out: 'power3.out',
  power2Out: 'power2.out',
  power2InOut: 'power2.inOut',
  sineInOut: 'sine.inOut',
  backOutSoft: 'back.out(1.2)',
};

/**
 * Check if the user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export { gsap, ScrollTrigger };
export default gsap;

