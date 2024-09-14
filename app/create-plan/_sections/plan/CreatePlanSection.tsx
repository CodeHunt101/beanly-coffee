import Accordion from "@/components/accordion/Accordion";
import AccordionItem from "@/components/accordion/AccordionItem";
import styles from "./CreatePlanSection.module.scss";
import OptionCards from "@/components/optionCards/OptionCards";
import StepList from "./StepsList";
import { PlanContext, PlanContextType } from "@/app/_context/planContext";
import { useContext } from "react";
import { steps } from "./questions";

const CreatePlanSection = () => {
  const { setSelectedOption } = useContext<PlanContextType>(PlanContext);

  const handleSelectedOption = (stepId: string, optionTitle: string) => {
    console.log({ stepId, optionTitle });
    setSelectedOption(stepId, optionTitle);
  };

  return (
    <section
      className={styles.createPlanSection}
      role="region"
      aria-label="Create Plan Steps Section"
    >
      <StepList />
      <Accordion>
        {steps.map(({ accordionLabel, optionCards }, index) => {
          const accordionItemId = `step-${index + 1}`;
          return (
            <AccordionItem
              key={accordionLabel}
              id={accordionItemId}
              label={accordionLabel}
              defaultOpen={index === 0}
            >
              <OptionCards
                options={optionCards}
                id={accordionItemId}
                setSelectedOption={handleSelectedOption}
              />
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default CreatePlanSection;
