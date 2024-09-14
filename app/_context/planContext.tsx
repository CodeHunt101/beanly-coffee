import { createContext, useState, ReactNode } from "react";

export type PlanContextType = {
  selectedOptions: { [key: string]: string };
  setSelectedOption: (step: string, option: string) => void;
};

export const PlanContext = createContext<PlanContextType>({
  selectedOptions: {},
  setSelectedOption: () => null,
});

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const setSelectedOption = (step: string, option: string) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [step]: option }));
  };

  return (
    <PlanContext.Provider value={{ selectedOptions, setSelectedOption }}>
      {children}
    </PlanContext.Provider>
  );
};
