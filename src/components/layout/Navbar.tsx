"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

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
