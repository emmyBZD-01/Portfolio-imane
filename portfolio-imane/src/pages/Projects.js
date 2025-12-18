import projectsData from "../data/projectsData";

export default function Projects() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Mes Projets</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card h-100 shadow-sm">
              {project.image && (
                <img
                  src={project.image}
                  className="card-img-top project-img"
                  alt={project.title}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5>{project.title}</h5>
                <p>{project.description}</p>

                <div className="mb-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge bg-dark me-1">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-outline-dark btn-sm me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="btn btn-dark btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
