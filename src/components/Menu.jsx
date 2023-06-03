import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { convertRemToPixels } from "../utils/helpers";

export default function Menu(props) {
  const { isOpen } = props;
  Menu.propTypes = {
    isOpen: PropTypes.bool,
  };

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
        <hr />
        <li className="nav-item">
          <a
            href="https://flowcv.com/resume/7vgjugqk7r"
            rel="noreferrer"
            target="_blank"
          >
            Resume
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </li>
      </ul>
    </div>
  );
}
