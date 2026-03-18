import { reservations } from "../../content/home";
import "./CardReservations.css";

export default function CardReservations() {
  return (
    <div className="card-reservations">
      <h2 className="card-reservations__title">{reservations.title}</h2>
      <p className="card-reservations__intro">{reservations.intro}</p>
      <p className="card-reservations__detail">
        {reservations.detail}{" "}
        <a href={reservations.phoneHref} className="card-reservations__phone">
          {reservations.phone}
        </a>
        .
      </p>
      <p className="card-reservations__fine-print">{reservations.finePrint}</p>
    </div>
  );
}
