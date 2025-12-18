import translations from "../lang/translations";
import logo from "../assets/projects/logo.jpeg";

function Navbar({ lang, setLang }) {
  const t = translations[lang].nav;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand" href="#home">
          <img
            src={logo}
            alt="Bouzid Imane - Digital Developer"
            className="navbar-logo"
          />
        </a>

        {/* 🔥 HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">{t.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">{t.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">{t.skills}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">{t.projects}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">{t.contact}</a>
            </li>

            {/* LANG */}
            <li className="nav-item mt-2 mt-lg-0">
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
