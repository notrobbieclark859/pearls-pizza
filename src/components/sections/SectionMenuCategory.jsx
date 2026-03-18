import SectionHeader from "../shared/SectionHeader";
import CardMenuItem from "../cards/CardMenuItem";
import "./SectionMenuCategory.css";

/**
 * SectionMenuCategory — a named food category with a list of CardMenuItems.
 *
 * Props:
 *   title    string
 *   subtitle string (optional)
 *   items    Array<{ name, price, description, badges?, addon? }>
 *   notice   string (optional notice shown below the header, e.g. vegan options available)
 */
export default function SectionMenuCategory({ title, subtitle, items = [], notice }) {
  return (
    <section className="section-menu-category">
      <SectionHeader title={title} subtitle={subtitle} />

      {notice && (
        <p className="section-menu-category__notice">{notice}</p>
      )}

      <div className="section-menu-category__items">
        {items.map((item) => (
          <CardMenuItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
