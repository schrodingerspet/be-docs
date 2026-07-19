import Link from "next/link";

export function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Link href="/" className="brand-lockup">
          <div className="brand-mark">UAV</div>
          <div className="brand-copy">
            <strong>Cyber Security</strong>
            <span>Comparative Analysis</span>
          </div>
        </Link>
        <nav className="topbar__nav">
          <Link href="/paper-1" className="topbar__link">
            Paper 1
          </Link>
          <Link href="/paper-2" className="topbar__link">
            Paper 2
          </Link>
          <Link href="/comparison" className="topbar__link">
            Comparison
          </Link>
          <Link href="/summary" className="topbar__link">
            Summary
          </Link>
        </nav>
      </div>
    </header>
  );
}
