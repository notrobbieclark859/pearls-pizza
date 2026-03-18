import "./CardMenuPreview.css";

/**
 * CardMenuPreview — featured item card with photo, name, description, price.
 * Used on the Home page to showcase signature dishes.
 */
export default function CardMenuPreview({ name, description, price, imageSrc, imageAlt = "" }) {
  return (
    <div className="card-menu-preview">
      <div className="card-menu-preview__image-wrap">
        <img src={imageSrc} alt={imageAlt} className="card-menu-preview__image" />
      </div>
      <div className="card-menu-preview__body">
        <p className="card-menu-preview__name">{name}</p>
        {description && (
          <p className="card-menu-preview__description">{description}</p>
        )}
        <p className="card-menu-preview__price">{price}</p>
      </div>
    </div>
  );
}
