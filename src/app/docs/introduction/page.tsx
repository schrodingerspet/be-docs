import { Callout } from '@/components/mdx/Callout'
import { MetricCard } from '@/components/mdx/MetricCard'
import { Grid } from '@/components/mdx/Grid'

export default function Page() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Introduction to UAV Cybersecurity</h1>
      
      <p>
        Unmanned Aerial Vehicles (UAVs), commonly known as drones, have rapidly transitioned from niche technology to critical tools across major industries. From defense and surveillance to smart agriculture and logistics, UAVs provide autonomous operation, real-time data collection, and remote control capabilities that drastically increase operational efficiency.
      </p>

      <Callout type="warning">
        As the adoption of UAVs accelerates, they face substantial cybersecurity vulnerabilities. UAVs operate as cyber-physical systems relying on interconnected communication networks, making them prime targets for malicious users aiming to compromise mission objectives, steal data, or cause infrastructure failures.
      </Callout>

      <h2>The Growing Threat Landscape</h2>
      <p>
        UAVs are vulnerable to a variety of cyber threats that span both cyber and physical domains. Traditional rule-based intrusion detection systems (IDS) are inadequate for mitigating dynamic, sophisticated UAV attacks. 
      </p>

      <h2>Why Machine Learning?</h2>
      <p>
        Machine Learning (ML) presents a robust alternative to static cybersecurity mechanisms due to its ability to:
      </p>
      <ul>
        <li>Identify complex anomalies and patterns in large, multidimensional datasets.</li>
        <li>Detect both known and zero-day (previously unseen) attacks in real-time.</li>
        <li>Adapt dynamically to evolving cyber attack strategies.</li>
      </ul>

      <Grid columns={2}>
        <MetricCard title="Detection Accuracy" value="97.8%" label="Proposed Hybrid ML System" />
        <MetricCard title="Latency" value="< 200 ms" label="Real-time Threat Mitigation" />
      </Grid>

      <h2>The Need for Cyber-Physical Fusion</h2>
      <p>
        Current IDSs typically rely solely on either physical features (e.g., roll, pitch, yaw, speed) or cyber features (e.g., IP addresses, MAC addresses, port numbers). However, a UAV integrates both computational components and physical sensors/actuators. Fusing cyber and physical data significantly improves detection capabilities by offering a complete representation of the system's state during an attack.
      </p>
    </div>
  )
}
