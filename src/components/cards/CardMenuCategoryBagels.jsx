import CardMenuList from "./CardMenuList";
import "./CardMenuCategoryBagels.css";

/**
 * CardMenuCategoryBagels — "BAGELS" section header + Wood-Fired Bagels
 * and Spreads list cards grouped in one container.
 *
 * Props:
 *   bagels   { name, price, varieties }
 *   spreads  { name, price, varieties }
 */
export default function CardMenuCategoryBagels({ bagels, spreads }) {
  return (
    <div className="card-menu-category-bagels">
      <h2 className="card-menu-category-bagels__heading">Bagels</h2>
      <div className="card-menu-category-bagels__cards">
        <CardMenuList
          name={bagels.name}
          price={bagels.price}
          varieties={bagels.varieties}
        />
        <CardMenuList
          name={spreads.name}
          price={spreads.price}
          varieties={spreads.varieties}
        />
      </div>
    </div>
  );
}
