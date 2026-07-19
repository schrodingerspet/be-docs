import { PageHeader } from "@/components/layout/PageHeader";

export default function Comparison() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Analysis"
        title="Side-by-Side Comparison"
        description="A direct evaluation of methodologies, data handling, and architectures between the two approaches."
      />

      <div className="mt-8 overflow-x-auto">
        <table className="record-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Paper 1 (Hassler et al.)</th>
              <th>Paper 2 (Sophia S et al.)</th>
              <th>Observation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-label text-xs uppercase font-bold tracking-wider">Methodology</td>
              <td>Cyber-physical data fusion</td>
              <td>Hybrid supervised + unsupervised</td>
              <td className="text-muted">Paper 1 innovates on input data, Paper 2 on model architecture.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold tracking-wider">Zero-day handling</td>
              <td>Withheld-attack-class evaluation</td>
              <td>Dedicated autoencoder + isolation-forest module</td>
              <td className="text-muted">Paper 2's approach is more architecturally explicit.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold tracking-wider">Dataset</td>
              <td>Public IEEE Dataport release</td>
              <td>Undisclosed mixed data</td>
              <td className="text-muted">Paper 1 is far more reproducible.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold tracking-wider">Peak F1</td>
              <td>96.13% (1D-CNN)</td>
              <td>96.1% (Hybrid)</td>
              <td className="text-muted">Near-identical peak performance.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold tracking-wider">Feature engineering</td>
              <td>SHAP (explainability)</td>
              <td>PCA + RFE (dimensionality reduction)</td>
              <td className="text-muted">Interpretability vs. compute-efficiency focus.</td>
            </tr>
            <tr>
              <td className="font-label text-xs uppercase font-bold tracking-wider">Real-time focus</td>
              <td>Offline evaluation</td>
              <td>Explicit &lt;200ms latency claim</td>
              <td className="text-muted">Paper 2 better positioned for real-time deployment claims.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="content-card">
          <h2 className="font-heading text-3xl m-0 leading-none">Common Points</h2>
          <ul className="checklist mt-4">
            <li>Both target rule-based-IDS inadequacy against modern UAV attacks (DoS/jamming, injection).</li>
            <li>Both utilize Support Vector Machines (SVM) and neural networks.</li>
            <li>Both evaluate using standard metrics: Accuracy, Precision, Recall, and F1.</li>
            <li>Both conclude ML is strictly necessary over static rule-based defense.</li>
          </ul>
        </div>
        
        <div className="content-card bg-panel-strong">
          <h2 className="font-heading text-3xl m-0 leading-none">Key Differences</h2>
          <ul className="checklist mt-4">
            <li><strong>Philosophy:</strong> Data-centric (Paper 1) vs model-centric (Paper 2) solution.</li>
            <li><strong>Transparency:</strong> Paper 1 provides reproducible/published data vs Paper 2's opaque data.</li>
            <li><strong>Evaluation Focus:</strong> Paper 1 deep dives on training-data-complexity vs generalization; Paper 2 focuses on latency/FPR as operational-viability proof.</li>
            <li><strong>Feature Handling:</strong> Paper 1 is explainable (SHAP) vs Paper 2 is black-box (PCA).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
