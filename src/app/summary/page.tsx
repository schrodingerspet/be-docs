import { PageHeader } from "@/components/layout/PageHeader";

export default function Summary() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Conclusion"
        title="Final Takeaway"
        description="Synthesizing the strengths of both papers to define the ultimate blueprint for future UAV security."
      />

      <div className="max-w-4xl mt-8">
        <div className="content-card bg-panel-strong p-8 lg:p-12">
          <div className="pull-quote mb-8">
            <p className="pull-quote__kicker">The Ultimate Blueprint</p>
            <blockquote className="pull-quote__text">
              "A genuinely robust UAV IDS would combine Paper 1's cyber-physical data fusion (complete state picture) with Paper 2's hybrid supervised/unsupervised architecture (real-time zero-day coverage at &lt;200ms)."
            </blockquote>
          </div>

          <div className="prose prose-lg text-ink font-body leading-relaxed space-y-6">
            <p>
              Both <strong>Paper 1 (Hassler et al., 2023)</strong> and <strong>Paper 2 (Sophia S et al., 2025)</strong> tackle the critical vulnerability of Unmanned Aerial Vehicles to cyber attacks. While both successfully apply machine learning to detect intrusions, they approach the solution from two distinct angles that highly complement each other.
            </p>
            
            <p>
              Paper 1 argues that the missing link in UAV security is the data itself; by fusing traditional network traffic (cyber data) with flight dynamics (physical data), they achieve a highly accurate representation of the drone's state. They back this up by creating a physical testbed, publishing their dataset, and using SHAP values to prove that features like <code className="font-label text-sm bg-paper border border-ink px-1 py-0.5">flight_time</code> and <code className="font-label text-sm bg-paper border border-ink px-1 py-0.5">wlan.duration</code> are collectively necessary for detection.
            </p>

            <p>
              Conversely, Paper 2 argues that the missing link is the model architecture's ability to handle unknown threats. They propose a hybrid model that uses supervised learning for known threats and unsupervised learning (Autoencoders/Isolation Forests) to catch zero-day attacks, achieving an impressive <strong>92.5% zero-day detection rate</strong> and sub-200 ms latency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
