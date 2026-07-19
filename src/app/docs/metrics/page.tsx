import { MetricCard } from '@/components/mdx/MetricCard';
import { Callout } from '@/components/mdx/Callout';
import { ComparisonBlock } from '@/components/mdx/ComparisonBlock';

export default function Page() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Metrics Explained</h1>
      <p>
        Evaluating Intrusion Detection Systems (IDS) for Unmanned Aerial Vehicles (UAVs) relies on core performance metrics. We focus on accuracy, precision, recall, and the F1-score across two different research methodologies.
      </p>

      <h2>System 1: Hybrid ML Detection Metrics</h2>
      <p>
        The first study evaluated a combination of supervised and unsupervised models for detecting known and zero-day attacks (e.g., GPS spoofing, Data Injection, Network Intrusion).
      </p>
      <div className="flex flex-wrap gap-4 my-6">
        <MetricCard title="Overall Accuracy" value="97.8%" />
        <MetricCard title="Precision" value="96.7%" />
        <MetricCard title="Recall" value="95.4%" />
        <MetricCard title="F1-Score" value="96.1%" />
      </div>
      <Callout type="insight">
        <strong>Zero-Day Detection:</strong> The unsupervised models in the proposed system were specifically evaluated for their ability to detect zero-day attacks, achieving an accuracy of <strong>92.5%</strong> with a low false positive rate of just <strong>2.3%</strong>.
      </Callout>

      <h2>System 2: Cyber-Physical Fusion Performance</h2>
      <p>
        The second study tested models using cyber-only, physical-only, and fused cyber-physical datasets. It also assessed how well the models generalized when exposed to varying complexities and ranges of attack data.
      </p>
      
      <ComparisonBlock 
        leftTitle="Cyber-Only vs Physical-Only" 
        rightTitle="Cyber-Physical Fusion" 
        leftContent={
          <ul>
            <li>Models trained on cyber-only features outperformed physical-only models.</li>
            <li>Training on simple de-authentication attacks led to the lowest generalization ability.</li>
            <li>When trained exclusively on FDI attacks, cyber-only models achieved an average F1-score of 76.82% against unseen attacks.</li>
          </ul>
        } 
        rightContent={
          <ul>
            <li>Fusing cyber and physical features resulted in a <strong>1-4% improvement</strong> over cyber-only models.</li>
            <li>The 1D-CNN architecture achieved an F1-score of <strong>80.33%</strong> when trained on FDI and tested against unseen attacks.</li>
            <li>Expanding the attack range (training on Replay, Evil Twin, and FDI attacks) boosted the CP 1D-CNN F1-score to <strong>96.13%</strong>.</li>
          </ul>
        } 
      />

      <Callout type="info">
        In general, increasing the complexity (e.g., training on stealthy False Data Injection attacks rather than simple Denial-of-Service) and the range of attack types in the training set dramatically improves the IDS's ability to detect unknown anomalies.
      </Callout>
    </div>
  )
}
