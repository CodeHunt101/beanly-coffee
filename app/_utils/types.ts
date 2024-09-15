export enum Path {
  HOME = "/",
  ABOUT = "/about",
  CREATE_PLAN = "/create-plan",
  NOT_READY = "#",
}

export enum BreakPoints {
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1440,
}

export type Styles = {
  readonly [key: string]: string;
};

type BrewMethod = "Capsule" | "Filter" | "Espresso" | null;
type BeanType = "Single Origin" | "Decaf" | "Blended" | null;
type Size = "250g" | "500g" | "1000g" | null;
type GrindOption = "Wholebean" | "Filter" | "Cafetiére" | null;
type DeliveryFrequency = "Every week" | "Every 2 weeks" | "Every month" | null;

export type Option =
  | BrewMethod
  | BeanType
  | Size
  | GrindOption
  | DeliveryFrequency;

export enum Step {
  BrewMethod = "step-1",
  BeanType = "step-2",
  Size = "step-3",
  GrindOption = "step-4",
  DeliveryFrequency = "step-5",
}

export type SelectedOptions = {
  [Step.BrewMethod]: BrewMethod;
  [Step.BeanType]: BeanType;
  [Step.Size]: Size;
  [Step.GrindOption]: GrindOption;
  [Step.DeliveryFrequency]: DeliveryFrequency;
};

export type PlanContextType = {
  selectedOptions: Partial<SelectedOptions>;
  setSelectedOption: (step: Step, option: Option) => void;
};
