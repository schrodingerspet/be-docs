import { Grid, GridCard } from '@/components/mdx/Grid';
import { Callout } from '@/components/mdx/Callout';

export default function Page() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Datasets Overview</h1>
      <p>
        The development of robust machine learning-based Intrusion Detection Systems (IDS) relies heavily on high-quality datasets. Below are details of the datasets used in the two research studies.
      </p>

      <h2>System 1 Dataset: Simulated & Real-World Telemetry</h2>
      <p>
        The first study utilizes a dataset collected from a mix of simulated UAV operations and real-world telemetry logs.
      </p>
      <Grid columns={2}>
        <GridCard title="Parameters Captured">
          <ul>
            <li><strong>Control Inputs:</strong> Roll, pitch, and yaw rates.</li>
            <li><strong>Telemetry Data:</strong> Altitude, velocity, and orientation.</li>
            <li><strong>Communication:</strong> Transmissions and receptions.</li>
            <li><strong>System Metrics:</strong> Battery consumption and motor temperature.</li>
          </ul>
        </GridCard>
        <GridCard title="Dataset Details">
          <ul>
            <li><strong>Attacks Included:</strong> GPS spoofing, Data injection, and Network intrusion.</li>
            <li><strong>Training Split:</strong> 70% Training, 15% Validation, 15% Testing.</li>
            <li>Each instance is labeled for supervised learning or marked as normal for unsupervised anomaly detection.</li>
          </ul>
        </GridCard>
      </Grid>

      <h2>System 2 Dataset: Real Cyber-Physical Drone Flights</h2>
      <p>
        The second study developed an entirely new, publicly available cyber-physical dataset using an operational testbed consisting of a DJI Tello EDU drone, a ground control station, and an attacker terminal with an ALFA AWUS036ACH antenna.
      </p>
      
      <Grid columns={2}>
        <GridCard title="Flight Overview">
          <p>
            A total of 75 flights were performed along predefined paths. 
          </p>
          <ul>
            <li><strong>35 Normal Flights:</strong> Baseline behavior without attacks.</li>
            <li><strong>40 Malicious Flights:</strong> 10 de-authentication, 10 replay, 10 evil twin, and 10 False Data Injection (FDI) attacks.</li>
          </ul>
        </GridCard>
        <GridCard title="Data Split & Samples">
          <ul>
            <li><strong>Total Samples:</strong> 12,741 benign and 16,843 malicious samples.</li>
            <li><strong>Training Split:</strong> 3:1 ratio (75% Train, 25% Test) with 5-fold cross-validation.</li>
          </ul>
        </GridCard>
      </Grid>

      <h3>Extracted Features</h3>
      <p>
        The dataset combines asynchronous cyber and physical readings, synchronized by repeating the most recent features from either dataset matching unique timestamps.
      </p>

      <Grid columns={2}>
        <GridCard title="Cyber Features (37 Total)">
          <p>Captured using Aircrack-ng, Tcpdump, and Wireshark as PCAP files.</p>
          <p><strong>Most Effective (via SHAP):</strong> <code>wlan.fc.type</code>, <code>wlan.duration</code>, <code>ip.hdr_len</code>, <code>ip.dst</code>, <code>frame.len</code>, <code>ip.proto</code>.</p>
        </GridCard>
        <GridCard title="Physical Features (16 Total)">
          <p>Captured via ground station over UDP and saved as numpy arrays.</p>
          <p><strong>Most Effective (via SHAP):</strong> <code>flight_time</code>, <code>temperature</code>, <code>battery</code>, <code>mp_distance_z</code>, and <code>mp_distance_x</code>.</p>
        </GridCard>
      </Grid>
      
      <Callout type="insight">
        According to the SHAP analysis in the second study, cyber features play a larger role in detecting network anomalies, but explicitly fusing them with physical features (like flight duration or drift in coordinate position due to a replay attack) yields the most robust intrusion detection overall.
      </Callout>
    </div>
  )
}
