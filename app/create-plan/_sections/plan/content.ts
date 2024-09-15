import { OptionCardData } from "@/components/optionCards/OptionCards";

export const stepLinks = [
  "Preferences",
  "Bean Type",
  "Quantity",
  "Grind Option",
  "Deliveries",
];

export const steps: {
  accordionLabel: string;
  optionCards: OptionCardData[];
}[] = [
  {
    accordionLabel: "How do you drink your coffee?",
    optionCards: [
      {
        optionTitle: "Capsule",
        content: "Compatible with Nespresso systems and similar brewers",
      },
      {
        optionTitle: "Filter",
        content:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        optionTitle: "Espresso",
        content:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    accordionLabel: "What type of coffee?",
    optionCards: [
      {
        optionTitle: "Single Origin",
        content:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        optionTitle: "Decaf",
        content:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        optionTitle: "Blended",
        content:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    accordionLabel: "How much would you like?",
    optionCards: [
      {
        optionTitle: "250g",
        content:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        optionTitle: "500g",
        content:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        optionTitle: "1000g",
        content:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    accordionLabel: "Want us to grind them?",
    optionCards: [
      {
        optionTitle: "Wholebean",
        content: "Best choice if you cherish the full sensory experience",
      },
      {
        optionTitle: "Filter",
        content:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        optionTitle: "Cafetiére",
        content: "Coarse ground beans specially suited for French press coffee",
      },
    ],
  },
  {
    accordionLabel: "How often should we deliver?",
    optionCards: [
      {
        optionTitle: "Every week",
        content: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        optionTitle: "Every 2 weeks",
        content: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        optionTitle: "Every month",
        content: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
