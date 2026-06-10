/**
 * Home Page - RealAR
 * Fidelidade 100% ao protótipo original
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCasesSection from "@/components/UseCasesSection";
import ConstructionSection from "@/components/ConstructionSection";
import FeaturesSection from "@/components/FeaturesSection";
import CorporateSection from "@/components/CorporateSection";
import PlansSection from "@/components/PlansSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-0">
        <Hero />
        <UseCasesSection />
        {/* <ConstructionSection /> */}
        <FeaturesSection />
        <CorporateSection />
        <PlansSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}
