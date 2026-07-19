import React from 'react';
import { Callout } from '@/components/mdx/Callout';
import { MetricCard } from '@/components/mdx/MetricCard';
import { Grid, GridCard } from '@/components/mdx/Grid';
import { Tabs } from '@/components/mdx/Tabs';
import { Accordion } from '@/components/mdx/Accordion';

export default function Page() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Experimental Results Explorer</h1>
      
      <p className="lead">
        This section details the empirical findings from our proposed machine learning frameworks for Unmanned Aerial Vehicle (UAV) cyber-attack detection. The results validate the effectiveness of multi-modal data fusion and adaptive learning models.
      </p>

      <h2>Key Performance Metrics</h2>
      <p>
        The following metrics demonstrate the performance of the hybrid machine learning approach (Paper 1), combining supervised and unsupervised algorithms for anomaly and zero-day threat detection.
      </p>

      <div className="flex flex-wrap gap-4 my-8 not-prose">
        <MetricCard title="Overall Accuracy" value="97.8%" />
        <MetricCard title="Precision" value="96.7%" />
        <MetricCard title="F1-Score" value="96.1%" />
        <MetricCard title="Recall" value="95.4%" />
      </div>

      <Callout type="insight">
        <strong>Low False Positive Rate:</strong> The framework achieved a remarkable false positive rate of just <strong>2.3%</strong>, with detection latency consistently remaining under <strong>200 ms</strong>. This ensures uninterrupted UAV operations, crucial for mission-critical applications.
      </Callout>

      <h2>Attack-Specific Accuracy</h2>
      <p>
        Our supervised learning models were tested against various common cyber-attack vectors targeting UAVs. The breakdown of detection accuracy is as follows:
      </p>

      <Grid columns={3}>
        <GridCard title="GPS Spoofing" icon="🛰️">
          <strong>98.2% Accuracy.</strong> The highest detection rate was achieved against GPS spoofing, utilizing physical telemetry mismatches.
        </GridCard>
        <GridCard title="Data Injection" icon="💉">
          <strong>97.6% Accuracy.</strong> Effectively mitigated false control commands injected into the communication channel.
        </GridCard>
        <GridCard title="Network Intrusion" icon="🕵️">
          <strong>97.5% Accuracy.</strong> Successful identification of unauthorized access and denial-of-service attempts.
        </GridCard>
      </Grid>

      <Accordion title="Zero-Day Attack Detection (Unsupervised Learning)">
        <p>
          A critical challenge in cybersecurity is identifying unknown threats. The unsupervised models in the proposed system were evaluated for their ability to detect zero-day attacks based purely on deviations from normal flight behavior. 
        </p>
        <p>
          The system achieved a <strong>92.5% accuracy</strong> in detecting zero-day attacks, outperforming baseline existing systems (which scored around 80.1% - 81.4%) by a significant margin.
        </p>
      </Accordion>

      <h2>Cyber-Physical Data Fusion Performance</h2>
      <p>
        The second study (Hassler et al.) rigorously tested different model architectures across cyber-only, physical-only, and fused cyber-physical datasets. The results clearly indicate that temporal models using data fusion significantly outperform shallow or single-domain models.
      </p>

      <Tabs items={[
        {
          label: '1D-CNN (Best Performing)',
          content: (
            <div className="p-4 border border-t-0 rounded-b-xl bg-surface">
              <p>The 1D Convolutional Neural Network exploiting temporal correlations in fused data achieved the highest detection performance with a <strong>96.13% F1-score</strong>. It excelled at detecting slow-drift FDI attacks.</p>
            </div>
          )
        },
        {
          label: 'LSTM-RNN',
          content: (
            <div className="p-4 border border-t-0 rounded-b-xl bg-surface">
              <p>While capable of capturing temporal dynamics, the LSTM models were slightly outperformed by the 1D-CNN in our specific UAV context, but still showed substantial benefits from cyber-physical fusion (e.g., 94.11% F1-score in certain scenarios).</p>
            </div>
          )
        },
        {
          label: 'Shallow Models (SVM / FNN)',
          content: (
            <div className="p-4 border border-t-0 rounded-b-xl bg-surface">
              <p>Support Vector Machines and Feedforward Neural Networks treated data points in isolation. While fast, their peak F1-scores hovered around 80.33% for complex FDI scenarios, making them less suited for advanced stealthy attacks.</p>
            </div>
          )
        }
      ]} />

    </div>
  )
}

