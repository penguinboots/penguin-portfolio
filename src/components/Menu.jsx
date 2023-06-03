import PropTypes from "prop-types";
import { Link } from "react-scroll";

export default function Menu(props) {
  const { isOpen } = props;
  Menu.propTypes = {
    isOpen: PropTypes.bool,
  };

  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  return (
    <div
      className={
        isOpen
          ? "menu-window menu-window-active"
          : "menu-window menu-window-inactive"
      }
    >
      <ul className="menu-items">
        <li className="nav-item">
          <Link
            to="about-container"
            spy={true}
            smooth={true}
            duration={500}
            offset={-convertRemToPixels(6)}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects-container"
            spy={true}
            smooth={true}
            duration={500}
            offset={-convertRemToPixels(6)}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact-container"
            spy={true}
            smooth={true}
            duration={500}
            offset={-convertRemToPixels(6)}
          >
            Contact
          </Link>
        </li>
        <hr/>
        <li className="nav-item">
          <a
            href="https://flowcv.com/resume/7vgjugqk7r"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
