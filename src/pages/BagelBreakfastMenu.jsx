import SectionHeader from "../components/shared/SectionHeader";
import DividerCheckerboard from "../components/shared/DividerCheckerboard";
import SectionMenuCategory from "../components/sections/SectionMenuCategory";
import CardMenuCategoryBagels from "../components/cards/CardMenuCategoryBagels";
import CardMenuItem from "../components/cards/CardMenuItem";
import { bagelMenuPage } from "../content/home";
import { legal } from "../content/site";
import { bagels, spreads, etc, sandwiches, drinks, packages } from "../data/bagelMenu";

import "./BagelBreakfastMenu.css";

export default function BagelBreakfastMenu() {
  return (
    <div className="bagel-menu">
      <div className="bagel-menu__header">
        <div className="bagel-menu__header-inner">
          <SectionHeader title={bagelMenuPage.title} subtitle={bagelMenuPage.subtitle} />
          <p className="bagel-menu__subnotice">{bagelMenuPage.subnotice}</p>
        </div>
      </div>

      <DividerCheckerboard />

      <div className="bagel-menu__content">
        <div className="bagel-menu__col">
          <CardMenuCategoryBagels bagels={bagels} spreads={spreads} />

          <div className="bagel-menu__section">
            <h2 className="bagel-menu__section-title">Etc.</h2>
            <div className="bagel-menu__items">
              {etc.items.map((item) => (
                <CardMenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="bagel-menu__col">
          <SectionMenuCategory title={sandwiches.title} items={sandwiches.items} />

          <div className="bagel-menu__section">
            <h2 className="bagel-menu__section-title">{drinks.title}</h2>
            <div className="bagel-menu__drinks-grid">
              {drinks.items.map((item) => (
                <div key={item.name} className="bagel-menu__drink-item">
                  <span className="bagel-menu__drink-name">{item.name}</span>
                  {item.description && (
                    <span className="bagel-menu__drink-desc"> — {item.description}</span>
                  )}
                  <span className="bagel-menu__drink-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bagel-menu__section">
            <h2 className="bagel-menu__section-title">{packages.title}</h2>
            <div className="bagel-menu__packages">
              {packages.items.map((item) => (
                <div key={item.name} className="bagel-menu__package-item">
                  <span className="bagel-menu__package-name">{item.name}</span>
                  <span className="bagel-menu__package-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DividerCheckerboard />

      <p className="bagel-menu__gratuity">{legal.gratuity}</p>
    </div>
  );
}
