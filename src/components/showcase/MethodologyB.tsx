export function MethodologyB() {
  return (
    <section className="mb-16">
      <div className="section-header mb-6">
        <h2 className="section-title">Methodology B: Hybrid ML Architecture</h2>
        <span className="section-count">Paper 2</span>
      </div>
      
      <div className="dashboard-layout">
        <div className="panel-stack">
          <div className="content-card">
            <h3 className="content-card__eyebrow">Approach Overview</h3>
            <p className="content-card__copy">
              Sophia S et al. propose a real-time detection framework prioritizing high accuracy and low latency. The methodology uniquely combines supervised learning for known threats and unsupervised learning for identifying zero-day anomalous behaviors.
            </p>
          </div>

          <div className="content-card">
            <h3 className="content-card__eyebrow">Preprocessing & Feature Extraction</h3>
            <ul className="checklist mt-3">
              <li><strong>Data Inputs:</strong> UAV telemetry, navigation inputs, and communication signals.</li>
              <li><strong>Cleansing:</strong> Missing value imputation, noise reduction, and feature scaling.</li>
              <li><strong>Dimensionality Reduction:</strong> Recursive Feature Elimination (RFE) and Principal Component Analysis (PCA) to retain only high-impact attributes for fast computation.</li>
            </ul>
          </div>
          
          <div className="content-card">
            <h3 className="content-card__eyebrow">Hybrid Detection Module</h3>
            <p className="content-card__copy mb-3">
              The detection pipeline splits into two distinct processing paths:
            </p>
            <ul className="checklist">
              <li><strong>Supervised Path:</strong> Random Forest, SVM, and Adaptive Neural Networks classify known attacks (GPS spoofing, data injection, network intrusion).</li>
              <li><strong>Unsupervised Path:</strong> Autoencoders and Isolation Forests identify zero-day attacks by calculating reconstruction errors against a baseline of normal UAV behavior.</li>
            </ul>
          </div>
        </div>

        <aside className="sidebar-panel">
          <h3 className="sidebar-panel__title">Performance Metrics</h3>
          <dl className="kpi-strip mt-4" style={{ display: "flex", flexDirection: "column" }}>
            <div className="kpi-item">
              <dt>Overall Accuracy</dt>
              <dd>97.8%</dd>
            </div>
            <div className="kpi-item">
              <dt>Zero-Day Detection</dt>
              <dd>92.5%</dd>
            </div>
            <div className="kpi-item">
              <dt>System Latency</dt>
              <dd>&lt;200 ms</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
