import bannerOverlay from "../assets/banner-overlay.png";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>Hi! I&#39;m Sabrina.</h1>
        <p>Welcome to my portfolio!</p>
        <Link to="about-container" spy={true} smooth={true} duration={500}>
          <button className="banner-button">See My Stuff!</button>
        </Link>
      </div>
      <img className="hero-banner" src={bannerOverlay} />
    </section>
  );
}
