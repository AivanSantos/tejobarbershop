import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import barberAction from "@/assets/barber-action.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-dark-gradient">
      <div className="container mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={barberAction}
              alt="Barbeiro a trabalhar na Tejo Barber Shop"
              className="w-full rounded object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Sobre Nós</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tradição e Estilo nas <span className="text-gold-gradient">Margens do Tejo</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Fundada a 9 de Março de 2026 em Póvoa de Santa Iria, a Tejo Barber Shop nasceu da vontade de criar um espaço onde cada homem se sente valorizado. Com um conceito moderno voltado especialmente ao público mais sénior, oferecemos muito mais do que um simples corte de cabelo.
              </p>
              <p>
                A nossa missão é proporcionar uma experiência autêntica, combinando técnicas tradicionais com as últimas tendências. Cada visita é um momento de cuidado pessoal, num ambiente acolhedor e sofisticado.
              </p>
              <p>
                O que nos distingue? A atenção ao detalhe, o atendimento personalizado e o compromisso com a excelência em cada serviço prestado.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {[
                { value: "2026", label: "Ano de Fundação" },
                { value: "3", label: "Profissionais" },
                { value: "100%", label: "Dedicação" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
