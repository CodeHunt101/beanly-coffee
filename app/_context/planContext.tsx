import { createContext, useState, ReactNode, useMemo } from "react";
import {
  Option,
  PlanContextType,
  Step,
  SelectedOptions,
} from "../_utils/types";

export const PlanContext = createContext<PlanContextType>({
  selectedOptions: {},
  setSelectedOption: () => null,
});

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Partial<SelectedOptions>
  >({});

  const setSelectedOption = (step: Step, option: Option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [step]: option }));
  };

  // Memoizing the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({ selectedOptions, setSelectedOption }),
    [selectedOptions],
  );

  return (
    <PlanContext.Provider value={contextValue}>{children}</PlanContext.Provider>
  );
};
