import { Link } from "react-scroll";
export default function Navbar() {
  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }
  return (
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
              to="about-container"
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
              to="projects-container"
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
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
