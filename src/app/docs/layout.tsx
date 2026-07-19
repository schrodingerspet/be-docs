import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 w-full backdrop-blur-xl bg-background/80 border-b flex items-center justify-between p-4">
        <Link href="/" className="font-heading font-bold text-lg">UAV Cyber Docs</Link>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Search className="w-5 h-5" />
          <Menu className="w-6 h-6" />
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block w-72 border-r bg-surface sticky top-0 h-screen overflow-y-auto p-8 custom-scrollbar">
        <h2 className="font-heading text-xl font-bold mb-8 flex items-center gap-2">UAV Cyber Docs</h2>
        <nav className="flex flex-col gap-8 pb-10">
          
          <div>
            <h3 className="text-xs font-label uppercase text-muted-foreground mb-3 tracking-widest font-semibold">Getting Started</h3>
            <ul className="flex flex-col gap-3 border-l ml-1 pl-4">
              <li><Link href="/docs/introduction" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Introduction</Link></li>
              <li><Link href="/docs/learning-path" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Learning Path <span className="ml-2 text-[10px] bg-brand/10 text-brand px-1.5 py-0.5 rounded uppercase font-bold">New</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label uppercase text-muted-foreground mb-3 tracking-widest font-semibold">Core Concepts (Learn)</h3>
            <ul className="flex flex-col gap-3 border-l ml-1 pl-4">
              <li><Link href="/docs/attack-encyclopedia" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Attack Encyclopedia</Link></li>
              <li><Link href="/docs/algorithms-hub" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Algorithms Hub</Link></li>
              <li><Link href="/docs/visual-architecture" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Visual Architecture Explorer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label uppercase text-muted-foreground mb-3 tracking-widest font-semibold">Paper Analysis (Deep Dive)</h3>
            <ul className="flex flex-col gap-3 border-l ml-1 pl-4">
              <li><Link href="/docs/paper-1/feature-selection" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Paper 1: Feature Selection</Link></li>
              <li><Link href="/docs/paper-1/algorithms" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Paper 1: Algorithms</Link></li>
              <li><Link href="/docs/paper-2/pipelines" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Paper 2: Dual-Path Pipelines</Link></li>
              <li><Link href="/docs/comparison/architecture" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Synthesis: Comparative Arch</Link></li>
              <li><Link href="/docs/experimental-results" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Experimental Results</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label uppercase text-muted-foreground mb-3 tracking-widest font-semibold">Reference</h3>
            <ul className="flex flex-col gap-3 border-l ml-1 pl-4">
              <li><Link href="/docs/terms" className="text-sm font-medium text-brand border-l border-brand -ml-4 pl-4 block bg-brand/5 py-1 rounded-r-md">Glossary of Terms</Link></li>
              <li><Link href="/docs/metrics" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Metrics Explained</Link></li>
              <li><Link href="/docs/datasets" className="text-sm font-medium hover:text-brand transition-colors text-muted-foreground hover:border-l hover:border-brand -ml-4 pl-4 block">Datasets Overview</Link></li>
            </ul>
          </div>

        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 px-6 py-12 lg:px-16 xl:px-24 flex justify-center">
        <div className="w-full max-w-3xl prose prose-slate dark:prose-invert">
          {children}
        </div>
      </main>

      {/* TOC Placeholder */}
      <aside className="hidden xl:block w-64 sticky top-0 h-screen overflow-y-auto p-8">
        <h3 className="text-xs font-label uppercase text-muted-foreground mb-3 tracking-widest font-semibold">On this page</h3>
        <p className="text-sm text-muted-foreground">TOC will appear here...</p>
      </aside>
    </div>
  )
}
