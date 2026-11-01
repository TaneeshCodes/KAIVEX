import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HlsVideo from "../components/HlsVideo";
import { motion } from "framer-motion";

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const MARQUEE_TEXT = "BUILDING THE FUTURE • ";
const SOCIAL_LINKS = ["Twitter", "LinkedIn", "Dribbble", "GitHub"];

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <HlsVideo
          src={HLS_SRC}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/10 pr-8 select-none flex-shrink-0"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={`dup-${i}`}
                className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/10 pr-8 select-none flex-shrink-0"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Let's work together</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-10">
              Start a conversation
            </h2>
            <div className="relative inline-flex group">
              <div className="absolute inset-[-2px] rounded-full accent-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a
                href="mailto:hello@michaelsmith.com"
                className="relative z-10 rounded-full text-sm px-8 py-4 border border-stroke text-muted hover:text-text-primary transition-all"
              >
                hello@michaelsmith.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="border-t border-stroke pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-muted">Available for projects</span>
            </div>
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-[0.1em]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
