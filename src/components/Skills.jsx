import { devIcons } from "../assets/icons";

export default function Skills() {
  return (
    <section className="skills-wrapper">
      <div className="section-container skills">
        <h2>Skills</h2>
        <h3>Languages</h3>
        <ul>
          <li>
            <img src={devIcons.js} alt="javascript" />
          </li>
          <li>
            <img src={devIcons.ruby} />
          </li>
          <li>
            <img src={devIcons.html} />
          </li>
          <li>
            <img src={devIcons.css} />
          </li>
        </ul>
        <h3>Frameworks & Libraries</h3>
        <ul>
          <li>
            <img src={devIcons.node} />
          </li>
          <li>
            <img src={devIcons.react} />
          </li>
          <li>
            <img src={devIcons.next} />
          </li>
          <li>
            <img src={devIcons.express} />
          </li>
          <li>
            <img src={devIcons.jquery} />
          </li>
          <li>
            <img src={devIcons.sass} />
          </li>
          <li>
            <img src={devIcons.rails} />
          </li>
        </ul>
        <h3>Systems & Databases</h3>
        <ul>
          <li>
            <img src={devIcons.postgresql} />
          </li>
          <li>
            <img src={devIcons.git} />
          </li>
          <li>
            <img src={devIcons.prisma} />
          </li>
        </ul>
        <h3>Testing</h3>
        <ul>
          <li>
            <img src={devIcons.mocha} />
          </li>
          <li>
            <img src={devIcons.chai} />
          </li>
          <li>
            <img src={devIcons.storybook} />
          </li>
          <li>
            <img src={devIcons.jest} />
          </li>
          <li>
            <img src={devIcons.cypress} />
          </li>
          <li>
            <img src={devIcons.rspec} />
          </li>
        </ul>
      </div>
    </section>
  );
}
