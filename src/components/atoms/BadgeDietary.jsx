import "./BadgeDietary.css";

/**
 * BadgeDietary — teal pill label for dietary tags.
 * label: "VG" | "GF" | "DF" | "V" | "Spicy"
 */
export default function BadgeDietary({ label }) {
  return (
    <span className="badge-dietary" title={getLongLabel(label)}>
      {label}
    </span>
  );
}

function getLongLabel(label) {
  const map = {
    VG: "Vegan",
    V: "Vegetarian",
    GF: "Gluten-Free",
    DF: "Dairy-Free",
    Spicy: "Spicy",
  };
  return map[label] ?? label;
}
