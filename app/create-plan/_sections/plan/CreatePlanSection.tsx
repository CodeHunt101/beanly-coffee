import Accordion from "@/components/accordion/Accordion";
import AccordionItem from "@/components/accordion/AccordionItem";
import styles from "./CreatePlanSection.module.scss";
import OptionCards from "@/components/optionCards/OptionCards";
import CreatePlanStepList from "./CreatePlanStepsList";
import { PlanContext, PlanContextType } from "@/app/_context/planContext";
import { useContext } from "react";
import { steps } from "./content";

const CreatePlanSection = () => {
  const { selectedOptions, setSelectedOption } =
    useContext<PlanContextType>(PlanContext);

  const handleSelectedOption = (stepId: string, optionTitle: string) => {
    setSelectedOption(stepId, optionTitle);
  };

  return (
    <section
      className={styles.createPlanSection}
      role="region"
      aria-label="Create Plan Steps Section"
    >
      <CreatePlanStepList />
      <Accordion>
        {steps.map(({ accordionLabel, optionCards }, index) => {
          const accordionItemId = `step-${index + 1}`;
          const isFirstStep = index === 0;
          const isPreviousStepOptionSelected =
            !!selectedOptions[`step-${index}`];
          const isCapsuleCoffeeTypeSelected =
            selectedOptions["step-1"] === "Capsule";
          const isSecondPreviousStepOptionSelected =
            !!selectedOptions[`step-${index - 1}`];
          return (
            <AccordionItem
              key={accordionLabel}
              id={accordionItemId}
              label={accordionLabel}
              defaultOpen={
                isFirstStep ||
                (!isFirstStep && isPreviousStepOptionSelected) ||
                (index === 4 &&
                  isSecondPreviousStepOptionSelected &&
                  isCapsuleCoffeeTypeSelected)
              }
              disabled={index === 3 && isCapsuleCoffeeTypeSelected}
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
