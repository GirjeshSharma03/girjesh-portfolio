import "../styles/Navbar.css";

function Navbar({ scrolled }) {
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">GS</div>
      <ul className="nav-links">
        {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
