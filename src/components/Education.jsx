import portfolio from "../data/portfolioData";
import FadeSection from "./FadeSection";
import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="edu-section">
      <FadeSection>
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-list">
          {portfolio.education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-board">{edu.board}</div>
              </div>
              <div className="edu-period">{edu.period}</div>
            </div>
          ))}
        </div>
      </FadeSection>
    </section>
  );
}

export default Education;
