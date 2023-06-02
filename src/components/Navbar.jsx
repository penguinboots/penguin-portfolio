import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <header>
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
              <Link to="about-container" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects-container" spy={true} smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact-container" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href="#">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
