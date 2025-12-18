import { useEffect, useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import signatureBeige from "../assets/projects/signature.jpeg";
import signatureBlack from "../assets/projects/signature-dark.jpeg";

const images = [signatureBeige, signatureBlack];

export default function Home({ lang }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero-signature">
        <div className="hero-inner">

          <div className="signature-slider">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Signature"
                className={`signature-slide ${
                  i === index ? "active" : "inactive"
                }`}
              />
            ))}
          </div>

          <div className="cv-wrapper">
            <a
              href="/cv-imane-bouzid.pdf"
              className="cv-btn"
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
