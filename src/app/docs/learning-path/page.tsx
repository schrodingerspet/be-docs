import Link from 'next/link';

export default function LearningPath() {
  return (
    <>
      <h1>Learning Path</h1>
      <p className="lead text-xl text-muted font-body">
        A structured progression for understanding the intersection of UAV systems, cybersecurity, and applied machine learning.
      </p>

      <div className="space-y-8 mt-12">
        {/* Phase 1 */}
        <section className="border-l-4 border-ink pl-6 relative">
          <div className="absolute w-3 h-3 bg-paper border-2 border-ink -left-[8px] top-2"></div>
          <h3 className="text-xl font-bold font-heading m-0">Phase 1: The Threat Landscape</h3>
          <p className="text-muted mt-2">Understand the physical and cyber vulnerabilities of drone networks.</p>
          <ul className="mt-4 space-y-2 font-body list-none pl-0">
            <li>
              <span className="font-bold mr-2">1.</span>
              <Link href="/docs/introduction">Introduction to UAV Security</Link>
            </li>
            <li>
              <span className="font-bold mr-2">2.</span>
              <Link href="/docs/attack-encyclopedia">Attack Encyclopedia (GPS Spoofing, FDI, DoS)</Link>
            </li>
          </ul>
        </section>

        {/* Phase 2 */}
        <section className="border-l-4 border-ink pl-6 relative">
          <div className="absolute w-3 h-3 bg-paper border-2 border-ink -left-[8px] top-2"></div>
          <h3 className="text-xl font-bold font-heading m-0">Phase 2: The Data</h3>
          <p className="text-muted mt-2">How we collect, represent, and fuse data to expose anomalies.</p>
          <ul className="mt-4 space-y-2 font-body list-none pl-0">
            <li>
              <span className="font-bold mr-2">3.</span>
              <Link href="/docs/datasets">Understanding the Datasets</Link>
            </li>
            <li>
              <span className="font-bold mr-2">4.</span>
              <Link href="/docs/paper-1/feature-selection">Cyber-Physical Data Fusion (Paper 1)</Link>
            </li>
          </ul>
        </section>

        {/* Phase 3 */}
        <section className="border-l-4 border-ink pl-6 relative">
          <div className="absolute w-3 h-3 bg-paper border-2 border-ink -left-[8px] top-2"></div>
          <h3 className="text-xl font-bold font-heading m-0">Phase 3: Machine Learning Detection</h3>
          <p className="text-muted mt-2">The algorithms used to detect known and zero-day attacks.</p>
          <ul className="mt-4 space-y-2 font-body list-none pl-0">
            <li>
              <span className="font-bold mr-2">5.</span>
              <Link href="/docs/algorithms-hub">Algorithms Hub Overview</Link>
            </li>
            <li>
              <span className="font-bold mr-2">6.</span>
              <Link href="/docs/paper-2/pipelines">Hybrid Deep Learning Architectures (Paper 2)</Link>
            </li>
            <li>
              <span className="font-bold mr-2">7.</span>
              <Link href="/docs/visual-architecture">Visual Architecture Explorer</Link>
            </li>
          </ul>
        </section>

        {/* Phase 4 */}
        <section className="border-l-4 border-ink pl-6 relative">
          <div className="absolute w-3 h-3 bg-paper border-2 border-ink -left-[8px] top-2"></div>
          <h3 className="text-xl font-bold font-heading m-0">Phase 4: Synthesis & Results</h3>
          <p className="text-muted mt-2">Evaluating performance and designing the ultimate UAV IDS.</p>
          <ul className="mt-4 space-y-2 font-body list-none pl-0">
            <li>
              <span className="font-bold mr-2">8.</span>
              <Link href="/docs/metrics">Metrics & Evaluation</Link>
            </li>
            <li>
              <span className="font-bold mr-2">9.</span>
              <Link href="/docs/experimental-results">Experimental Results & Comparisons</Link>
            </li>
            <li>
              <span className="font-bold mr-2">10.</span>
              <Link href="/docs/comparison/architecture">The Ultimate Blueprint</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
