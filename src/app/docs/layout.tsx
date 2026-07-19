import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen app-shell">
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-ink bg-panel p-6">
        <h2 className="font-heading text-2xl font-bold mb-6">UAV Cyber Research</h2>
        <nav className="flex flex-col gap-6">
          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-2 tracking-widest">Paper 1: Data Fusion</h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li><Link href="/docs/paper-1/feature-selection" className="text-sm font-bold hover:text-accent border-b border-transparent hover:border-accent transition-colors">Feature Selection (SHAP)</Link></li>
              <li><Link href="/docs/paper-1/algorithms" className="text-sm font-bold hover:text-accent border-b border-transparent hover:border-accent transition-colors">Algorithms & Models</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-2 tracking-widest">Paper 2: Hybrid ML</h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li><Link href="/docs/paper-2/pipelines" className="text-sm font-bold hover:text-accent border-b border-transparent hover:border-accent transition-colors">Dual-Path Pipelines</Link></li>
              <li><Link href="/docs/paper-2/metrics" className="text-sm font-bold hover:text-accent border-b border-transparent hover:border-accent transition-colors">Accuracy Metrics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-2 tracking-widest">Synthesis</h3>
            <ul className="flex flex-col gap-3 ml-2">
              <li><Link href="/docs/comparison/architecture" className="text-sm font-bold hover:text-accent border-b border-transparent hover:border-accent transition-colors">Comparative Architecture</Link></li>
            </ul>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 md:p-12 max-w-4xl bg-paper prose prose-stone prose-headings:font-heading prose-a:text-accent">
        {children}
      </main>
    </div>
  )
}
