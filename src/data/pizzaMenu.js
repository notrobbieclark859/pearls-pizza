// =============================================================================
// Pearl's Pizza & Dinner Menu Data
// =============================================================================

export const starters = {
  title: "Starters",
  items: [
    {
      name: "Kale Salad",
      price: "$12",
      description: "w. sesame, scallion, miso vin, toasted pistachio",
      badges: ["VG"],
    },
    {
      name: "Vegan Caesar",
      price: "$11",
      description:
        "w. mixed local greens, red onion, bagel crouton, house Caesar dressing, nooch",
      badges: ["VG"],
    },
    {
      name: "Wedge Salad",
      price: "$11",
      description: "iceberg w. onion, everything bagel crunch, ranch",
      addon: "add Broadbent Bacon +4",
    },
    {
      name: "Breadstick",
      price: "$9",
      description: "w. marinara and ranch or vegan ranch",
    },
    {
      name: "Cauliflower Wings",
      price: "$10",
      description: "w. spicy buffalo sauce",
      badges: ["VG"],
    },
    {
      name: "Warm Marinated Olives",
      price: "$8",
    },
  ],
};

export const seafood = {
  title: "Seafood",
  items: [
    {
      name: "Half Dozen Oysters",
      price: "$22",
      description: "w. kimchi or classic mignonette",
    },
    {
      name: "Mussels",
      price: "$16",
      description:
        "P.E.I. mussels w. coconut lemongrass broth and charred sourdough",
    },
    {
      name: "Squid Sofrito",
      price: "$14",
      description: "tomato, peppers, cilantro, lime, and charred sourdough",
    },
    {
      name: "Tinned Woodfired Sardines",
      price: "$11",
      description: "w. lemon, chili flake, onion, and charred sourdough",
    },
    {
      name: "Marinated Anchovies",
      price: "$10",
      description: "w. pepperoncini, charred sourdough, and soft butter",
    },
  ],
};

export const pizzas = {
  title: "Pizza",
  notice: "house-made vegan sausage, ricotta, and parm available upon request",
  items: [
    {
      name: "Old No. 1",
      price: "$18",
      description: "tomato sauce, low mozz, fresh mozz, parm, caoo, basil",
    },
    {
      name: "Marinara",
      price: "$17",
      description:
        "no cheese. tomato sauce, capers, olives, garlic, fermented serrano peppers, caoo, herbs",
      badges: ["VG"],
      addon: "add boquerones +3",
    },
    {
      name: "Hellbabe",
      price: "$21",
      description:
        "tomato sauce, low mozz, fresh mozz, pepperoni, red onion, pepperoncini, parm, hot honey",
    },
    {
      name: "Purl's Pick",
      price: "$19/22",
      description:
        "pizza maker's choice. veg, vegan, or meat? spicy? no other requests or modifications.",
    },
    {
      name: "Winterland '78",
      price: "$22",
      description:
        "garlic cream, Mountain House mushrooms, artichoke hearts, castelvetrano olive, fontina, mozz, lemon, parm",
    },
    {
      name: "Beepa's Workshop",
      price: "$24",
      description:
        "tomato sauce, house meatballs, Gorgonzola, red onion, Mountain House mushrooms, lo mozz, parm, crp",
    },
    {
      name: "Hot Gossip",
      price: "$23",
      description:
        "buffalo chicken, pickled celery, garlic, red onion, mozz, parm — order a ranch",
    },
    {
      name: "Italian Soundtrack",
      price: "$22",
      description:
        "caoo, Calabrian chili, fresh mozz, low mozz, pistachio, fermented garlic honey",
    },
  ],
};

export const dippers = {
  price: "$1 each",
  items: [
    "Ranch",
    "Tomato Sauce",
    "Creamy Parm",
    "Chili Oil",
    "Nduja Aoli",
    "Hot Honey",
    "Garlic Sauce",
  ],
};

