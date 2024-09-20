import Step from "./Step";
import styles from "./Steps.module.scss";

export type StepsProps = {
  title?: string;
  theme?: "light" | "dark";
  stepsHeadingLevel?: "h2" | "h3" | "h4" | "h5";
};

const stepsData = [
  {
    number: "01",
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced, and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const Steps = ({ title, theme = "light", stepsHeadingLevel }: StepsProps) => {
  return (
    <div
      className={`${styles.stepsWrapper} ${theme === "light" ? styles.light : styles.dark}`}
    >
      {title && (
        <div className={styles.header}>
          <h2 className={`${styles.title} ff-serif fs-450 text-neutral`}>
            {title}
          </h2>
        </div>
      )}
      <ol className={`${styles.stepsList}`}>
        {stepsData.map((step) => (
          <Step
            key={`${step.number} ${step.title}`}
            number={step.number}
            title={step.title}
            description={step.description}
            theme={theme}
            headingLevel={stepsHeadingLevel}
          />
        ))}
      </ol>
    </div>
  );
};

export default Steps;
