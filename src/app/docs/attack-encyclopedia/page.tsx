import { Accordion } from '@/components/mdx/Accordion'
import { Callout } from '@/components/mdx/Callout'

export default function Page() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Attack Encyclopedia</h1>
      <p>
        UAVs are susceptible to a wide variety of cyber-physical attacks. The following represent critical threats that can compromise vehicle safety, data integrity, and mission success.
      </p>

      <Accordion title="De-Authentication / Denial-of-Service (DoS) Attack">
        <p>
          <strong>Overview:</strong> Exploits vulnerabilities in protocols like IEEE 802.11 to sever the connection between the UAV and its ground control station.
        </p>
        <p>
          <strong>Execution:</strong> The attacker spoofs the MAC address and floods the communication channel with de-authentication frames. This forces the UAV to drop the connection temporarily. Many UAVs, such as the DJI Tello EDU, are programmed to force-land if the signal is lost for a specified duration (e.g., 15 seconds).
        </p>
      </Accordion>

      <Accordion title="Replay Attack">
        <p>
          <strong>Overview:</strong> Involves intercepting legitimate communications and replaying them later to trick the UAV into executing unauthorized commands.
        </p>
        <p>
          <strong>Execution:</strong> Attackers use tools (e.g., the Aircrack-ng suite) to capture command packets in monitor mode. By replaying these intercepted packets, the attacker overwrites valid commands being sent from the ground station, taking effective control and causing the UAV to deviate from its mission plan.
        </p>
      </Accordion>

      <Accordion title="Evil Twin Attack">
        <p>
          <strong>Overview:</strong> A man-in-the-middle attack where the adversary creates a rogue wireless access point mimicking the legitimate network.
        </p>
        <p>
          <strong>Execution:</strong> By cloning the target Service Set Identifier (SSID) and boosting the rogue adapter's transmission power (e.g., to 30 dBm), the attacker tricks the UAV into connecting to the malicious access point. A brief de-authentication attack is often used to force the initial disconnect. Once connected, the attacker can intercept, steal, or manipulate telemetry and video data.
        </p>
      </Accordion>

      <Accordion title="False Data Injection (FDI) Attack">
        <p>
          <strong>Overview:</strong> Stealthy modifications of sensor readings (like GPS, pitch, roll, or yaw) and control signals to destabilize the UAV without triggering basic alarms.
        </p>
        <p>
          <strong>Execution:</strong> Attackers calculate state-space matrices using dynamic mode decomposition and system identification. They then craft precise mathematical vectors (e.g., modifying control signal `u = u + η`) to minimize residual errors. This causes incorrect state estimation and irregular physical behavior.
        </p>
      </Accordion>

      <Accordion title="GPS Spoofing">
        <p>
          <strong>Overview:</strong> Feeding fake GPS signals to override the drone's legitimate navigation systems.
        </p>
        <p>
          <strong>Execution:</strong> Causes the drone to deviate entirely from its planned flight path, allowing adversaries to hijack the drone, force a landing in hostile territory, or cause a crash. Research shows detection rates of 98.2% for GPS spoofing using hybrid machine learning frameworks.
        </p>
      </Accordion>

    </div>
  )
}
