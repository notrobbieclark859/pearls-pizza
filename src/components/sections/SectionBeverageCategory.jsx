import SectionHeader from "../shared/SectionHeader";
import CardWineItem from "../cards/CardWineItem";
import "./SectionBeverageCategory.css";

/**
 * SectionBeverageCategory — wine list with subcategory labels + simple text items.
 *
 * Props:
 *   title         string
 *   subtitle      string (optional)
 *   subcategories Array<{ label, wines: Array<{ name, price, origin, description }> }>
 *   simpleText    Array<{ label, items: string[] }>  (beer, N/A bevs, etc.)
 */
export default function SectionBeverageCategory({
  title,
  subtitle,
  subcategories = [],
  simpleText = [],
}) {
  return (
    <section className="section-beverage">
      <SectionHeader title={title} subtitle={subtitle} />

      {subcategories.map(({ label, wines }) => (
        <div key={label} className="section-beverage__group">
          <p className="section-beverage__sublabel">{label}</p>
          <div className="section-beverage__wines">
            {wines.map((wine) => (
              <CardWineItem key={wine.name} {...wine} />
            ))}
          </div>
        </div>
      ))}

      {simpleText.map(({ label, items }) => (
        <div key={label} className="section-beverage__simple-group">
          <p className="section-beverage__sublabel">{label}</p>
          <ul className="section-beverage__simple-list">
            {items.map((item) => (
              <li key={item} className="section-beverage__simple-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
