import { steps } from "./content";

// Utility functions to handle accordion open and disable state
export const shouldOpenAccordion = (
  index: number,
  selectedOptions: Record<string, string>,
) => {
  const isFirstStep = index === 0;
  const isPreviousStepCompleted = !!selectedOptions[`step-${index}`];
  const isCapsuleCoffeeTypeSelected = selectedOptions["step-1"] === "Capsule";
  const isLastStep = index === steps.length - 1;
  const isSecondPreviousStepCompleted = !!selectedOptions[`step-${index - 1}`];

  if (isFirstStep) return true;
  if (isLastStep && isCapsuleCoffeeTypeSelected) {
    return isSecondPreviousStepCompleted;
  }
  return isPreviousStepCompleted;
};

export const shouldDisableAccordion = (
  index: number,
  selectedOptions: Record<string, string>,
) => {
  return index === 3 && selectedOptions["step-1"] === "Capsule";
};
