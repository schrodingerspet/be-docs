export function Conclusion() {
  return (
    <section className="mb-16">
      <div className="section-header mb-6">
        <h2 className="section-title">Conclusion</h2>
      </div>

      <div className="content-card bg-panel-strong p-8">
        <div className="quiz-card__visual mb-6">
          <p className="quiz-card__visual-kicker text-accent">Strategic Blueprint</p>
          <blockquote className="quiz-card__visual-focus text-2xl">
            A resilient UAV defense requires the data depth of Paper 1 combined with the architectural agility of Paper 2.
          </blockquote>
        </div>

        <p className="content-card__copy text-lg leading-relaxed">
          The two methodologies present highly complementary approaches to UAV cybersecurity. Hassler et al. demonstrate that isolating cyber data from flight physics produces an incomplete threat picture; fusing these domains is imperative for detecting stealthy False Data Injection attacks. Conversely, Sophia S et al. prove that relying entirely on known attack signatures leaves systems vulnerable, establishing that a real-time, unsupervised anomaly detection branch is critical for halting zero-day intrusions. 
        </p>
        <p className="content-card__copy text-lg leading-relaxed mt-4">
          Future robust Intrusion Detection Systems must orchestrate this synthesis: ingesting synchronized cyber-physical telemetry streams while utilizing a dual-path (supervised/unsupervised) inference engine capable of sub-200ms execution.
        </p>
      </div>
    </section>
  );
}
