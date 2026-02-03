import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#tratamiento", label: "Tratamiento" },
    { href: "#instalaciones", label: "Instalaciones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-narrow mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {/* Bugambilia Flower Icon */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <radialGradient id="flowerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(337, 76%, 60%)" />
                    <stop offset="100%" stopColor="hsl(337, 76%, 47%)" />
                  </radialGradient>
                </defs>
                {/* Petals */}
                <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#flowerGradient)" />
                <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#flowerGradient)" transform="rotate(72, 50, 50)" />
                <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#flowerGradient)" transform="rotate(144, 50, 50)" />
                <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#flowerGradient)" transform="rotate(216, 50, 50)" />
                <ellipse cx="50" cy="25" rx="15" ry="22" fill="url(#flowerGradient)" transform="rotate(288, 50, 50)" />
                {/* Center */}
                <circle cx="50" cy="50" r="8" fill="hsl(45, 90%, 55%)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-bold text-navy">
                Clínica Bugambilia
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Clínica de Rehabilitación en Cuernavaca, Morelos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-navy transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="default"
              asChild
            >
              <a
                href="https://wa.me/527773254124"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="phone"
              size="default"
              asChild
            >
              <a href="tel:+527773254124">
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-4 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-navy"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="whatsapp" size="lg" asChild className="w-full">
                <a
                  href="https://wa.me/527773254124"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos por WhatsApp
                </a>
              </Button>
              <Button variant="phone" size="lg" asChild className="w-full">
                <a href="tel:+527773254124">
                  <Phone className="w-5 h-5" />
                  Llama ahora
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
