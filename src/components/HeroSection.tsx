import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sky gradient */}
      <div className="absolute inset-0 gradient-hero">
        {/* Background Image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 text-center py-32">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Bugambilia Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <defs>
                  <radialGradient id="heroFlowerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(337, 76%, 60%)" />
                    <stop offset="100%" stopColor="hsl(337, 76%, 47%)" />
                  </radialGradient>
                </defs>
                {/* Petals */}
                <ellipse cx="50" cy="25" rx="18" ry="25" fill="url(#heroFlowerGradient)" />
                <ellipse cx="50" cy="25" rx="18" ry="25" fill="url(#heroFlowerGradient)" transform="rotate(72, 50, 50)" />
                <ellipse cx="50" cy="25" rx="18" ry="25" fill="url(#heroFlowerGradient)" transform="rotate(144, 50, 50)" />
                <ellipse cx="50" cy="25" rx="18" ry="25" fill="url(#heroFlowerGradient)" transform="rotate(216, 50, 50)" />
                <ellipse cx="50" cy="25" rx="18" ry="25" fill="url(#heroFlowerGradient)" transform="rotate(288, 50, 50)" />
                {/* Center */}
                <circle cx="50" cy="50" r="10" fill="hsl(45, 90%, 55%)" />
              </svg>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-soft">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-navy text-sm font-medium">
              Atención las 24 horas, los 7 días
            </span>
          </div>

          {/* Headlines */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy mb-4 leading-tight">
            Más que un tratamiento, un nuevo punto de partida.
          </h1>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Recupera tu Sentido de Vida
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-navy/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Tu proceso es único: recibe apoyo directo de especialistas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/527773254124"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Agenda una consulta gratuita
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              <a href="tel:+527773254124" className="gap-3">
                <Phone className="w-6 h-6" />
                +52 777 325 4124
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "10+", label: "Años de experiencia" },
              { number: "500+", label: "Vidas transformadas" },
              { number: "24/7", label: "Atención continua" },
              { number: "35", label: "Días de programa" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-soft"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-navy/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-navy/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-navy/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
