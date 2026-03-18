import { Link } from "react-router-dom";
import "./TextImageBlock.css";

/**
 * TextImageBlock — side-by-side text + photo section.
 *
 * Props:
 *   imagePosition  "left" | "right"  (default "right")
 *   title          heading text
 *   description    body paragraph
 *   linkText       link label (e.g. "See Menu")
 *   linkHref       internal route or external URL
 *   imageSrc       imported image asset
 *   imageAlt       alt text for the photo
 */
export default function TextImageBlock({
  imagePosition = "right",
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt = "",
}) {
  const isExternal = linkHref?.startsWith("http");

  return (
    <div className={`text-image text-image--${imagePosition}`}>
      <div className="text-image__text">
        <h2 className="text-image__title">{title}</h2>
        {description && <p className="text-image__description">{description}</p>}
        {linkText && linkHref && (
          isExternal ? (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-image__link"
            >
              {linkText}
            </a>
          ) : (
            <Link to={linkHref} className="text-image__link">
              {linkText}
            </Link>
          )
        )}
      </div>

      <div className="text-image__image-wrap">
        <img src={imageSrc} alt={imageAlt} className="text-image__image" />
      </div>
    </div>
  );
}
