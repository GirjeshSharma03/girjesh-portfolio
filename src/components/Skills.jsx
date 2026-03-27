import portfolio from "../data/portfolioData";
import FadeSection from "./FadeSection";
import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <FadeSection>
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {portfolio.skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="skill-cat">{group.category}</div>
              <div className="skill-list">
                {group.items.map((item) => (
                  <div className="skill-item" key={item}>→ {item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeSection>
    </section>
  );
}

export default Skills;
