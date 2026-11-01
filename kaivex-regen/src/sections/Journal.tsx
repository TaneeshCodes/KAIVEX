import { motion } from "framer-motion";

const ENTRIES = [
  { id: 1, title: "The Art of Negative Space in UI Design", readTime: "5 min read", date: "Oct 2026", seed: "journal1" },
  { id: 2, title: "Building Motion Systems That Feel Alive", readTime: "8 min read", date: "Sep 2026", seed: "journal2" },
  { id: 3, title: "Typography as Interface: A Deep Dive", readTime: "6 min read", date: "Aug 2026", seed: "journal3" },
  { id: 4, title: "Color Theory for Dark-Mode Interfaces", readTime: "4 min read", date: "Jul 2026", seed: "journal4" },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-light text-text-primary">
              Recent <em className="font-display italic">thoughts</em>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-sm">
              Writings on design, development, and building things that matter.
            </p>
          </div>
          <button className="relative hidden md:inline-flex rounded-full text-sm px-5 py-2.5 border border-stroke text-muted hover:text-text-primary transition-all">
            View all →
          </button>
        </motion.div>

        <div className="flex flex-col gap-3">
          {ENTRIES.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke cursor-pointer transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-stroke">
                <img
                  src={`https://picsum.photos/seed/${entry.seed}/80/80`}
                  alt={entry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-text-primary truncate group-hover:text-text-primary transition-colors">
                  {entry.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-xs text-muted hidden sm:block">{entry.readTime}</span>
                <span className="text-xs text-muted">{entry.date}</span>
                <span className="text-muted group-hover:text-text-primary transition-colors">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
