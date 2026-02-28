import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/lib/placeholder-images";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Equipa", href: "#equipa" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contactos", href: "#contactos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#inicio" className="flex items-center">
          <img
            src={images.logo}
            alt="Tejo Barber Shop"
            className="h-10 md:h-12 object-contain"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/160x48/1a1a1a/ffffff?text=Tejo+Barber"; }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#marcacao"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            Marcar Agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#marcacao"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded mt-2"
              >
                Marcar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
