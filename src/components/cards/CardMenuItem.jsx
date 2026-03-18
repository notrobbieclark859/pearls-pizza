import BadgeDietary from "../atoms/BadgeDietary";
import "./CardMenuItem.css";

/**
 * CardMenuItem — full menu item card.
 *
 * Props:
 *   name        string
 *   price       string  (e.g. "$18")
 *   description string
 *   badges      string[] (e.g. ["VG", "GF"])
 *   addon       string  optional add-on line
 */
export default function CardMenuItem({ name, price, description, badges = [], addon }) {
  return (
    <div className="card-menu-item">
      <div className="card-menu-item__top-row">
        <p className="card-menu-item__name">{name}</p>
        <p className="card-menu-item__price">{price}</p>
      </div>

      {description && (
        <p className="card-menu-item__description">{description}</p>
      )}

      {badges.length > 0 && (
        <div className="card-menu-item__badges">
          {badges.map((b) => (
            <BadgeDietary key={b} label={b} />
          ))}
        </div>
      )}

      {addon && <p className="card-menu-item__addon">{addon}</p>}
    </div>
  );
}
