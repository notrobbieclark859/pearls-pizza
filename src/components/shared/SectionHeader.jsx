import "./SectionHeader.css";

/**
 * SectionHeader — Playfair Display h1 + optional Lato subtitle.
 */
export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={["section-header", className].filter(Boolean).join(" ")}>
      <h1 className="section-header__title">{title}</h1>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}
