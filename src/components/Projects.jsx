import {
  portfolio,
  mimikyu,
  shortly,
  jungle,
  scheduler,
  bytes,
  tweeter,
} from "/data/projects";
import ProjectCard from "./ProjectCard";

const projects = [
  mimikyu,
  shortly,
  bytes,
  portfolio,
  jungle,
  scheduler,
];

export default function Projects() {
  const projectCards = projects.map((project) => {
    return <ProjectCard key={project.title} project={project} />;
  });
  return (
    <section className="projects-wrapper">
      <div className="section-container projects">
        <h2>Projects</h2>
        <div className="projects-list">{projectCards}</div>
      </div>
    </section>
  );
}
