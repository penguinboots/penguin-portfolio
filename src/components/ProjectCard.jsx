/* eslint-disable react/prop-types */


export default function ProjectCard(props) {
  const { project } = props;
  return (
    <div className="project-card">
      <div className="project-img">placeholder img</div>
      <div className="title-box">
        <h3>{project.title}</h3>
        <div className="links">
          <a href={project.repo}>REPO</a>
          {project.live ? (
            <>
              <span>|</span><a href={project.live}>LIVE</a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <p>{project.description}</p>
      <div className="stack-icons"></div>
    </div>
  );
}
