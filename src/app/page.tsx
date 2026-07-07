import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Hero} from "@/components/home/Hero";
import {MetricsGrid} from "@/components/home/MetricsGrid";
import {CompoundingAdvantage} from "@/components/home/CompoundingAdvantage";
import {Integrations} from "@/components/home/Integrations";
import {SecuritySection, StrategySection} from "@/components/home/SecurityAndStrategy";
import {CTASection} from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Page Content */}
      <MetricsGrid />
      <SecuritySection />
      <CompoundingAdvantage />
      <StrategySection />
      <Integrations />
      <CTASection />

      <Footer />
    </main>
  );
}
