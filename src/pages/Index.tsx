import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TreatmentSection from "@/components/TreatmentSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Clínica de Bienestar en Cuernavaca | Clínica Bugambilia Cuernavaca";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Centro residencial en Cuernavaca para recuperar el bienestar integral mediante tratamientos humanistas personalizados. Atención 24/7."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Centro residencial en Cuernavaca para recuperar el bienestar integral mediante tratamientos humanistas personalizados. Atención 24/7.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TreatmentSection />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
