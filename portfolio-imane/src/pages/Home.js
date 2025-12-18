import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import signatureImg from "../assets/projects/signature.jpeg";

export default function Home({ lang }) {
  return (
    <>
      {/* HERO SIGNATURE FULL SCREEN */}
      <section id="home" className="hero-signature">
        {/* 🔥 CETTE DIV MANQUAIT */}
        <div className="hero-inner">
          <img
            src={signatureImg}
            alt="Signature Imane Bouzid"
            className="signature-img"
          />
          <div className="cv-wrapper">
            <a
              href="/cv-imane-bouzid.pdf"
              className="btn btn-dark cv-btn"
              download
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <About lang={lang} />
      </section>

      <section id="skills" className="bg-light">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact" className="bg-light">
        <Contact />
      </section>
    </>
  );
}
