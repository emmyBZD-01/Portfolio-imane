export default function Skills() {
  const skills = [
    { title: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { title: "Backend", items: ["Laravel", "Django", "PHP", "Python"] },
    { title: "Base de données", items: ["MySQL", "SQLite"] },
    { title: "Outils", items: ["Git", "GitHub", "VS Code"] },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 text-center">Compétences</h2>
      <div className="row">
        {skills.map((group, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card skill-card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold mb-3">{group.title}</h5>
                {group.items.map((skill, j) => (
                  <span key={j} className="badge bg-dark me-2 mb-2">
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
