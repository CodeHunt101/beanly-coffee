import { steps } from "./content";
import { shouldDisableAccordion, shouldOpenAccordion } from "./utils";

// Mock the steps array in the content module
jest.mock("./content", () => ({
  steps: ["Step 1", "Step 2", "Step 3", "Step 4"],
}));

describe("shouldOpenAccordion", () => {
  it("should return true for the first step (index 0)", () => {
    const selectedOptions = {};
    const result = shouldOpenAccordion(0, selectedOptions);
    expect(result).toBe(true);
  });

  it("should return true if the previous step is completed", () => {
    const selectedOptions = { "step-1": "Option 1" };
    const result = shouldOpenAccordion(1, selectedOptions);
    expect(result).toBe(true);
  });

  it("should return false if the previous step is not completed", () => {
    const selectedOptions = { "step-1": "Option 3", "step-2": "Option 1" };
    const result = shouldOpenAccordion(3, selectedOptions);
    expect(result).toBe(false);
  });

  it("should return true for the last step if 'Capsule' is selected and the second previous step is completed", () => {
    const selectedOptions = { "step-1": "Capsule", "step-2": "Option 1" };
    const result = shouldOpenAccordion(steps.length - 1, selectedOptions);
    expect(result).toBe(true);
  });

  it("should return false for the last step if 'Capsule' is selected but the second previous step is not completed", () => {
    const selectedOptions = { "step-1": "Capsule" };
    const result = shouldOpenAccordion(steps.length - 1, selectedOptions);
    expect(result).toBe(false);
  });

  it("should return true for the last step if 'Capsule' is not selected and the previous step is completed", () => {
    const selectedOptions = { [`step-${steps.length - 1}`]: "Option 1" };
    const result = shouldOpenAccordion(steps.length - 1, selectedOptions);
    expect(result).toBe(true);
  });

  it("should return false for the last step if 'Capsule' is not selected and the previous step is not completed", () => {
    const selectedOptions = {};
    const result = shouldOpenAccordion(steps.length - 1, selectedOptions);
    expect(result).toBe(false);
  });

  it("should return false if no step is completed", () => {
    const selectedOptions = {};
    const result = shouldOpenAccordion(2, selectedOptions);
    expect(result).toBe(false);
  });
});

describe("shouldDisableAccordion", () => {
  it('should return true when index is 3 and step-1 is "Capsule"', () => {
    const index = 3;
    const selectedOptions = { "step-1": "Capsule" };

    expect(shouldDisableAccordion(index, selectedOptions)).toBe(true);
  });

  it('should return false when index is not 3 but step-1 is "Capsule"', () => {
    const index = 2;
    const selectedOptions = { "step-1": "Capsule" };

    expect(shouldDisableAccordion(index, selectedOptions)).toBe(false);
  });

  it('should return false when index is 3 but step-1 is not "Capsule"', () => {
    const index = 3;
    const selectedOptions = { "step-1": "Orbital" };

    expect(shouldDisableAccordion(index, selectedOptions)).toBe(false);
  });

  it('should return false when index is not 3 and step-1 is not "Capsule"', () => {
    const index = 1;
    const selectedOptions = { "step-1": "Orbital" };

    expect(shouldDisableAccordion(index, selectedOptions)).toBe(false);
  });

  it('should return false when selectedOptions does not contain "step-1"', () => {
    const index = 3;
    const selectedOptions = { "step-2": "Capsule" };

    expect(shouldDisableAccordion(index, selectedOptions)).toBe(false);
  });
});
