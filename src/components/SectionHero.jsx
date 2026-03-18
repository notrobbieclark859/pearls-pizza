import { Link } from "react-router-dom";
import pearlsLogo from "@assets/images/branding/pearls-transparentBG 1.svg";
import { hero } from "../content/home";
import "./SectionHero.css";

export default function SectionHero() {
  return (
    <section className="hero">
      <img className="hero__logo" src={pearlsLogo} alt="Pearl's" />

      <div className="hero__text">
        <p className="hero__tagline">{hero.tagline}</p>
        <p className="hero__address">{hero.address}</p>
        <p className="hero__slogan">{hero.slogan}</p>
      </div>

      <div className="hero__buttons">
        <Link to="/pizza-menu" className="hero__btn">{hero.pizzaMenuLabel}</Link>
        <Link to="/bagel-menu" className="hero__btn">{hero.bagelMenuLabel}</Link>
      </div>
    </section>
  );
}
