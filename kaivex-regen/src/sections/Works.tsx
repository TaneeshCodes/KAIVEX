import { motion } from "framer-motion";

const PROJECTS = [
  { id: 1, title: "Automotive Motion", span: 7, seed: "auto", aspect: "aspect-[4/3]" },
  { id: 2, title: "Urban Architecture", span: 5, seed: "urban", aspect: "aspect-[4/3]" },
  { id: 3, title: "Human Perspective", span: 5, seed: "human", aspect: "aspect-[4/3]" },
  { id: 4, title: "Brand Identity", span: 7, seed: "brand", aspect: "aspect-[4/3]" },
];

export default function Works() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-light text-text-primary">
              Featured <em className="font-display italic">projects</em>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-sm">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          <div className="relative hidden md:inline-flex group">
            <div className="absolute inset-[-2px] rounded-full accent-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button className="relative z-10 rounded-full text-sm px-5 py-2.5 border border-stroke text-muted hover:text-text-primary transition-all">
              View all work →
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer ${project.aspect}`}
              style={{ gridColumn: `span ${project.span}` }}
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/800/600`}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg flex items-end p-6">
                <div className="relative">
                  <div className="absolute inset-[-2px] rounded-full accent-gradient-border" />
                  <div className="relative z-10 rounded-full bg-white text-black text-sm px-5 py-2.5 font-medium">
                    View — <em className="font-display italic">{project.title}</em>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
