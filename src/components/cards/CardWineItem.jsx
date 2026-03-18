import "./CardWineItem.css";

/**
 * CardWineItem — wine entry in the beverage section.
 *
 * Props:
 *   name        string
 *   price       string  (e.g. "$13/44")
 *   origin      string  (e.g. "(Sauvignon Blanc), France")
 *   description string
 */
export default function CardWineItem({ name, price, origin, description }) {
  return (
    <div className="card-wine-item">
      <div className="card-wine-item__top-row">
        <p className="card-wine-item__name">{name}</p>
        <p className="card-wine-item__price">{price}</p>
      </div>
      <div className="card-wine-item__body">
        {origin && <p className="card-wine-item__origin">{origin}</p>}
        {description && <p className="card-wine-item__description">{description}</p>}
      </div>
    </div>
  );
}
