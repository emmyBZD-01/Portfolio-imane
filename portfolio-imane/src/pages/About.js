import translations from "../lang/translations";

export default function About({ lang = "fr" }) {
  const t = translations[lang].about;

  return (
    <div className="container py-5 about-section">
      <div className="row align-items-center">
        <div className="col-md-7 mb-4 about-text">
          <h2 className="fw-bold mb-3">{t.title}</h2>
          <p className="text-muted fs-5">{t.text}</p>
        </div>

        <div className="col-md-5">
          <div className="card about-card shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Mon profil</h5>
              <div className="about-item">🎓 Licence Développement Web & Mobile</div>
              <div className="about-item">📘 Master 1 Systèmes d’Information & Big Data</div>
              <div className="about-item">💻 React · Laravel · Django</div>
              <div className="about-item">🚀 Junior Full Stack Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
