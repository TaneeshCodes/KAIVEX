import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import HlsVideo from "../components/HlsVideo";

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const ROLES = ["Creative", "Fullstack", "Founder", "Scholar"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
    tl.fromTo(
      ".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, delay: 0.3 },
      "<+0.2"
    );
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background HLS Video */}
      <div className="absolute inset-0 overflow-hidden">
        <HlsVideo
          src={HLS_SRC}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">COLLECTION '26</p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Michael Smith
        </h1>

        <p className="blur-in text-sm md:text-base text-muted mb-4">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Chicago.
        </p>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          {/* See Works */}
          <div className="relative group">
            <div className="absolute inset-[-2px] rounded-full accent-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative z-10 rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all hover:scale-105 inline-block font-medium"
            >
              See Works
            </a>
          </div>

          {/* Reach out */}
          <div className="relative group">
            <div className="absolute inset-[-2px] rounded-full accent-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              href="mailto:hello@michaelsmith.com"
              className="relative z-10 rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all hover:scale-105 inline-block font-medium"
            >
              Reach out...
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
