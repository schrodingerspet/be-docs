import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-paper text-ink">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 w-full bg-paper border-b border-ink flex items-center justify-between p-4">
        <Link href="/" className="font-heading font-bold text-lg">UAV Cyber Docs</Link>
        <div className="flex items-center gap-4 text-ink">
          <Search className="w-5 h-5" />
          <Menu className="w-6 h-6" />
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block w-72 border-r border-ink bg-panel sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto p-8 custom-scrollbar">
        <h2 className="font-heading text-xl font-bold mb-8 flex items-center gap-2">Docs Index</h2>
        <nav className="flex flex-col gap-8 pb-10">
          
          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-3 tracking-widest font-semibold">Getting Started</h3>
            <ul className="flex flex-col gap-3 border-l border-ink ml-1 pl-4">
              <li><Link href="/docs/introduction" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Introduction</Link></li>
              <li><Link href="/docs/learning-path" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Learning Path</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-3 tracking-widest font-semibold">Core Concepts</h3>
            <ul className="flex flex-col gap-3 border-l border-ink ml-1 pl-4">
              <li><Link href="/docs/attack-encyclopedia" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Attack Encyclopedia</Link></li>
              <li><Link href="/docs/algorithms-hub" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Algorithms Hub</Link></li>
              <li><Link href="/docs/visual-architecture" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Architecture Explorer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-3 tracking-widest font-semibold">Paper Analysis</h3>
            <ul className="flex flex-col gap-3 border-l border-ink ml-1 pl-4">
              <li><Link href="/docs/paper-1/algorithms" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Paper 1: Algorithms</Link></li>
              <li><Link href="/docs/paper-2/metrics" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Paper 2: Metrics</Link></li>
              <li><Link href="/docs/experimental-results" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Experimental Results</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-label uppercase text-muted mb-3 tracking-widest font-semibold">Reference</h3>
            <ul className="flex flex-col gap-3 border-l border-ink ml-1 pl-4">
              <li><Link href="/docs/terms" className="text-sm font-medium text-accent border-l-2 border-accent -ml-[17px] pl-[15px] block bg-panel-strong py-1">Glossary of Terms</Link></li>
              <li><Link href="/docs/metrics" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Metrics Explained</Link></li>
              <li><Link href="/docs/datasets" className="text-sm font-medium hover:text-accent transition-colors text-muted hover:border-l-2 hover:border-accent -ml-[17px] pl-[15px] block">Datasets Overview</Link></li>
            </ul>
          </div>

        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 px-6 py-12 lg:px-16 xl:px-24 flex justify-center">
        <div className="w-full max-w-3xl prose">
          {children}
        </div>
      </main>
    </div>
  )
}
