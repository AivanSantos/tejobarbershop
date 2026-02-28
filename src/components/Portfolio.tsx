import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio2.jpg";
import portfolio3 from "@/assets/portfolio3.jpg";
import portfolio4 from "@/assets/portfolio4.jpg";
import portfolio5 from "@/assets/portfolio5.jpg";
import portfolio6 from "@/assets/portfolio6.jpg";

const filters = ["Todos", "Cortes", "Barba", "Premium"];

const works = [
  { src: portfolio1, alt: "Fade clássico", category: "Cortes" },
  { src: portfolio2, alt: "Pompadour moderno", category: "Premium" },
  { src: portfolio3, alt: "Barba completa", category: "Barba" },
  { src: portfolio4, alt: "Textured crop", category: "Cortes" },
  { src: portfolio5, alt: "Slick back com barba", category: "Premium" },
  { src: portfolio6, alt: "Buzz cut com design", category: "Cortes" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos" ? works : works.filter((w) => w.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-dark-gradient" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            O Nosso <span className="text-gold-gradient">Trabalho</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-sm font-body font-medium uppercase tracking-wider px-5 py-2 rounded transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((work, i) => (
            <motion.div
              key={work.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded aspect-square"
            >
              <img
                src={work.src}
                alt={work.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="font-display text-lg font-semibold">{work.alt}</p>
                  <p className="text-primary text-sm">{work.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
