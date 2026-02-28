import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Globe } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contactos" className="section-padding bg-dark-gradient" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Contactos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Venha <span className="text-gold-gradient">Visitar-nos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Morada</h3>
                <p className="text-muted-foreground font-body font-light">
                  Rua da República, 109<br />2626-145 Póvoa de Santa Iria, Portugal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Telefone</h3>
                <a href="tel:+351962827946" className="text-muted-foreground font-body font-light hover:text-primary transition-colors">
                  +351 962 827 946
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Email</h3>
                <a href="mailto:geral@tejobarbershop.pt" className="text-muted-foreground font-body font-light hover:text-primary transition-colors">
                  geral@tejobarbershop.pt
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Website</h3>
                <a href="https://www.tejobarbershop.pt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body font-light hover:text-primary transition-colors">
                  www.tejobarbershop.pt
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Horário</h3>
                <div className="text-muted-foreground font-body font-light space-y-1">
                  <p>Segunda a Sexta: 09:00 – 19:00</p>
                  <p>Sábado: 09:00 – 17:00</p>
                  <p>Domingo: Encerrado</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/tejobarbershop" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-9.07!3d38.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1931!2sRua+da+Rep%C3%BAblica+109%2C+2626-145+P%C3%B3voa+de+Santa+Iria!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Tejo Barber Shop"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
