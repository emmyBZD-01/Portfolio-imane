import { useEffect, useRef, useState } from "react";
import translations from "../lang/translations";

/* 🔹 IMPORT DES ICÔNES */
import estLogo from "../assets/projects/estlogo.png";
import ensamLogo from "../assets/projects/ensamlogo.png";
import frameworkLogo from "../assets/projects/frameworklogo.jpg";
import developerLogo from "../assets/projects/developerlogo.jpg";

export default function About({ lang = "fr" }) {
  const t = translations[lang].about;
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* 🔥 ANIMATION AU SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animation une seule fois
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`container py-5 about-section ${
        visible ? "about-visible" : ""
      }`}
    >
      <div className="row align-items-center">
        
        {/* 🔹 TEXTE À PROPOS */}
        <div className="col-md-7 mb-4 about-text">
          <h2 className="fw-bold mb-3">{t.title}</h2>
          <p className="text-muted fs-5">{t.text}</p>
        </div>

        {/* 🔹 CARD PROFIL */}
        <div className="col-md-5">
          <div className="card about-card shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Mon profil</h5>

              <div className="about-item">
                <img src={estLogo} alt="EST" className="about-icon" />
                <span>Licence Développement Web & Mobile</span>
              </div>

              <div className="about-item">
                <img src={ensamLogo} alt="ENSAM" className="about-icon" />
                <span>Master 1 Systèmes d’Information & Big Data</span>
              </div>

              <div className="about-item">
                <img src={frameworkLogo} alt="Frameworks" className="about-icon" />
                <span>React · Laravel · Django</span>
              </div>

              <div className="about-item">
                <img src={developerLogo} alt="Developer" className="about-icon" />
                <span>Junior Full Stack Developer</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
