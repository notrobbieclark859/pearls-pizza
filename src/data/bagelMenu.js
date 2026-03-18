// =============================================================================
// Pearl's Bagels & Breakfast Menu Data
// =============================================================================

export const bagels = {
  name: "Wood-Fired Bagels",
  price: "$2",
  varieties: "Salted · Sesame · Poppy · Everything · Bialy",
};

export const spreads = {
  name: "Spreads",
  price: "$2.50",
  varieties:
    "Plain · Scallion · Fermented Serrano · Cinnamon Honey · Horseradish · Olive Herb · Pesto · Vegan · Vegan Scallion · Seed Butter · Local Jam",
};

export const etc = {
  title: "Etc.",
  items: [
    {
      name: "Breakfast Taco",
      price: "$7.50",
      description:
        "scrambled farm egg w. crispy pepper jack cheese, calabrian chili hot sauce, scallion, corn tortilla",
      badges: ["GF"],
    },
    { name: "Side of Bacon", price: "$4.50" },
    { name: "Fresh Fruit", price: "$6.50" },
    { name: "Banana", price: "$1" },
    { name: "Chips", price: "$2" },
    { name: "Pickle", price: "$1" },
    { name: "Gelato", price: "$5" },
  ],
};

export const sandwiches = {
  title: "Sandwiches",
  items: [
    {
      name: "Egg & Cheese",
      price: "$7",
      description:
        "w. garlic mayo and your choice of swiss, american, or cheddar cheese",
    },
    {
      name: "Bacon, Egg & Cheese",
      price: "$9",
      description:
        "broadbent bacon, local egg, garlic mayo, and your choice of swiss, american, or cheddar",
    },
    {
      name: "Steak, Egg & Cheese",
      price: "$11",
      description:
        "county club smoked brisket, local egg, garlic mayo, choice of swiss, american, or cheddar",
    },
    {
      name: "Veggie",
      price: "$10",
      description:
        "choice of bagel w. pesto cream cheese, chili dressed greens, sprouts, cucumber, red onion, local tomato, and marinated artichoke heart",
    },
    {
      name: "Jalapeno, Egg & Jam",
      price: "$11",
      description:
        "charred jalapeño, local egg, swiss cheese, local blackberry jam, cream cheese, and potato stix",
    },
    {
      name: "Smoked Brisket",
      price: "$13",
      description:
        "choice of bagel w. county club brisket, onion and horseradish cream cheese",
    },
    {
      name: "Shuckman's Nova Salmon",
      price: "$11",
      description: "w. onion, caper, and choice of spread",
      addon: "make it supreme w. sprouts, cuke, dill, and pickled red onion — $13",
    },
    {
      name: "Shuckman's Smoked Trout",
      price: "$10",
      description:
        "choice of bagel w. olive herb spread, pickled red onion, tomato",
    },
    {
      name: "Seed Butter & Banana",
      price: "$7",
      description:
        "house seed butter w. sunflower, flax, chia, pepita, hemp hearts, honey and bananas",
      addon: "add bacon — $9",
    },
  ],
};

export const drinks = {
  title: "Drinks",
  items: [
    {
      name: "Drip Coffee",
      price: "$3",
      description: "magic beans pearl's bagel blend",
    },
    { name: "Cold Brew", price: "$4" },
    { name: "Vietnamese Coffee", price: "$5" },
    { name: "Rishi Hot Tea", price: "$3" },
    { name: "Natalie's OJ", price: "$5" },
    { name: "Soda", price: "$2" },
    { name: "Martinelli's Apple Juice", price: "$3" },
    { name: "Kombucha", price: "$5" },
  ],
};

export const packages = {
  title: "Bagel Packages",
  items: [
    { name: "Coffee for Ten", price: "$25" },
    { name: "Dozen w. Three Spreads", price: "$48" },
    { name: "Dozen w. Veggies and Three Spreads", price: "$78" },
    { name: "Dozen w. Nova Salmon Supreme", price: "$115" },
  ],
};
