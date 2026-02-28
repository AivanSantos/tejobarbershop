import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "José Almeida",
    text: "A melhor barbearia de Póvoa de Santa Iria, sem dúvida. O ambiente é incrível e o atendimento é excelente. Recomendo a 100%!",
    rating: 5,
  },
  {
    name: "Manuel Costa",
    text: "Já experimentei muitas barbearias, mas a Tejo é especial. A atenção ao detalhe e o profissionalismo fazem toda a diferença.",
    rating: 5,
  },
  {
    name: "Carlos Ferreira",
    text: "O pacote completo é uma experiência fantástica. Saio sempre a sentir-me renovado. O Arthur é um artista!",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="avaliacoes" className="section-padding bg-dark-gradient" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Avaliações</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            O Que Dizem os Nossos <span className="text-gold-gradient">Clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="text-primary fill-primary" size={16} />
                ))}
              </div>
              <p className="text-foreground/80 font-body font-light leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-display font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
