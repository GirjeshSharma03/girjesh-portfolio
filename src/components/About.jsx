import portfolio from "../data/portfolioData";
import FadeSection from "./FadeSection";
import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <FadeSection>
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div>
            <h2 className="section-title">Passionate about building the web.</h2>
            <p className="about-text">{portfolio.about}</p>
            <p className="about-text" style={{ marginTop: "1.2rem" }}>
              I am confident in my ability to work independently as well as collaboratively in a team to deliver
              high-quality web solutions — always focused on clean architecture and user delight.
            </p>
          </div>

          <div className="about-stats">
            {[
              { num: "4+",  label: "Projects Completed"  },
              { num: "10+", label: "Technologies Known"  },
              { num: "1+",  label: "Year of Training"    },
              { num: "∞",   label: "Passion for Code"    },
            ].map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

export default About;
