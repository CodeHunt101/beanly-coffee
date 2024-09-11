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
