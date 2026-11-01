import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = ["Home", "Work", "Resume"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const map: Record<string, string> = { Home: "hero", Work: "works", Resume: "contact" };
    document.getElementById(map[id] || id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <div
          className="relative w-9 h-9 rounded-full cursor-pointer group"
          style={{ padding: 2, background: "linear-gradient(135deg, #89AACC, #4E85BF)" }}
        >
          <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">JA</span>
          </div>
        </div>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Links */}
        {NAV_LINKS.map(link => (
          <button
            key={link}
            onClick={() => { setActive(link); scrollTo(link); }}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all ${
              active === link
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {link}
          </button>
        ))}

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Say Hi */}
        <div className="relative">
          <div className="absolute inset-[-2px] rounded-full accent-gradient-border opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <a
            href="mailto:hello@michaelsmith.com"
            className="relative z-10 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-surface text-muted hover:text-text-primary transition-colors flex items-center gap-1"
          >
            Say hi <span>↗</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
