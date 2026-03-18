import SectionHeader from "../components/shared/SectionHeader";
import DividerCheckerboard from "../components/shared/DividerCheckerboard";
import SectionMenuCategory from "../components/sections/SectionMenuCategory";
import SectionBeverageCategory from "../components/sections/SectionBeverageCategory";
import CardMenuItem from "../components/cards/CardMenuItem";
import { pizzaMenuPage } from "../content/home";
import { legal } from "../content/site";
import { starters, seafood, pizzas, dippers, beverages, cocktails } from "../data/pizzaMenu";

import "./PizzaDinnerMenu.css";

export default function PizzaDinnerMenu() {
  return (
    <div className="pizza-menu">
      <div className="pizza-menu__header">
        <div className="pizza-menu__header-inner">
          <SectionHeader title={pizzaMenuPage.title} subtitle={pizzaMenuPage.subtitle} />
        </div>
      </div>

      <DividerCheckerboard />

      {/* Food grid: Starters + Seafood (left) | Pizza + Dippers (right) */}
      <div className="pizza-menu__content">
        <div className="pizza-menu__col">
          <SectionMenuCategory {...starters} />
          <SectionMenuCategory {...seafood} />
        </div>

        <div className="pizza-menu__col">
          <SectionMenuCategory title={pizzas.title} notice={pizzas.notice} items={pizzas.items} />

          <div className="pizza-menu__dippers">
            <h2 className="pizza-menu__dippers-heading">
              Dippers <span className="pizza-menu__dippers-price">{dippers.price}</span>
            </h2>
            <ul className="pizza-menu__dippers-list">
              {dippers.items.map((item) => (
                <li key={item} className="pizza-menu__dipper-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <DividerCheckerboard />

      {/* Drinks grid: Natural Wines + N/A + Beer (left) | Cocktails (right) */}
      <div className="pizza-menu__drinks">
        <div className="pizza-menu__col">
          <SectionBeverageCategory
            title={beverages.title}
            subtitle={beverages.subtitle}
            subcategories={beverages.subcategories}
            simpleText={beverages.simpleText}
          />
        </div>

        <div className="pizza-menu__col">
          <div className="pizza-menu__cocktails">
            <h2 className="pizza-menu__cocktails-heading">{cocktails.title}</h2>
            <div className="pizza-menu__cocktails-items">
              {cocktails.items.map((item) => (
                <CardMenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <DividerCheckerboard />

      <p className="pizza-menu__gratuity">{legal.gratuity}</p>
    </div>
  );
}
