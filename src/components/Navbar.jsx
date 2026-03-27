import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">GS</div>

      {/* Hamburger OR Close */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"} {/* 🔥 toggle icon */}
      </div>

      {/* 🔥 Blur overlay (only when open) */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;