export const beverages = {
  title: "Natural Wines",
  subtitle: "",
  subcategories: [
    {
      label: "WHITE",
      wines: [
        {
          name: 'Thierry Chardon "Touraine Sauvignon Blanc"',
          price: "$13 / $44",
          origin: "(Sauvignon Blanc), France",
          description:
            "Honest, pure expression of the style. Vibrant, fresh, dry, practically pouring itself.",
        },
        {
          name: 'Cardedu "Nuo"',
          price: "$13 / $44",
          origin: "(Vermentino), Italy",
          description:
            "Prominent terroir, grippy but lifted, sea salt, sage, and woodiness with a touch of mellow citrus. Unfiltered and natural, how it was meant to be.",
        },
        {
          name: 'Esencia Rural "Pomaneo"',
          price: "$13 / $44",
          origin: "(Airen), Spain",
          description:
            "Ancestral style white imbued with an abundance of sunshine by just a few hours of skin contact. Vegetal, peachy, and herbaceous with a drop of honey.",
        },
      ],
    },
    {
      label: "RED",
      wines: [
        {
          name: 'Thibault Ducroux "En Roue Libre Beaujolais"',
          price: "$13 / $44",
          origin: "(Gamay), France",
          description:
            "Free-wheeling and light-headed with fresh, fruity vitality coming from dense rows of legendary, 50-year-old vines.",
        },
        {
          name: 'Dorcha "Modra Frankinja"',
          price: "$13 / $44",
          origin: "(Blaufrankisch), Slovenia",
          description:
            "True minimal intervention wine, rustic and ruby red. Ripe raspberry, empty libraries, warm and sparkly.",
        },
        {
          name: 'Baccanti "Aglianico"',
          price: "$13 / $44",
          origin: "(Aglianico), Italy",
          description:
            "Powerful Italian natural red. Baked black and blue fruit, tobacco, and herb. Volcanic Vesuvian soil introduces minerality.",
        },
      ],
    },
    {
      label: "ROSÉ",
      wines: [
        {
          name: 'Zillamina "Spanish Rose Wine"',
          price: "$13 / $44",
          origin: "(Monastrell), Spain",
          description:
            "Expressive rose from a longtime organic winemaker. Fresh, elegant, clean, and classic.",
        },
      ],
    },
    {
      label: "SPARKLING",
      wines: [
        {
          name: "Cold Di Luna Flora Prosecco",
          price: "$12 / $42",
          origin: "Treviso, Italy",
          description: "Dry, crisp, apple, honey, good bubbles.",
        },
      ],
    },
  ],
  simpleText: [
    {
      label: "N/A BEVS",
      items: [
        "St. Agrestis Amarco Cocktail — $8",
        "Rotating N/A Beer — $5",
        "Mocktail — $10",
      ],
    },
    {
      label: "BEER",
      items: [
        "Estrella Damm lager — $7",
        "Guinness Draught — $8",
        "West Sixth rotating — $7",
        "Orion — $6",
        "Stroh's — $5",
        "Miller Lite — $5",
      ],
    },
  ],
};

export const cocktails = {
  title: "Cocktails",
  items: [
    { name: "Negroni",                price: "$14", description: "Castle & Key Gin, Carpano Antica, Campari" },
    { name: "Spritz",                 price: "$14", description: "No. 1: Vermut, Lucano, olive, bubbles\nNo. 2: gin, Gorini, health shot, lemon, bubbles" },
    { name: "Granadarita",            price: "$14", description: "tequila, mezcal, Granada-Vallet, lime, demerar" },
    { name: "Kosmo-Mazov",            price: "$14", description: "vodka, spiced cranberry, lemon, rosemary" },
    { name: "Bright Side",            price: "$14", description: "rye, honeyed pear, lemon, thyme" },
    { name: "!Amaro Flight!",         price: "$24", description: "four different 1oz pours" },
    { name: "PSP",                    price: "$14", description: "rum, pineapple, orange juice, coconut, house pumpkin spice, lime" },
    { name: "Dirty Chai",             price: "$14", description: "vodka, chai, cold brew, black and white sesame, black walnut" },
    { name: "Improved Old Fashioned", price: "$14", description: "bourbon, Braulio, coriander" },
    { name: "Oyster Shooter",         price: "$9",  description: "vodka, bloody mix, lemon, Tajin rim, oyster on the half shell" },
    { name: "Health Shot",            price: "$8",  description: "vodka or gin, fresh ginger/tumeric/lemon/cayenne" },
  ],
};

/** Three featured pizzas for the Home page CardMenuPreview row */
export const featuredPizzas = [
  {
    name: "Old No. 1",
    description: "tomato sauce, low mozz, fresh mozz, parm, caoo, basil",
    price: "$18",
  },
  {
    name: "Hellbabe",
    description:
      "tomato sauce, low mozz, fresh mozz, pepperoni, red onion, pepperoncini, parm, hot honey",
    price: "$21",
  },
  {
    name: "Winterland '78",
    description:
      "garlic cream, Mountain House mushrooms, artichoke hearts, castelvetrano olive, fontina, mozz, lemon, parm",
    price: "$22",
  },
];
