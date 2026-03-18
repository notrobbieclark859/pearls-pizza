import "./Button.css";

/**
 * Button — primary (filled pink) or secondary (pink outline).
 * Renders as <a> when href is provided, otherwise <button>.
 */
export default function Button({
  variant = "primary",
  href,
  target,
  rel,
  onClick,
  children,
  className = "",
  ...props
}) {
  const classes = ["btn", `btn--${variant}`, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
