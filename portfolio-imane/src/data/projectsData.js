import gedImg from "../assets/projects/ged-pharma5.jpeg";
import parcImg from "../assets/projects/parc-info.jpeg";
import etoileImg from "../assets/projects/etoile-bricolage.jpeg";

const projectsData = [
  {
    id: 0,
    title: "Étoile Bricolage",
    description:
      "Site web e-commerce de bricolage réalisé avec React.js, présentant les services et produits de l’entreprise.",
    technologies: ["React.js", "JavaScript", "Bootstrap"],
    github: "", // si le repo est privé, laisse vide
    demo: "https://www.etoilebricolage.com/",
    image:etoileImg , // optionnel si tu n’as pas encore de capture
  },

  {
    id: 1,
    title: "Plateforme GED – Pharma 5",
    description: "Plateforme web sécurisée de gestion documentaire qualité.",
    technologies: ["Django", "Python", "Bootstrap", "SQLite"],
    github: "https://github.com/imane/ged-pharma5",
    demo: "", // pas déployé
    image: gedImg,
  },
  {
    id: 2,
    title: "Gestion du parc informatique",
    description: "Application web pour la gestion du parc informatique.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/emmyBZD-01/Parc-Informatique-.git",
    demo: "", // pas déployé
    image: parcImg,
  },
];

export default projectsData;
