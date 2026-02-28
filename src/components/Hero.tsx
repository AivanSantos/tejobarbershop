import { motion } from "framer-motion";

const HERO_BACKGROUND = "https://chatgpt.com/backend-api/estuary/content?id=file_00000000f2a0720a9c124def93379cdb&ts=492293&p=fs&cid=1&sig=5acaa5f44d11cc341ca2cac476a82a55805829a4bda257543a1eef379b9768bf&v=0";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white"
        >
          Mais do que um corte,{" "}
          <span className="text-white">uma experiência.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          Na Tejo Barber Shop, cada detalhe é pensado para si. Um conceito moderno com a elegância e o cuidado que o público sénior merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#marcacao"
            className="bg-white text-black px-10 py-4 text-base font-semibold uppercase tracking-wider rounded hover:bg-white/90 transition-opacity"
          >
            Marcar Agora
          </a>
          <a
            href="#servicos"
            className="border-2 border-white text-white px-10 py-4 text-base font-semibold uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
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
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
