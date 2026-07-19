import { PageHeader } from "@/components/layout/PageHeader";
import { MethodologyA } from "@/components/showcase/MethodologyA";
import { MethodologyB } from "@/components/showcase/MethodologyB";
import { ComparativeAnalysis } from "@/components/showcase/ComparativeAnalysis";
import { Conclusion } from "@/components/showcase/Conclusion";

export default function Home() {
  return (
    <div className="page-shell">
        <PageHeader 
          title="UAV Cyber-Attack Detection" 
          eyebrow="Research Showcase" 
          description="A synthesized abstract comparing two cutting-edge approaches to securing Unmanned Aerial Vehicles (UAVs) against cyber threats. We examine a cyber-physical data fusion architecture and a hybrid supervised-unsupervised machine learning framework, focusing exclusively on their methodologies for detecting attacks such as GPS spoofing, de-authentication, and false data injection." 
          stats={[
            { label: 'Domain', value: 'UAV Cybersecurity' },
            { label: 'Focus', value: 'Intrusion Detection' },
            { label: 'Papers Analyzed', value: '2' }
          ]}
        />
        <MethodologyA />
        <MethodologyB />
        <ComparativeAnalysis />
        <Conclusion />
    </div>
  );
}
