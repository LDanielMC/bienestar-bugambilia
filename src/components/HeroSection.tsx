import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 text-center py-32">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              Atención las 24 horas, los 7 días
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Recupera tu bienestar en un entorno seguro y humanista
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Programas personalizados para superar malos hábitos y recuperar una vida plena.
            Atención 24/7 con equipo profesional en Cuernavaca, Morelos.
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
              className="border-white text-white hover:bg-white hover:text-primary"
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
              { number: "35", label: "Días mínimos" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
