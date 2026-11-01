import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { id: 1, seed: "explore1", rotation: -5 },
  { id: 2, seed: "explore2", rotation: 3 },
  { id: 3, seed: "explore3", rotation: -2 },
  { id: 4, seed: "explore4", rotation: 6 },
  { id: 5, seed: "explore5", rotation: -4 },
  { id: 6, seed: "explore6", rotation: 2 },
];

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.fromTo(col1Ref.current, { y: 0 }, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.fromTo(col2Ref.current, { y: 100 }, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const col1Items = ITEMS.slice(0, 3);
  const col2Items = ITEMS.slice(3, 6);

  return (
    <section ref={sectionRef} id="explorations" className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Pinned Center */}
      <div ref={contentRef} className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-body font-light text-text-primary mb-4">
            Visual <em className="font-display italic">playground</em>
          </h2>
          <p className="text-sm text-muted max-w-sm mx-auto mb-8">
            Experimental designs and motion explorations pushing creative boundaries.
          </p>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-muted hover:text-text-primary hover:border-text-primary/20 transition-all"
          >
            View on Dribbble ↗
          </a>
        </div>
      </div>

      {/* Parallax columns */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-start justify-center pt-32">
        <div className="max-w-[1400px] w-full px-8 grid grid-cols-2 gap-12 md:gap-40">
          <div ref={col1Ref} className="flex flex-col gap-8 pt-20">
            {col1Items.map(item => (
              <div
                key={item.id}
                className="pointer-events-auto aspect-square max-w-[320px] rounded-2xl overflow-hidden bg-surface border border-stroke cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <img
                  src={`https://picsum.photos/seed/${item.seed}/400/400`}
                  alt={`Exploration ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-8 pt-48">
            {col2Items.map(item => (
              <div
                key={item.id}
                className="pointer-events-auto aspect-square max-w-[320px] ml-auto rounded-2xl overflow-hidden bg-surface border border-stroke cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <img
                  src={`https://picsum.photos/seed/${item.seed}/400/400`}
                  alt={`Exploration ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
