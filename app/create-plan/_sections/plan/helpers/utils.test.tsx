import { SelectedOptions, Step } from "@/app/_utils/types";
import { shouldDisableAccordion, shouldOpenAccordion } from "./utils";

describe("shouldOpenAccordion", () => {
  const mockSelectedOptions: Partial<SelectedOptions> = {
    [Step.BrewMethod]: "Filter",
    [Step.BeanType]: "Single Origin",
    [Step.Size]: "250g",
  };

  it("should always open the first step", () => {
    expect(shouldOpenAccordion(0, {})).toBe(true);
  });

  it("should open the second step if the first step is completed", () => {
    expect(shouldOpenAccordion(1, { [Step.BrewMethod]: "Filter" })).toBe(true);
  });

  it("should not open the second step if the first step is not completed", () => {
    expect(shouldOpenAccordion(1, {})).toBe(false);
  });

  it("should open the third step if the second step is completed", () => {
    expect(shouldOpenAccordion(2, mockSelectedOptions)).toBe(true);
  });

  it("should not open the third step if the second step is not completed", () => {
    expect(shouldOpenAccordion(2, { [Step.BrewMethod]: "Filter" })).toBe(false);
  });

  it("should open the last step if the previous step is completed and brew method is not Capsule", () => {
    expect(
      shouldOpenAccordion(4, {
        ...mockSelectedOptions,
        [Step.GrindOption]: "Wholebean",
      }),
    ).toBe(true);
  });

  it("should open the last step if the second previous step is completed and brew method is Capsule", () => {
    const capsuleOptions: Partial<SelectedOptions> = {
      [Step.BrewMethod]: "Capsule",
      [Step.BeanType]: "Single Origin",
      [Step.Size]: "250g",
    };
    expect(shouldOpenAccordion(4, capsuleOptions)).toBe(true);
  });

  it("should not open the last step if the second previous step is not completed and brew method is Capsule", () => {
    const capsuleOptions: Partial<SelectedOptions> = {
      [Step.BrewMethod]: "Capsule",
      [Step.BeanType]: "Single Origin",
    };
    expect(shouldOpenAccordion(4, capsuleOptions)).toBe(false);
  });
});

describe("shouldDisableAccordion", () => {
  it("should disable the fourth step if brew method is Capsule", () => {
    expect(shouldDisableAccordion(3, { [Step.BrewMethod]: "Capsule" })).toBe(
      true,
    );
  });

  it("should not disable the fourth step if brew method is not Capsule", () => {
    expect(shouldDisableAccordion(3, { [Step.BrewMethod]: "Filter" })).toBe(
      false,
    );
  });

  it("should not disable other steps regardless of brew method", () => {
    expect(shouldDisableAccordion(0, { [Step.BrewMethod]: "Capsule" })).toBe(
      false,
    );
    expect(shouldDisableAccordion(1, { [Step.BrewMethod]: "Capsule" })).toBe(
      false,
    );
    expect(shouldDisableAccordion(2, { [Step.BrewMethod]: "Capsule" })).toBe(
      false,
    );
    expect(shouldDisableAccordion(4, { [Step.BrewMethod]: "Capsule" })).toBe(
      false,
    );
  });
});
