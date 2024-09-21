import { stepsData } from "./content";
import Step from "./Step";
import styles from "./Steps.module.scss";

export type StepsProps = {
  title?: string;
  theme?: "light" | "dark";
  stepsHeadingLevel?: "h2" | "h3" | "h4" | "h5";
};

const Steps = ({ title, theme = "light", stepsHeadingLevel }: StepsProps) => (
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
    <ol aria-label="Step sequence" className={`${styles.stepsList}`}>
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

export default Steps;
