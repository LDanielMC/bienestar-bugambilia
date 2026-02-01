import { useState } from "react";
import facilityPool from "@/assets/facility-pool.jpg";
import facilityGym from "@/assets/facility-gym.jpg";
import facilityRoom from "@/assets/facility-room.jpg";
import facilityGarden from "@/assets/facility-garden.jpg";
import facilityDining from "@/assets/facility-dining.jpg";
import facilityTherapy from "@/assets/facility-therapy.jpg";

const facilities = [
  {
    image: facilityPool,
    title: "Alberca",
    description: "Espacio de relajación y ejercicio acuático",
  },
  {
    image: facilityGym,
    title: "Gimnasio",
    description: "Equipamiento moderno para actividad física",
  },
  {
    image: facilityRoom,
    title: "Habitaciones",
    description: "Espacios cómodos y acogedores",
  },
  {
    image: facilityGarden,
    title: "Jardines",
    description: "Amplias áreas verdes para meditación",
  },
  {
    image: facilityDining,
    title: "Comedor",
    description: "Alimentación nutritiva y balanceada",
  },
  {
    image: facilityTherapy,
    title: "Salas de Terapia",
    description: "Espacios diseñados para tu bienestar",
  },
];

const FacilitiesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="instalaciones" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestras Instalaciones
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un espacio diseñado para tu bienestar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contamos con instalaciones premium en Cuernavaca: habitaciones compartidas para
            fomentar la hermandad, alberca, gimnasio, jardines amplios y áreas de relajación
            para una estancia cómoda y motivadora.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer card-hover"
              onClick={() => setSelectedImage(facility.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {facility.title}
                </h3>
                <p className="text-white/80 text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🏊", text: "Alberca climatizada" },
            { icon: "🏋️", text: "Gimnasio equipado" },
            { icon: "🌴", text: "Jardines tropicales" },
            { icon: "🛏️", text: "Habitaciones cómodas" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-secondary/50 rounded-xl p-4"
            >
              <span className="text-3xl">{feature.icon}</span>
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Instalación"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitiesSection;
