import portfolio from "../data/portfolioData";
import FadeSection from "./FadeSection";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <FadeSection>
        <div className="section-label">Get in Touch</div>
        <div className="contact-inner">
          <div>
            <h2 className="contact-headline">
              Let's build something <span className="italic">great</span> together.
            </h2>
            <p style={{ color: "var(--muted)", marginTop: "1.5rem", fontSize: ".88rem", lineHeight: 1.75 }}>
              Open to internships, freelance projects, and full-time opportunities. Don't hesitate to reach out — I'd love to connect!
            </p>
          </div>

          <div>
            <div className="contact-links">
              <a href={`mailto:${portfolio.email}`} className="contact-link">
                <div>
                  <div className="contact-link-label">Email</div>
                  <div>{portfolio.email}</div>
                </div>
                <div className="contact-arrow">↗</div>
              </a>

              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div>Girjesh Sharma</div>
                </div>
                <div className="contact-arrow">↗</div>
              </a>

              <a href={portfolio.github} target="_blank" rel="noreferrer" className="contact-link">
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div>@girjeshsharma</div>
                </div>
                <div className="contact-arrow">↗</div>
              </a>

              <div className="contact-link" style={{ cursor: "default" }}>
                <div>
                  <div className="contact-link-label">Location</div>
                  <div>{portfolio.location}</div>
                </div>
                <div>📍</div>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

export default Contact;
