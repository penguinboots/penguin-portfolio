import iconGithub from "../assets/icon_github.svg";
import iconLinkedIn from "../assets/icon_linkedin.svg";
import iconMail from "../assets/icon_mail.svg";

import photo from "../assets/profile_photo.png"


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
            <ul className="contact-icons">
              <li>
                <a href="https://github.com/penguinboots">
                  <img src={iconGithub} alt="github icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sabrina-y-wang/">
                  <img src={iconLinkedIn} />
                </a>
              </li>
              <li>
                <a href="mailto: sabrina.ynw@gmail.com">
                  <img src={iconMail} />
                </a>
              </li>
            </ul>
          </div>
          <img className="about-img" src={photo}/>
        </div>
      </div>
    </section>
  );
}
