import { MessageCircle, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="bg-primary py-12 px-4">
        <div className="container-narrow mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            ¿Listo para dar el primer paso hacia el bienestar?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte. Contáctanos ahora para una
            evaluación confidencial y gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-white text-primary hover:bg-white/90 font-bold"
            >
              <a
                href="https://wa.me/527773254124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp 24/7
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+527773254124">
                <Phone className="w-5 h-5" />
                +52 777 325 4124
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12 px-4">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                {/* Bugambilia Flower */}
                <div className="w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <radialGradient id="footerFlowerGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(337, 76%, 70%)" />
                        <stop offset="100%" stopColor="hsl(337, 76%, 55%)" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#footerFlowerGradient)" />
                    <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#footerFlowerGradient)" transform="rotate(72, 50, 50)" />
                    <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#footerFlowerGradient)" transform="rotate(144, 50, 50)" />
                    <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#footerFlowerGradient)" transform="rotate(216, 50, 50)" />
                    <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#footerFlowerGradient)" transform="rotate(288, 50, 50)" />
                    <circle cx="50" cy="50" r="8" fill="hsl(45, 90%, 65%)" />
                  </svg>
                </div>
                <h4 className="font-display text-xl font-bold">
                  Clínica Bugambilia Cuernavaca
                </h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Centro residencial de bienestar en Cuernavaca, Morelos.
                Tratamientos humanistas personalizados para recuperar una vida
                en armonía. Atención confidencial 24/7.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {[
                  "SMSM",
                  "AMESAD",
                  "Consejo Popular de Salud Mental",
                  "Manos Enlazadas",
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 rounded-lg px-3 py-2 text-xs text-white/80"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold mb-4">Enlaces rápidos</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#tratamiento"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Nuestro Tratamiento
                  </a>
                </li>
                <li>
                  <a
                    href="#instalaciones"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Instalaciones
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Aviso de Privacidad
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h5 className="font-semibold mb-4">Síguenos</h5>
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-white/70">
                Cuernavaca, Morelos, México
              </p>
              <p className="text-sm text-white/70">+52 777 325 4124</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>
              © {currentYear} Clínica Bugambilia Cuernavaca. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
