import { Brain, Users, Sun, Apple } from "lucide-react";

const treatments = [
  {
    icon: Brain,
    title: "Terapia Psicológica",
    description:
      "Sesiones individuales y grupales con profesionales especializados para abordar desafíos emocionales.",
  },
  {
    icon: Users,
    title: "Apoyo Familiar",
    description:
      "Programas integrales que involucran a la familia en el proceso de recuperación y bienestar.",
  },
  {
    icon: Sun,
    title: "Actividades al Aire Libre",
    description:
      "Ejercicio, relajación y actividades recreativas en nuestros amplios jardines y áreas verdes.",
  },
  {
    icon: Apple,
    title: "Nutrición Equilibrada",
    description:
      "Plan alimenticio personalizado diseñado por nutriólogos para restaurar tu salud física.",
  },
];

const TreatmentSection = () => {
  return (
    <section id="tratamiento" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestro Enfoque
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamiento integral y humanista
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos programas residenciales personalizados para ayudar a personas que
            enfrentan afecciones por el consumo de elementos nocivos o desafíos emocionales.
            Nuestro enfoque incluye nutrición, ejercicio, terapias individuales y grupales,
            relajación y actividades recreativas para lograr una recuperación exitosa y duradera.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-secondary rounded-full px-6 py-3">
            <span className="text-secondary-foreground font-semibold">
              Duración mínima recomendada: 35 días
            </span>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft card-hover border border-border/50"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <treatment.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {treatment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
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
                  "Seguimiento post-tratamiento",
                  "Confidencialidad garantizada",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Confidencial" },
                { value: "24/7", label: "Supervisión" },
                { value: "35+", label: "Días de programa" },
                { value: "∞", label: "Apoyo continuo" },
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
