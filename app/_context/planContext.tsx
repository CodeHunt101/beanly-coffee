import { createContext, useState, ReactNode } from "react";
import {
  Option,
  PlanContextType,
  SelectedOptions,
  Step,
} from "../_utils/types";

export const PlanContext = createContext<PlanContextType>({
  selectedOptions: {
    [Step.BrewMethod]: null,
    [Step.BeanType]: null,
    [Step.Size]: null,
    [Step.GrindOption]: null,
    [Step.DeliveryFrequency]: null,
  },
  setSelectedOption: () => null,
});

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    [Step.BrewMethod]: null,
    [Step.BeanType]: null,
    [Step.Size]: null,
    [Step.GrindOption]: null,
    [Step.DeliveryFrequency]: null,
  });

  const setSelectedOption = (step: Step, option: Option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [step]: option }));
  };

  return (
    <PlanContext.Provider value={{ selectedOptions, setSelectedOption }}>
      {children}
    </PlanContext.Provider>
  );
};
