import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props { onComplete: () => void; }

const WORDS = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTime = useRef<number | null>(null);
  const DURATION = 2700;

  useEffect(() => {
    let rafId: number;
    const tick = (now: number) => {
      if (!startTime.current) startTime.current = now;
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / DURATION, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setTimeout(() => onComplete(), 400);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setWordIndex(i => (i + 1) % WORDS.length), 900);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col">
      <motion.p
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >Portfolio</motion.p>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 select-none"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 right-8">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums"
        >
          {String(count).padStart(3, "0")}
        </motion.span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${count / 100})`, boxShadow: "0 0 8px rgba(137,170,204,0.35)" }}
        />
      </div>
    </div>
  );
}
