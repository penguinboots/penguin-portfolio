import bannerOverlay from "../assets/banner-overlay.png";
import { Link } from "react-scroll";
import { convertRemToPixels } from "../utils/helpers";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>Hi! I&#39;m Sabrina.</h1>
        <p>Welcome to my portfolio!</p>
        <Link
          className="banner-button"
          to="about-container"
          spy={true}
          smooth={true}
          duration={500}
          offset={-convertRemToPixels(8)}
        >
          See My Stuff!
        </Link>
      </div>
      <img className="hero-banner" src={bannerOverlay} />
    </section>
  );
}
