import { Link } from "react-router-dom";
import { footer } from "../../content/site";
import "./Footer.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Pizza Menu", to: "/pizza-menu" },
  { label: "Bagel Menu", to: "/bagel-menu" },
  { label: "Gallery", to: "https://www.instagram.com/pearlspizzapie/", external: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav" aria-label="Footer navigation">
          {navLinks.map(({ label, to, external }) =>
            external ? (
              <a key={label} href={to} target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                {label}
              </a>
            ) : (
              <Link key={label} to={to} className="footer__nav-link">{label}</Link>
            )
          )}
        </nav>

        <div className="footer__divider" role="separator" />

        <div className="footer__columns">
          <div className="footer__col">
            <p className="footer__col-heading">{footer.location.heading}</p>
            <div className="footer__col-body">
              <p>{footer.location.line1}</p>
              <p>{footer.location.line2}</p>
            </div>
          </div>

          <div className="footer__col">
            <p className="footer__col-heading">{footer.hours.heading}</p>
            <div className="footer__col-body">
              {footer.hours.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <p className="footer__col-heading">{footer.contact.heading}</p>
            <div className="footer__col-body">
              <p><a href={footer.contact.phoneHref}>{footer.contact.phone}</a></p>
              <p><a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a></p>
              <p>
                <a href={footer.contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {footer.contact.instagram}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
