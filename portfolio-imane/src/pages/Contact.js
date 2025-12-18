import translations from "../lang/translations";

export default function Contact({ lang = "fr" }) {
  const t = translations[lang].contact;

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-4">{t.title}</h2>
      <p className="text-muted mb-5">{t.subtitle}</p>

      <div className="d-flex flex-wrap justify-content-center gap-3">

        {/* EMAIL */}
        <a
          href="mailto:bouzid04imane@gmail.com"
          className="btn btn-outline-dark contact-btn"
        >
           Email
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary contact-btn"
        >
           LinkedIn
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-secondary contact-btn"
        >
           GitHub
        </a>

        {/* CV */}
        <a
          href="/cv-imane-bouzid.pdf"
          download
          className="btn btn-dark contact-btn"
        >
           Télécharger CV
        </a>

      </div>
    </div>
  );
}
