import { Tabs } from '@/components/mdx/Tabs'
import { Grid } from '@/components/mdx/Grid'
import { MetricCard } from '@/components/mdx/MetricCard'

export default function Page() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Algorithms Hub</h1>
      <p>
        To defend against sophisticated UAV cyber threats, an array of machine learning models has been evaluated. Advanced systems leverage a hybrid approach or cyber-physical data fusion to enhance accuracy.
      </p>

      <h2>Hybrid Detection Framework</h2>
      <p>
        A proven architecture combines supervised and unsupervised learning, ensuring high detection rates for known attacks and zero-day anomalies. Feature selection techniques like Recursive Feature Elimination (RFE) and Principal Component Analysis (PCA) reduce dimensionality.
      </p>

      <Grid columns={3}>
        <MetricCard title="Overall Accuracy" value="97.8%" label="Proposed Hybrid System" />
        <MetricCard title="Zero-Day Detection" value="92.5%" label="Unsupervised Models" />
        <MetricCard title="False Positive Rate" value="2.3%" label="Precision at 96.7%" />
      </Grid>

      <h2 className="mt-8">Evaluated Machine Learning Models</h2>
      <Tabs items={[
        {
          label: 'Supervised Models',
          content: (
            <div>
              <h3>Support Vector Machine (SVM)</h3>
              <p>
                Acts as a robust shallow model capturing complex decision boundaries for binary classification (normal vs. malicious). Optimized via grid search across various kernels (linear, sigmoid, rbf, polynomial) and margins. SHAP analysis confirms strong performance when fusing cyber and physical features.
              </p>
              <h3>Random Forest</h3>
              <p>
                An ensemble learning method used heavily in supervised classification of known attacks, minimizing cross-entropy loss and ensuring precise convergence when dealing with high-dimensional data.
              </p>
            </div>
          )
        },
        {
          label: 'Deep Learning & Sequential Models',
          content: (
            <div>
              <h3>Feedforward Neural Network (FNN)</h3>
              <p>
                Represents a deep structure for static data classification. While powerful, it does not inherently exploit temporal correlations in the data.
              </p>
              <h3>LSTM-RNN</h3>
              <p>
                Recurrent Neural Networks with Long Short-Term Memory cells are designed to exploit temporal correlations in time-series data. This is critical for detecting sequential anomalies like replay and injection attacks over the drone's flight time.
              </p>
              <h3>1D Convolutional Neural Network (CNN)</h3>
              <p>
                Captures temporal correlations using convolutional filters traversing sequential data. Highly effective at discerning subtle patterns over time across both cyber network traffic and physical telemetry changes.
              </p>
            </div>
          )
        },
        {
          label: 'Unsupervised Models',
          content: (
            <div>
              <h3>Autoencoders</h3>
              <p>
                Deep learning architectures trained to reconstruct normal UAV behavior. Deviations resulting in high reconstruction errors trigger anomaly alerts, effectively identifying zero-day threats.
              </p>
              <h3>Isolation Forests</h3>
              <p>
                An unsupervised technique explicitly designed to isolate anomalies in multidimensional datasets, ensuring robust zero-day detection (achieving 92.5% accuracy in independent evaluations).
              </p>
            </div>
          )
        }
      ]} />
    </div>
  )
}
