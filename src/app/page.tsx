import About from "@/components/Services";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HeadingSection from "@/components/HeadingSection";
import VentaryReport from "@/components/VentaryReport";
import VentaryDetailedVicheles from "@/components/VentaryDetailedVicheles";
import PricingPlan from "@/components/PricingPlan";
import ImageComponents from "@/components/ImageComponents";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <HeadingSection />
      <VentaryReport />
      <VentaryDetailedVicheles />
      <PricingPlan />
      <ImageComponents />
    </main>
  );
}
