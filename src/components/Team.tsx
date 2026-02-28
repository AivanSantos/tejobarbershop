import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { images } from "@/lib/placeholder-images";

const team = [
  {
    name: "Aivan Santo",
    role: "CEO",
    image: images.barber1,
    bio: "Fundador e diretor da Tejo Barber Shop, o Aivan lidera a equipa com visão e dedicação, garantindo que cada cliente recebe um serviço de excelência.",
    specialties: ["Gestão", "Atendimento Premium"],
  },
  {
    name: "Arthur Medrado",
    role: "Barbeiro e Gerente",
    image: "/Arthur.jpeg",
    bio: "Sócio e barbeiro talentoso, o Arthur traz criatividade e técnica apurada à equipa. Especialista em cortes modernos e tendências atuais.",
    specialties: ["Cortes Modernos", "Styling"],
  },
  {
    name: "Ricardo Pereira",
    role: "Barbeiro",
    image: "/Ricardo.jpeg",
    bio: "O Ricardo combina precisão e atenção ao detalhe em cada serviço. Com um toque pessoal, garante resultados impecáveis para todos os clientes.",
    specialties: ["Barba Tradicional", "Cortes Clássicos"],
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipa" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Equipa</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Os Nossos <span className="text-gold-gradient">Profissionais</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <a href="https://www.instagram.com/tejobarbershop" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-muted-foreground transition-colors" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
              <p className="text-primary text-sm font-body uppercase tracking-wider mt-1 mb-3">{member.role}</p>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.specialties.map((s) => (
                  <span key={s} className="text-xs border border-border text-primary px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
