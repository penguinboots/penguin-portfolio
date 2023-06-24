import githubIcon from "../../public/github-mark.svg";
import linkedinIcon from "../../public/linkedin.svg";


export default function About() {
  return (
    <section className="about-wrapper">
      <div className="section-container about">
        <h2>About Me</h2>
        <div className="about-body">
          <div className="about-text">
            <p>
              Welcome to my website! I am a recent graduate from UBC and
              Lighthouse Labs with a passion for design, UX/UI, and accessible,
              user-centered design.
            </p>
            <p>
              I am a forever-keen learner with a sharp eye for detail, and
              always looking for new challenges.
            </p>
            <p>
              Explore my projects and let's collaborate on something
              extraordinary!
            </p>
          </div>
          <div className="about-img">placeholder img</div>
        </div>
        <ul className="contact">
          <li className="contact-icon">
            <img src={githubIcon} />
          </li>
          <li className="contact-icon">
            <img src={linkedinIcon} />
          </li>
          <li className="contact-icon">EMAIL</li>
        </ul>
      </div>
    </section>
  );
}
