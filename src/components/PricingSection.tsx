import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary to-white rounded-3xl p-8 md:p-12 border-2 border-accent/30 shadow-card">
            <div className="text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Inversión en tu bienestar
              </span>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
                Tratamiento residencial de 35 días
              </h2>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                  $35,199
                </span>
                <span className="text-2xl md:text-3xl text-muted-foreground">.00</span>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Incluye todo lo necesario para una recuperación exitosa y duradera.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "Sin costos ocultos",
                  "Evaluación gratuita",
                  "Facilidades de pago",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://wa.me/527773254124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicita información por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
