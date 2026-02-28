import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Corte Clássico",
    price: "15€",
    description: "Corte tradicional com técnicas precisas, adaptado ao seu estilo e tipo de cabelo.",
  },
  {
    icon: Scissors,
    name: "Corte + Barba",
    price: "25€",
    description: "Combinação perfeita de corte de cabelo e aparação de barba com toalha quente.",
  },
  {
    icon: Sparkles,
    name: "Barba Tradicional",
    price: "12€",
    description: "Aparação e modelação de barba com navalha, toalha quente e óleos premium.",
  },
  {
    icon: Crown,
    name: "Corte Premium",
    price: "20€",
    description: "Experiência completa com lavagem, corte personalizado e styling profissional.",
  },
  {
    icon: Crown,
    name: "Pacote Completo",
    price: "30€",
    description: "O melhor que temos: corte, barba, tratamento capilar e styling. A experiência Tejo.",
    featured: true,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Serviços</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Os Nossos <span className="text-gold-gradient">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-lg p-8 border transition-all duration-300 hover:shadow-gold ${
                service.featured
                  ? "bg-card border-primary/40 lg:col-span-1"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Mais Popular
                </span>
              )}
              <div className="flex items-center justify-between mb-4">
                <service.icon className="text-primary" size={28} />
                <span className="font-display text-3xl font-bold text-primary">{service.price}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#marcacao"
                className="inline-block border border-border text-foreground text-sm px-6 py-2.5 uppercase tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-all font-medium"
              >
                Marcar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
