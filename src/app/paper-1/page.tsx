import { PageHeader } from "@/components/layout/PageHeader";
import { Flowchart } from "@/components/ui/Flowchart";

export default function Paper1() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Paper 1 Analysis"
        title="Cyber-Physical Intrusion Detection System"
        description="Samuel Chase Hassler, Umair Ahmad Mughal, and Muhammad Ismail (2023). IEEE Transactions on Intelligent Transportation Systems."
        stats={[
          { label: "Peak F1", value: "96.13%" },
          { label: "Best Model", value: "1D-CNN" },
          { label: "Dataset", value: "IEEE Dataport" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-start">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <section>
            <div className="section-header">
              <h2 className="section-title">Overview & Motivation</h2>
            </div>
            <p className="text-muted leading-relaxed">
              Current Intrusion Detection Systems (IDSs) rely exclusively on either cyber or physical features, which fails to capture the complete cyber-physical nature of UAVs, thereby limiting detection performance. There is a lack of publicly available datasets containing correlated physical and cyber data for UAVs under normal and attack conditions, hindering research. UAVs are increasingly adopted across sectors but suffer from severe cybersecurity vulnerabilities that could lead to physical damage, hijacking, or data theft.
            </p>
          </section>

          <section>
            <div className="section-header">
              <h2 className="section-title">Proposed Architecture</h2>
            </div>
            <Flowchart
              nodes={[
                { id: "1", label: "DJI Tello EDU Testbed", desc: "Controller PC + adversary PC w/ ParrotOS/ALFA antenna" },
                { id: "2", label: "Data Collection", desc: "Benign flight + 4 attacks: De-auth DoS, Replay, Evil Twin, FDI" },
                { id: "3", label: "Parsing & Fusion", desc: "By timestamp (cyber: 37 features incl. IP/MAC; physical: 16 features incl. roll/pitch/temp)" },
                { id: "4", label: "SHAP Feature Selection", desc: "Identifies crucial cross-domain features" },
                { id: "5", label: "Grid Search + 5-fold CV", desc: "Hyperparameter tuning" },
                { id: "6", label: "Train/Test Models", desc: "SVM, FNN, LSTM, 1D-CNN (3:1 split)" },
                { id: "7", label: "Evaluation", desc: "Accuracy/Precision/Recall/F1/AUC" }
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
                  <td>Published on IEEE Dataport (doi: 10.21227/6/22-py65)</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>32,978 cyber + 6,236 physical raw samples &rarr; 12,741 benign / 16,843 malicious fused</td>
                </tr>
                <tr>
                  <td>Preprocessing</td>
                  <td>Min-max normalization; dropped frame.number, barometer, timestamp fields</td>
                </tr>
                <tr>
                  <td>Hardware</td>
                  <td>DJI Tello EDU, ALFA AWUS036ACH antenna, Controller PC, Adversary PC (ParrotOS)</td>
                </tr>
                <tr>
                  <td>Attacks Tested</td>
                  <td>De-authentication DoS, Replay, Evil Twin, False Data Injection (FDI)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <div className="section-header">
              <h2 className="section-title">Key Results</h2>
            </div>
            <ul className="checklist">
              <li>Cyber-physical fusion improved detection performance by 2-4% over cyber-only models and 14% over physical-only models.</li>
              <li>The 1D-CNN model achieved the highest performance, scoring a 96.13% F1-score when trained on Replay + Evil Twin + FDI and tested on all four.</li>
              <li>Training models on complex attacks (like FDI) resulted in better generalization to unseen attacks (up to 80.33% F1-score) compared to training on simple DoS attacks.</li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-6">
          <aside className="sidebar-panel">
            <h3 className="sidebar-panel__title">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Tello SDK", "Aircrack-ng", "Airgeddon", "Tcpdump", "Wireshark", "MATLAB", "SVM", "FNN", "LSTM-RNN", "1D-CNN", "SHAP"].map(tech => (
                <span key={tech} className="status-chip">{tech}</span>
              ))}
            </div>
          </aside>

          <div className="pull-quote">
            <p className="pull-quote__kicker">Key Insight</p>
            <blockquote className="pull-quote__text">
              "The first work to fuse cyber and physical data specifically for UAV intrusion detection."
            </blockquote>
          </div>

          <aside className="content-card bg-panel-strong">
            <h3 className="font-heading text-2xl m-0 leading-none">Strengths</h3>
            <ul className="checklist text-sm">
              <li>Public reproducible dataset</li>
              <li>Deep SHAP explainability</li>
              <li>Rigorous generalization testing across attack complexity</li>
            </ul>
          </aside>

          <aside className="content-card">
            <h3 className="font-heading text-2xl m-0 leading-none">Weaknesses & Limits</h3>
            <ul className="checklist text-sm">
              <li>Single drone model only (DJI Tello)</li>
              <li>Offline evaluation, no onboard real-time deployment</li>
              <li>No real-time latency/compute-overhead analysis on constrained hardware</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
