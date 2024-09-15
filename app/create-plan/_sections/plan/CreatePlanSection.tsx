import Accordion from "@/components/accordion/Accordion";
import AccordionItem from "@/components/accordion/AccordionItem";
import styles from "./CreatePlanSection.module.scss";
import OptionCards from "@/components/optionCards/OptionCards";
import CreatePlanStepList from "./CreatePlanStepsList";
import { useContext, useMemo } from "react";
import { steps } from "./content";
import { shouldDisableAccordion, shouldOpenAccordion } from "./utils";
import { Option, PlanContextType, Step } from "@/app/_utils/types";
import { PlanContext } from "@/app/_context/planContext";
import OrderSummary from "./OrderSummary";

const CreatePlanSection = () => {
  const { selectedOptions, setSelectedOption } =
    useContext<PlanContextType>(PlanContext);

  const handleSelectedOption = useMemo(
    () => (stepId: string, optionTitle: string | undefined) => {
      setSelectedOption(stepId as Step, optionTitle as Option);
    },
    [setSelectedOption],
  );

  return (
    <section
      className={styles.createPlanSection}
      role="region"
      aria-label="Create Plan Steps Section"
    >
      <CreatePlanStepList />
      <div className={styles.createPlanContent}>
        <Accordion>
          {steps.map(({ accordionLabel, optionCards }, index) => {
            const accordionItemId = `step-${index + 1}`;
            return (
              <AccordionItem
                key={accordionLabel}
                id={accordionItemId}
                label={accordionLabel}
                defaultOpen={shouldOpenAccordion(index, selectedOptions)}
                disabled={shouldDisableAccordion(index, selectedOptions)}
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
        <OrderSummary />
      </div>
    </section>
  );
};

export default CreatePlanSection;
