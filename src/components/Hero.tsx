import { motion } from "framer-motion";

const HERO_BACKGROUND =
  "https://img.freepik.com/fotos-premium/diferentes-ferramentas-de-cabeleireiro-em-mesa-cinzenta-contra-fundo-preto-espaco-para-texto_495423-82802.jpg?semt=ais_hybrid&w=740&q=80";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - ferramentas de cabeleireiro */}
      <div className="absolute inset-0">
        <img
          src={HERO_BACKGROUND}
          alt="Ferramentas de cabeleireiro na Tejo Barber Shop"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Barbearia em Póvoa de Santa Iria
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Mais do que um corte,{" "}
          <span className="text-gold-gradient">uma experiência.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          Na Tejo Barber Shop, cada detalhe é pensado para si. Um conceito moderno com a elegância e o cuidado que o público sénior merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#marcacao"
            className="bg-primary text-primary-foreground px-10 py-4 text-base font-semibold uppercase tracking-wider rounded hover:opacity-90 transition-opacity shadow-gold"
          >
            Marcar Agora
          </a>
          <a
            href="#servicos"
            className="border border-primary text-foreground px-10 py-4 text-base font-semibold uppercase tracking-wider rounded hover:bg-primary/10 transition-colors"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
