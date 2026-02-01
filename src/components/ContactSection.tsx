import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const message = `Hola, mi nombre es ${formData.nombre}. Mi teléfono es ${formData.telefono}. ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/527773254124?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contáctanos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¡Estamos aquí para ayudarte 24/7!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos de forma confidencial para una evaluación gratuita.
            Ayudamos a familias a recuperar la armonía y el bienestar integral.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-whatsapp mb-4" />
                <p className="text-lg font-semibold text-foreground">
                  ¡Mensaje enviado!
                </p>
                <p className="text-muted-foreground">
                  Te contactaremos pronto por WhatsApp
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre completo
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+52 777 123 4567"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    ¿Cómo podemos ayudarte?
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos brevemente tu situación..."
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Tu información es 100% confidencial
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/527773254124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-whatsapp/10 hover:bg-whatsapp/20 rounded-2xl p-6 transition-colors group"
              >
                <div className="w-14 h-14 bg-whatsapp rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-whatsapp-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Respuesta inmediata</p>
                </div>
              </a>
              <a
                href="tel:+527773254124"
                className="flex items-center gap-4 bg-phone/10 hover:bg-phone/20 rounded-2xl p-6 transition-colors group"
              >
                <div className="w-14 h-14 bg-phone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-phone-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Llamar</p>
                  <p className="text-sm text-muted-foreground">+52 777 325 4124</p>
                </div>
              </a>
            </div>

            {/* Info Cards */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">
                    Cuernavaca, Morelos, México
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dirección exacta proporcionada al confirmar cita
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario de atención</p>
                  <p className="text-muted-foreground">
                    24 horas, 7 días de la semana
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Siempre disponibles para ti
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60223.53837948!2d-99.28441995!3d18.91893595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde15b2d9f46d%3A0xd04c0d515e0d83b0!2sCuernavaca%2C%20Morelos%2C%20Mexico!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Cuernavaca"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
