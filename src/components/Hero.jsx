import portfolio from "../data/portfolioData";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-number">GS</div>

      <div style={{ position: "relative" }}>
        <div className="hero-tag">{portfolio.title}</div>
        <h1 className="hero-title">
          Girjesh<br />
          <span className="italic">Sharma</span>
        </h1>
        <p className="hero-subtitle">{portfolio.tagline}</p>
        <p className="hero-location">📍 <span>{portfolio.location}</span></p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </div>
  );
}

export default Hero;
