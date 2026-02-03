import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TreatmentSection from "@/components/TreatmentSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Clínica de Rehabilitación en Cuernavaca | Clínica Bugambilia Cuernavaca";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <TreatmentSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
