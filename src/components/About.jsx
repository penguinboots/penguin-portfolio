import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
            <ul className="contact">
              <li className="contact-icon">
                <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" />
              </li>
              <li className="contact-icon">
                <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg" />
              </li>
              <li className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
            </ul>
          </div>
          <div className="placeholder about-img">{`< 🚧 Under Construction 🚧 >`}</div>
        </div>
      </div>
    </section>
  );
}
