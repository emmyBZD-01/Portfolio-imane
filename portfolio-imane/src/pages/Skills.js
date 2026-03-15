import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    { title: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { title: "Backend", items: ["Laravel", "Django", "PHP", "Python"] },
    { title: "Base de données", items: ["MySQL", "SQLite"] },
    { title: "Outils", items: ["Git", "GitHub", "VS Code"] },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // une seule fois
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="container py-5">
      <h2 className="fw-bold mb-5 text-center">Compétences</h2>

      <div className={`row justify-content-center skills-row ${visible ? "skills-visible" : ""}`}>
        {skills.map((group, i) => (
          <div className="col-md-3 mb-4 skill-col" key={i}>
            <div className="card skill-card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="fw-bold mb-3">{group.title}</h5>
                {group.items.map((skill, j) => (
                  <span key={j} className="badge me-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
