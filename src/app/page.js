import { Barlow } from "next/font/google";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import FinalCtaSection from "./components/FinalCtaSection";
import HeroSection from "./components/HeroSection";
import OwnershipSection from "./components/OwnershipSection";
import SectorsSection from "./components/SectorsSection";
import TestimonialSlider from "./components/TestimonialSlider";
import TrustStatsSection from "./components/TrustStatsSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export default function Home() {
  return (
    <div className={`${barlow.className} min-h-screen bg-[#0a0a0a]`}>
      <HeroSection />
      <TrustStatsSection />
      <WhoWeAreSection />
      <SectorsSection />
      <OwnershipSection />
      <FeaturedProjectsSection />
      <TestimonialSlider />
      <FinalCtaSection />
    </div>
  );
}
