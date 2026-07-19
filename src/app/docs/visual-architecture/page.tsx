import { Tabs } from '@/components/mdx/Tabs';
import { Callout } from '@/components/mdx/Callout';
import { Accordion } from '@/components/mdx/Accordion';

export default function Page() {
  const tabs = [
    {
      label: 'System 1 (Hybrid ML)',
      content: (
        <div className="mt-6 flex flex-col gap-4">
          <h2>Hybrid Machine Learning Architecture</h2>
          <p>
            The system architecture presented in the first research study uses a mix of supervised and unsupervised machine learning algorithms to detect and respond to cyber attacks in real-time.
          </p>
          <Accordion title="1. Data Acquisition Module">
            <p>
              Collects telemetry data, navigation inputs, and communication signals from UAV systems in real-time. Critical monitored data includes GPS coordinates, altitude, battery levels, speed, and control signals to maintain a comprehensive view of UAV behavior.
            </p>
          </Accordion>
          <Accordion title="2. Preprocessing Module">
            <p>
              Implements techniques such as missing value imputation, noise reduction, and feature scaling. It ensures high-quality input data and integrates feature engineering methods such as <strong>Recursive Feature Elimination (RFE)</strong> and <strong>Principal Component Analysis (PCA)</strong> to focus on the most significant attributes.
            </p>
          </Accordion>
          <Accordion title="3. Detection & Response Module">
            <p>
              Combines supervised learning (Random Forest, SVM, Adaptive Neural Networks) for known attack patterns and unsupervised learning (Autoencoders, Isolation Forests) for identifying deviations from normal behavior (zero-day attacks).
            </p>
            <p>
              Once an anomaly is detected, mitigation strategies are activated. For example, if GPS spoofing is identified, the UAV switches to alternate navigation systems or autonomous recovery modes.
            </p>
          </Accordion>
        </div>
      )
    },
    {
      label: 'System 2 (Cyber-Physical Fusion)',
      content: (
        <div className="mt-6 flex flex-col gap-4">
          <h2>Cyber-Physical Fusion Architecture</h2>
          <p>
            The second study proposes an Intrusion Detection System (IDS) that explicitly fuses both cyber and physical features to improve detection capabilities, tested via an operational testbed.
          </p>
          <Accordion title="1. Physical Testbed">
            <p>
              The physical setup involves a <strong>DJI Tello EDU</strong> drone, a controller computer, and a data collection computer (running ParrotOS) using an ALFA AWUS036ACH antenna.
            </p>
          </Accordion>
          <Accordion title="2. Cyber-Physical Data Streams">
            <p>
              Data is collected continuously as the UAV follows predefined mission paths. Cyber data is captured using Aircrack-ng, Tcpdump, and Wireshark. Physical telemetry data is transmitted from the UAV to the ground controller via UDP. 
            </p>
          </Accordion>
          <Accordion title="3. Model Training & Execution">
            <p>
              The cyber and physical time-series data are synchronized, normalized using Min-Max scaling, and fed into various neural network structures including Support Vector Machines (SVM), Feedforward Neural Networks (FNN), LSTM-RNNs, and 1D Convolutional Neural Networks (1D-CNN).
            </p>
            <Callout type="insight">
              Using Shapley additive explanations (SHAP) analysis, the architecture prunes the most irrelevant variables, discovering that combining both cyber and physical features allows the models to perform much better than when using just cyber or physical features in isolation.
            </Callout>
          </Accordion>
        </div>
      )
    }
  ];

  return (
    <div className="prose prose-slate max-w-none">
      <h1>Visual Architecture Explorer</h1>
      <p>
        Unmanned Aerial Vehicles (UAVs) require robust, low-latency intrusion detection systems to securely carry out their missions. Explore the two proposed architectural models below.
      </p>
      
      <Tabs items={tabs} />
    </div>
  )
}
