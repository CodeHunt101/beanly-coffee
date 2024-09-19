import { SelectedOptions, Step } from "@/app/_utils/types";
import { multiplier, perShipmentWeightPrice, steps } from "../content";

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

export const numberToUSDCurrency = (number: number) => {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const calculatePrice = (
  selectedOptions: Partial<SelectedOptions>,
): string => {
  const size = selectedOptions[Step.Size];
  const deliveryFrequency = selectedOptions[Step.DeliveryFrequency];

  if (!(size && deliveryFrequency)) return "$0.00";

  const rawPrice =
    perShipmentWeightPrice[size][deliveryFrequency] *
    multiplier[deliveryFrequency];
  const price = numberToUSDCurrency(rawPrice);

  return price;
};
