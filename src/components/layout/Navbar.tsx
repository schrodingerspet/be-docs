"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => {
    setIsOpen(false);
    setIsDocsOpen(false);
  };
  
  const toggleDocs = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDocsOpen(!isDocsOpen);
  };

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Link href="/" className="brand-lockup" onClick={closeNav}>
          <div className="brand-mark">UAV</div>
          <div className="brand-copy">
            <strong>Cyber Security</strong>
            <span>Comparative Analysis</span>
          </div>
        </Link>

        <button 
          className={`hamburger ${isOpen ? 'hamburger--active' : ''}`}
          onClick={toggleNav}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>

        <nav className={`topbar__nav ${isOpen ? 'topbar__nav--open' : ''}`}>
          <div className="relative group">
            <button 
              className={`topbar__link w-full md:w-auto flex items-center justify-between gap-2 ${pathname.startsWith('/docs') ? 'topbar__link--active' : ''}`}
              onClick={toggleDocs}
            >
              Docs <span className="text-[10px]">▼</span>
            </button>
            <div className={`${isDocsOpen ? 'flex' : 'hidden'} md:group-hover:flex flex-col md:absolute md:top-full md:left-0 bg-paper border-ink border-2 md:border-t-0 md:min-w-[220px] z-50 shadow-[4px_4px_0px_0px_#111111]`}>
              <Link href="/docs/introduction" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Introduction</Link>
              <Link href="/docs/learning-path" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Learning Path</Link>
              <Link href="/docs/terms" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Glossary / Terms</Link>
              <Link href="/docs/attack-encyclopedia" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Attack Encyclopedia</Link>
              <Link href="/docs/algorithms-hub" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Algorithms Hub</Link>
              <Link href="/docs/visual-architecture" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Architecture</Link>
              <Link href="/docs/metrics" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Metrics & Formulas</Link>
              <Link href="/docs/datasets" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Datasets</Link>
              <Link href="/docs/experimental-results" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Experimental Results</Link>
              <Link href="/docs/paper-1/algorithms" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Paper 1 Deep Dive</Link>
              <Link href="/docs/paper-2/metrics" className="p-3 border-b border-ink hover:bg-panel-strong font-label text-xs uppercase" onClick={closeNav}>Paper 2 Deep Dive</Link>
            </div>
          </div>
          <Link 
            href="/paper-1" 
            className={`topbar__link ${pathname === '/paper-1' ? 'topbar__link--active' : ''}`}
            onClick={closeNav}
          >
            Paper 1
          </Link>
          <Link 
            href="/paper-2" 
            className={`topbar__link ${pathname === '/paper-2' ? 'topbar__link--active' : ''}`}
            onClick={closeNav}
          >
            Paper 2
          </Link>
          <Link 
            href="/comparison" 
            className={`topbar__link ${pathname === '/comparison' ? 'topbar__link--active' : ''}`}
            onClick={closeNav}
          >
            Comparison
          </Link>
          <Link 
            href="/summary" 
            className={`topbar__link ${pathname === '/summary' ? 'topbar__link--active' : ''}`}
            onClick={closeNav}
          >
            Summary
          </Link>
        </nav>
      </div>
      
      {isOpen && (
        <div className="nav-overlay" onClick={closeNav} aria-hidden="true"></div>
      )}
    </header>
  );
}
