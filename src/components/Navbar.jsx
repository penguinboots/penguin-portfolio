import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { convertRemToPixels } from "../utils/helpers";

export default function Navbar(props) {
  Navbar.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func,
  };

  const { isOpen, toggleMenu } = props;

  return (
    <div className="nav-wrapper">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo">
            <Link to="app-wrapper" spy={true} smooth={true} duration={500}>
              SW
            </Link>
          </div>
        </div>
        <div className="right-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to="about-wrapper"
                spy={true}
                smooth={true}
                duration={500}
                offset={-convertRemToPixels(8)}
              >
                About
              </Link>
            </li>
            <li className="nav-divider">|</li>
            <li className="nav-item">
              <Link
                to="projects-wrapper"
                spy={true}
                smooth={true}
                duration={500}
                offset={-convertRemToPixels(8)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-divider">|</li>
            <li className="nav-item">
              <Link
                to="contact-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={-convertRemToPixels(8)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-divider">|</li>
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
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
      </nav>
    </div>
  );
}
