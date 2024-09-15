import { Option, SelectedOptions, Step } from "@/app/_utils/types";
import { steps } from "./content";

// Utility functions to handle accordion open and disable state
export const shouldOpenAccordion = (
  index: number,
  selectedOptions: Partial<SelectedOptions>,
) => {
  const isFirstStep = index === 0;
  const prevStep = `step-${index}` as Step;
  const secondPrevStep = `step-${index - 1}` as Step;
  const isPreviousStepCompleted = !!selectedOptions[prevStep];
  const isCapsuleCoffeeTypeSelected =
    selectedOptions[Step.BrewMethod] === "Capsule";
  const isLastStep = index === steps.length - 1;
  const isSecondPreviousStepCompleted = !!selectedOptions[secondPrevStep];

  if (isFirstStep) return true;
  if (isLastStep && isCapsuleCoffeeTypeSelected) {
    return isSecondPreviousStepCompleted;
  }
  return isPreviousStepCompleted;
};

export const shouldDisableAccordion = (
  index: number,
  selectedOptions: Partial<SelectedOptions>,
) => {
  return index === 3 && selectedOptions[Step.BrewMethod] === "Capsule";
};
