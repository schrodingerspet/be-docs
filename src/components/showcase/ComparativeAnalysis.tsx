export function ComparativeAnalysis() {
  return (
    <section className="mb-16">
      <div className="section-header mb-6">
        <h2 className="section-title">Comparative Analysis</h2>
        <span className="section-count">Synthesis</span>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="record-table">
          <thead>
            <tr>
              <th>Evaluation Dimension</th>
              <th>Cyber-Physical Fusion (Paper 1)</th>
              <th>Hybrid ML Architecture (Paper 2)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-label text-xs uppercase font-bold">Core Innovation</td>
              <td>Input data completeness (Physical + Cyber features).</td>
              <td>Model pipeline structure (Supervised + Unsupervised).</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold">Zero-Day Strategy</td>
              <td>Tests generalization by withholding attack classes during training.</td>
              <td>Explicit anomaly detection using reconstruction errors.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold">Feature Optimization</td>
              <td>SHAP values to maintain interpretability and explainability.</td>
              <td>PCA and RFE for strict dimensionality reduction and speed.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold">Operational Focus</td>
              <td>High accuracy on complex, stealthy attacks (e.g., FDI).</td>
              <td>Real-time mitigation with strictly bounded latency (&lt;200ms).</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold">Data Transparency</td>
              <td>Published reproducible testbed dataset (IEEE Dataport).</td>
              <td>Undisclosed proprietary mixed simulation logs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
