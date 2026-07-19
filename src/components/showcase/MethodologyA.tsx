export function MethodologyA() {
  return (
    <section className="mb-16">
      <div className="section-header mb-6">
        <h2 className="section-title">Methodology A: Cyber-Physical Fusion</h2>
        <span className="section-count">Paper 1</span>
      </div>
      
      <div className="dashboard-layout">
        <div className="panel-stack">
          <div className="content-card">
            <h3 className="content-card__eyebrow">Approach Overview</h3>
            <p className="content-card__copy">
              Hassler et al. address the limitation of traditional IDSs that rely solely on either cyber or physical features. They developed an IDS that treats UAVs as integrated cyber-physical systems, capturing a comprehensive state representation.
            </p>
          </div>

          <div className="content-card">
            <h3 className="content-card__eyebrow">Testbed & Data Collection</h3>
            <ul className="checklist mt-3">
              <li><strong>Hardware:</strong> DJI Tello EDU drone, ground controller PC, and an adversary PC running ParrotOS with an ALFA antenna.</li>
              <li><strong>Attack Vectors:</strong> De-authentication DoS, Replay, Evil Twin, and False Data Injection (FDI).</li>
              <li><strong>Cyber Features:</strong> 37 features captured via Wireshark (e.g., MAC addresses, frame lengths, protocols).</li>
              <li><strong>Physical Features:</strong> 16 features from flight telemetry (e.g., roll, pitch, yaw, speed, temperature, battery).</li>
            </ul>
          </div>
          
          <div className="content-card">
            <h3 className="content-card__eyebrow">Feature Engineering & Modeling</h3>
            <p className="content-card__copy mb-3">
              Data streams were synchronized by timestamp. SHAP (Shapley Additive Explanations) analysis was employed to identify the most salient cross-domain features.
            </p>
            <ul className="checklist">
              <li><strong>Algorithms Evaluated:</strong> SVM, FNN, LSTM-RNN, and 1D-CNN.</li>
              <li><strong>Performance:</strong> The 1D-CNN model achieved the highest performance (96.13% F1-score) against complex attacks by exploiting temporal correlations.</li>
            </ul>
          </div>
        </div>

        <aside className="sidebar-panel">
          <h3 className="sidebar-panel__title">Architecture Flow</h3>
          <div className="quiz-card__visual mt-4">
            <div className="flex flex-col gap-2 relative z-10">
              <div className="border border-ink bg-paper p-2 text-center font-label text-xs uppercase">Data Acquisition (Wireshark + Telemetry)</div>
              <div className="text-center">↓</div>
              <div className="border border-ink bg-paper p-2 text-center font-label text-xs uppercase">Timestamp Synchronization</div>
              <div className="text-center">↓</div>
              <div className="border border-ink bg-paper p-2 text-center font-label text-xs uppercase">SHAP Feature Selection</div>
              <div className="text-center">↓</div>
              <div className="border border-ink bg-paper p-2 text-center font-label text-xs uppercase">1D-CNN Classification</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
