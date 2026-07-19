import { PageHeader } from "@/components/layout/PageHeader";
import { Flowchart } from "@/components/ui/Flowchart";

export default function Paper2() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Paper 2 Analysis"
        title="Drone Cyber Attack Detection through ML"
        description="Sophia S, Getzi Jeba Leelipushpam Paulraj, and Devanshu Kumar (2025). ICVADV-2025."
        stats={[
          { label: "Peak F1", value: "96.1%" },
          { label: "Zero-Day Acc", value: "92.5%" },
          { label: "Latency", value: "<200ms" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-start">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <section>
            <div className="section-header">
              <h2 className="section-title">Overview & Motivation</h2>
            </div>
            <p className="text-muted leading-relaxed">
              UAVs operating in critical applications are targeted by cyber attacks, but traditional rule-based cybersecurity mechanisms cannot handle the dynamic nature of these threats. The rapid integration of UAVs in defense, agriculture, and logistics has exposed severe vulnerabilities to GPS spoofing, network intrusions, and jamming. The objective is to create a hybrid ML-based framework utilizing both supervised learning (for known attacks) and unsupervised learning (for zero-day anomalies).
            </p>
          </section>

          <section>
            <div className="section-header">
              <h2 className="section-title">Proposed Architecture</h2>
            </div>
            <Flowchart
              nodes={[
                { id: "1", label: "Data Acquisition", desc: "Real-time UAV telemetry + control signals, simulated + real logs" },
                { id: "2", label: "Preprocessing", desc: "Missing-value imputation, noise reduction, feature scaling" },
                { id: "3", label: "Feature Extraction", desc: "RFE + PCA (Dimensionality Reduction)" },
                { id: "4", label: "Supervised Branch (Known Attacks)", desc: "Random Forest / SVM / Adaptive NN for GPS spoofing, data injection, network intrusion" },
                { id: "5", label: "Unsupervised Branch (Zero-Day)", desc: "Autoencoders / Isolation Forest based on reconstruction-error" },
                { id: "6", label: "Results Output", desc: "Threat classification + mitigation trigger (<200ms latency)" }
              ]}
            />
          </section>

          <section>
            <div className="section-header">
              <h2 className="section-title">Dataset & Setup</h2>
            </div>
            <table className="record-table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Source</td>
                  <td>NOT disclosed — described as mixed simulated UAV ops + real-world telemetry logs</td>
                </tr>
                <tr>
                  <td>Split</td>
                  <td>70:15:15 (Training:Validation:Testing)</td>
                </tr>
                <tr>
                  <td>Preprocessing</td>
                  <td>Imputation, noise reduction, scaling, Recursive Feature Elimination (RFE), PCA</td>
                </tr>
                <tr>
                  <td>Hardware</td>
                  <td>i7 CPU, 16GB RAM, GTX 1080 GPU</td>
                </tr>
                <tr>
                  <td>Attacks Tested</td>
                  <td>GPS spoofing, data injection, network intrusion</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="section-header">
              <h2 className="section-title">Key Results</h2>
            </div>
            <ul className="checklist">
              <li>97.8% overall accuracy, outperforming baseline systems (91.8% and 90.8%).</li>
              <li>96.7% precision with a remarkably low False Positive Rate of 2.3%.</li>
              <li>Successfully detected zero-day attacks with an accuracy of 92.5%.</li>
              <li>Real-time detection was validated with a processing latency of less than 200ms.</li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-6">
          <aside className="sidebar-panel">
            <h3 className="sidebar-panel__title">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Python 3.8", "TensorFlow", "Scikit-learn", "PyTorch", "Random Forest", "SVM", "Adaptive NN", "Autoencoders", "Isolation Forest"].map(tech => (
                <span key={tech} className="status-chip">{tech}</span>
              ))}
            </div>
          </aside>

          <div className="quiz-card__visual">
            <p className="quiz-card__visual-kicker">Key Insight</p>
            <blockquote className="quiz-card__visual-focus">
              "Unsupervised autoencoders flag previously unseen zero-day attacks with high accuracy."
            </blockquote>
          </div>

          <aside className="content-card bg-panel-strong">
            <h3 className="font-heading text-2xl m-0 leading-none">Strengths</h3>
            <ul className="checklist text-sm">
              <li>Explicit zero-day detection module</li>
              <li>Proven sub-200ms real-time latency</li>
            </ul>
          </aside>

          <aside className="content-card">
            <h3 className="font-heading text-2xl m-0 leading-none">Weaknesses & Limits</h3>
            <ul className="checklist text-sm">
              <li>Black-box dataset (no source/link provided)</li>
              <li>No hardware-in-the-loop test on real UAV edge compute</li>
              <li>Assumes desktop-GPU latency scales down</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
