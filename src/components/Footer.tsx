import { Instagram, Mail } from "lucide-react";
import { images } from "@/lib/placeholder-images";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#inicio">
              <img
                src={images.logo}
                alt="Tejo Barber Shop"
                className="h-10 object-contain"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/160x48/1a1a1a/ffffff?text=Tejo+Barber"; }}
              />
            </a>
            <p className="text-muted-foreground text-sm font-body mt-2">
              Tradição e estilo em Póvoa de Santa Iria.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/tejobarbershop" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:geral@tejobarbershop.pt" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Tejo Barber Shop. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
