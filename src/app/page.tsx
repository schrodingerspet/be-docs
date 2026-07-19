import { PageHeader } from "@/components/layout/PageHeader";
import { HeroSection } from "@/components/showcase/HeroSection";
import { MethodologyA } from "@/components/showcase/MethodologyA";
import { MethodologyB } from "@/components/showcase/MethodologyB";
import { ComparativeAnalysis } from "@/components/showcase/ComparativeAnalysis";
import { Conclusion } from "@/components/showcase/Conclusion";

export default function Home() {
  return (
    <div className="app-shell flex flex-col min-h-screen">
      <main className="content-area container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <PageHeader title="Comparative Analysis" />
        <HeroSection />
        <MethodologyA />
        <MethodologyB />
        <ComparativeAnalysis />
        <Conclusion />
      </main>
    </div>
  );
}
