import portfolio from "../data/portfolioData";
import FadeSection from "./FadeSection";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience">
      <FadeSection>
        <div className="section-label">Experience</div>
        <h2 className="section-title">Where I've Worked</h2>

        {portfolio.achievements.map((ach, i) => (
          <div className="achievement-box" key={i}>
            <div className="achievement-label">🏆 Key Achievement</div>
            <div className="achievement-text">{ach}</div>
          </div>
        ))}

        <div className="exp-list">
          {portfolio.experience.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-meta">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-loc">{exp.location}</div>
              </div>
              <div className="exp-content">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-desc">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>
    </section>
  );
}

export default Experience;
