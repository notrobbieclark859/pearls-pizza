import SectionHero from "../components/SectionHero";
import DividerCheckerboard from "../components/shared/DividerCheckerboard";
import TextImageBlock from "../components/shared/TextImageBlock";
import CardHours from "../components/cards/CardHours";
import CardMenuPreview from "../components/cards/CardMenuPreview";
import CardReservations from "../components/cards/CardReservations";
import { aboutPizza, aboutBagels, featured } from "../content/home";
import { featuredPizzas } from "../data/pizzaMenu";

import pizzaPhoto from "@assets/images/pizza/DSCF1235.jpg";
import bagelPhoto from "@assets/images/bagels/DSCF0132.jpg";
import featuredPizza1 from "@assets/images/pizza/DSCF1195.jpg";
import featuredPizza2 from "@assets/images/pizza/DSCF2965.jpg";
import featuredPizza3 from "@assets/images/pizza/DSCF1231.jpg";

import "./Home.css";

const featuredImages = [featuredPizza1, featuredPizza2, featuredPizza3];

export default function Home() {
  return (
    <div className="home">
      <SectionHero />

      <DividerCheckerboard />

      <div className="home__content">
        <TextImageBlock
          imagePosition="right"
          title={aboutPizza.title}
          description={aboutPizza.description}
          linkText={aboutPizza.linkText}
          linkHref="/pizza-menu"
          imageSrc={pizzaPhoto}
          imageAlt={aboutPizza.imageAlt}
        />

        <TextImageBlock
          imagePosition="left"
          title={aboutBagels.title}
          description={aboutBagels.description}
          linkText={aboutBagels.linkText}
          linkHref="/bagel-menu"
          imageSrc={bagelPhoto}
          imageAlt={aboutBagels.imageAlt}
        />

        <div className="home__info-row">
          <CardHours />
          <CardReservations />
        </div>
      </div>

      <DividerCheckerboard />

      <div className="home__featured">
        <div className="home__featured-inner">
          <h2 className="home__featured-heading">{featured.heading}</h2>
          <div className="home__featured-cards">
            {featuredPizzas.map((pizza, i) => (
              <CardMenuPreview
                key={pizza.name}
                name={pizza.name}
                description={pizza.description}
                price={pizza.price}
                imageSrc={featuredImages[i]}
                imageAlt={pizza.name}
              />
            ))}
          </div>
        </div>
      </div>

      <DividerCheckerboard />
    </div>
  );
}
