import { hours } from "../../content/home";
import "./CardHours.css";

export default function CardHours() {
  return (
    <div className="card-hours">
      <p className="card-hours__heading">{hours.heading}</p>

      <div className="card-hours__service">
        <p className="card-hours__service-name">{hours.bagels.label}</p>
        {hours.bagels.times.map((t) => (
          <p key={t} className="card-hours__service-time">{t}</p>
        ))}
      </div>

      <div className="card-hours__service">
        <p className="card-hours__service-name">{hours.pizza.label}</p>
        {hours.pizza.times.map((t) => (
          <p key={t} className="card-hours__service-time">{t}</p>
        ))}
      </div>
    </div>
  );
}
