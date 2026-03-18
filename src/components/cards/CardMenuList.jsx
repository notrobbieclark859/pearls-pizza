import "./CardMenuList.css";

/**
 * CardMenuList — compact list card for items with varieties (e.g. bagels, spreads).
 *
 * Props:
 *   name      string  (e.g. "Wood-Fired Bagels")
 *   price     string  (e.g. "$2")
 *   varieties string  (e.g. "Salted · Sesame · Poppy · Everything · Bialy")
 */
export default function CardMenuList({ name, price, varieties }) {
  return (
    <div className="card-menu-list">
      <div className="card-menu-list__header-row">
        <p className="card-menu-list__name">{name}</p>
        {price && <p className="card-menu-list__price">{price}</p>}
      </div>
      {varieties && (
        <div className="card-menu-list__varieties">
          <p className="card-menu-list__variety-text">{varieties}</p>
        </div>
      )}
    </div>
  );
}
