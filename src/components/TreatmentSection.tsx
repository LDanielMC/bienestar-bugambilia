import { 
  Heart, 
  Users, 
  Brain, 
  Shield, 
  Calendar, 
  User, 
  Footprints,
  Activity,
  Stethoscope,
  ClipboardCheck,
  TestTube,
  Clock,
  Home,
  Waves,
  Church,
  Target
} from "lucide-react";

const treatmentFeatures = [
  { icon: Heart, text: "Trato humano" },
  { icon: Brain, text: "Interdisciplinario (especialistas en salud mental y desafíos emocionales)" },
  { icon: Activity, text: "20 sesiones de Estimulación Magnética Pulsada (EMTr)" },
  { icon: Shield, text: "Zona residencial con seguridad privada" },
  { icon: Users, text: "12 Terapias grupales por semana" },
  { icon: User, text: "1 Terapia individual por semana" },
  { icon: Footprints, text: "Programa de apoyo en 12 pasos para el bienestar personal (lunes a sábados)" },
  { icon: Home, text: "1 Terapia familiar por semana" },
  { icon: Target, text: "Actividad física" },
  { icon: Stethoscope, text: "1 Valoración médica semanal" },
  { icon: ClipboardCheck, text: "1 Valoración psiquiátrica al ingreso" },
  { icon: TestTube, text: "Pruebas de laboratorio de tres elementos al ingreso" },
  { icon: Clock, text: "Enfermería 24/7" },
  { icon: Calendar, text: "Capacidad para 18 usuarios" },
  { icon: Waves, text: "Alberca, jardines, capilla" },
  { icon: Church, text: "Cancha de usos múltiples" },
  { icon: Shield, text: "Habitaciones con baño privado" },
];

const TreatmentSection = () => {
  return (
    <section id="tratamiento" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Lo que incluye nuestro tratamiento
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Tratamiento integral y humanista
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos programas residenciales personalizados para ayudar a personas que
            enfrentan afecciones por el consumo de elementos nocivos o desafíos emocionales.
            Nuestro enfoque integral garantiza una recuperación exitosa y duradera.
          </p>
        </div>

        {/* Treatment Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {treatmentFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-navy font-medium leading-relaxed">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info Card */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                Un camino hacia la vida en armonía
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestro equipo multidisciplinario trabaja contigo para superar conductas que
                afectan tu vida diaria. Cada programa se adapta a tus necesidades específicas,
                brindándote las herramientas necesarias para una recuperación exitosa y duradera.
              </p>
              <ul className="space-y-3">
                {[
                  "Evaluación inicial personalizada",
                  "Plan de tratamiento individualizado",
                  "Grupos de apoyo mutuo",
                  "Seguimiento post-tratamiento",
                  "Confidencialidad garantizada",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Confidencial" },
                { value: "24/7", label: "Supervisión" },
                { value: "35", label: "Días de programa" },
                { value: "18", label: "Usuarios máx." },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center shadow-soft"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
