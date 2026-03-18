import { NavLink } from "react-router-dom";
import pearlsLogo from "@assets/images/branding/pearls-transparentBG 1.svg";
import Button from "../atoms/Button";
import "./Nav.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Pizza Menu", to: "/pizza-menu" },
  { label: "Bagel Menu", to: "/bagel-menu" },
  { label: "Gallery", to: "https://www.instagram.com/pearlspizzapie/", external: true },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__logo-link" aria-label="Pearl's — Home">
          <img
            src={pearlsLogo}
            alt="Pearl's"
            className="nav__logo"
          />
        </NavLink>

        <ul className="nav__links">
          {navLinks.map(({ label, to, external }) =>
            external ? (
              <li key={label}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav__link"
                >
                  {label}
                </a>
              </li>
            ) : (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    ["nav__link", isActive ? "nav__link--active" : ""].filter(Boolean).join(" ")
                  }
                  end={to === "/"}
                >
                  {label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <Button
          variant="primary"
          href="https://www.toasttab.com/pearls-lexington"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__cta"
        >
          Order Online
        </Button>
      </div>
    </nav>
  );
}
