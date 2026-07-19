export function HeroSection() {
  return (
    <section className="page-intro mb-12">
      <div className="page-intro__top">
        <div className="page-intro__copy">
          <p className="eyebrow text-accent">Research Showcase</p>
          <h1 className="page-title leading-tight">
            UAV Cyber-Attack Detection
          </h1>
          <p className="page-lede mt-4">
            A synthesized abstract comparing two cutting-edge approaches to securing Unmanned Aerial Vehicles (UAVs) against cyber threats. We examine a cyber-physical data fusion architecture and a hybrid supervised-unsupervised machine learning framework, focusing exclusively on their methodologies for detecting attacks such as GPS spoofing, de-authentication, and false data injection.
          </p>
        </div>
      </div>

      <dl className="kpi-strip mt-6">
        <div className="kpi-item">
          <dt>Domain</dt>
          <dd>UAV Cybersecurity</dd>
        </div>
        <div className="kpi-item">
          <dt>Focus</dt>
          <dd>Intrusion Detection</dd>
        </div>
        <div className="kpi-item">
          <dt>Papers Analyzed</dt>
          <dd>2</dd>
        </div>
      </dl>
    </section>
  );
}
