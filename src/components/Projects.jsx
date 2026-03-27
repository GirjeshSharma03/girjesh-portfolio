import portfolio from "../data/portfolioData";
import { CiLink } from "react-icons/ci";
import FadeSection from "./FadeSection";
import "../styles/Projects.css";
import { useEffect } from "react";

function Projects() {
  

useEffect(() => {
  const cards = document.querySelectorAll(".stat");
  

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    });
  });
}, []);
  return (
    <section id="projects">
  <FadeSection>
  <div className="section-label">Projects</div>
  <h2 className="section-title">Selected Work</h2>

  <div className="projects-grid">
    {portfolio.projects.map((p, i) => (
      <div className="project-card" key={i}>
        <div className="project-accent-line" style={{ background: p.color }} />
        <div className="project-num">0{i + 1}</div>
        <div className="project-name">{p.name}</div>
        <div className="project-desc">{p.description}</div>

        <div className="project-tags">
          {p.tech.map((t) => (
            <span className="project-tag" key={t}>{t}</span>
          ))}

         <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
  <CiLink />
</a>
        </div>

      </div>
    ))}
  </div>
</FadeSection>
    </section>
  );
}

export default Projects;
