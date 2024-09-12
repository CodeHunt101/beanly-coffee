"use client";

import Accordion from "@/components/accordion/Accordion";
import AccordionItem from "@/components/accordion/AccordionItem";
import OptionCards, {
  OptionCardData,
} from "@/components/optionCards/OptionCards";
import styles from "./CreatePlanSection.module.scss";

const preferenceOptions: OptionCardData[] = [
  {
    title: "Capsule",
    content: "Compatible with Nespresso systems and similar brewers",
  },
  {
    title: "Filter",
    content: "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    title: "Espresso",
    content:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];

const beanTypeOptions: OptionCardData[] = [
  {
    title: "Single Origin",
    content: "Distinct, high quality coffee from a specific family-owned farm",
  },
  {
    title: "Decaf",
    content: "Just like regular coffee, except the caffeine has been removed",
  },
  {
    title: "Blended",
    content:
      "Combination of two or three dark roasted beans of organic coffees",
  },
];

const quantityOptions: OptionCardData[] = [
  {
    title: "250g",
    content: "Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    title: "500g",
    content: "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    title: "1000g",
    content: "Perfect for offices and events. Yields about 90 delightful cups.",
  },
];

const grindOptionOptions: OptionCardData[] = [
  {
    title: "Wholebean",
    content: "Best choice if you cherish the full sensory experience",
  },
  {
    title: "Filter",
    content: "For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    title: "Cafetiére",
    content: "Coarse ground beans specially suited for French press coffee",
  },
];

const deliveryOptions: OptionCardData[] = [
  {
    title: "Every week",
    content: "$7.20 per shipment. Includes free first-class shipping.",
  },
  {
    title: "Every 2 weeks",
    content: "$9.60 per shipment. Includes free priority shipping.",
  },
  {
    title: "Every month",
    content: "$12.00 per shipment. Includes free priority shipping.",
  },
];

const CreatePlanSection = () => {
  return (
    <section className={styles.createPlanSection}>
      <ol className={styles.orderList}>
        <li>
          <span>01</span>Preferences
        </li>
        <li>
          <span>02</span>Bean Type
        </li>
        <li>
          <span>03</span>Quantity
        </li>
        <li>
          <span>04</span>Grind Option
        </li>
        <li>
          <span>05</span>Deliveries
        </li>
      </ol>
      <Accordion>
        <AccordionItem title="How do you drink your coffee?">
          <OptionCards options={preferenceOptions} />
        </AccordionItem>
        <AccordionItem title="What type of coffee?">
          <OptionCards options={beanTypeOptions} />
        </AccordionItem>
        <AccordionItem title="How much would you like?">
          <OptionCards options={quantityOptions} />
        </AccordionItem>
        <AccordionItem title="Want us to grind them?">
          <OptionCards options={grindOptionOptions} />
        </AccordionItem>
        <AccordionItem title="How often should we deliver?">
          <OptionCards options={deliveryOptions} />
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default CreatePlanSection;
