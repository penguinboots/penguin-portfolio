/* eslint-disable react/prop-types */

export default function ProjectCard(props) {
  const { project } = props;

  let stack = project.stack.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div className="project-card">
      <div className="placeholder project-img">{`< 🚧 Under Construction 🚧 >`}</div>
      <div className="title-box">
        <h3>{project.title}</h3>
        <ul className="links">
          {project.live ? (
            <>
              <li>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE
                </a>
              </li>
              <li>|</li>
            </>
          ) : (
            ""
          )}
          <li>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              REPO
            </a>
          </li>
        </ul>
      </div>
      <p>{project.description}</p>
      <ul className="stack">{stack}</ul>
    </div>
  );
}
