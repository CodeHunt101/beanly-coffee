import { SelectedOptions, Step } from "@/app/_utils/types";
import {
  calculatePrice,
  numberToUSDCurrency,
  shouldDisableAccordion,
  shouldOpenAccordion,
} from "./utils";

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

describe("numberToUSDCurrency", () => {
  describe("Positive numbers", () => {
    it("should format 1000 as $1,000.00", () => {
      expect(numberToUSDCurrency(1000)).toBe("$1,000.00");
    });

    it("should format 1234.56 as $1,234.56", () => {
      expect(numberToUSDCurrency(1234.56)).toBe("$1,234.56");
    });
  });

  describe("Negative numbers", () => {
    it("should format -500 as -$500.00", () => {
      expect(numberToUSDCurrency(-500)).toBe("-$500.00");
    });

    it("should format -1234.56 as -$1,234.56", () => {
      expect(numberToUSDCurrency(-1234.56)).toBe("-$1,234.56");
    });
  });

  describe("Zero", () => {
    it("should format 0 as $0.00", () => {
      expect(numberToUSDCurrency(0)).toBe("$0.00");
    });
  });

  describe("Large numbers", () => {
    it("should format 1000000000 as $1,000,000,000.00", () => {
      expect(numberToUSDCurrency(1000000000)).toBe("$1,000,000,000.00");
    });
  });

  describe("Small decimal numbers", () => {
    it("should format 0.001 as $0.00", () => {
      expect(numberToUSDCurrency(0.001)).toBe("$0.00");
    });

    it("should format 0.01 as $0.01", () => {
      expect(numberToUSDCurrency(0.01)).toBe("$0.01");
    });
  });
});

describe("calculatePrice", () => {
  jest.mock("./utils", () => ({
    numberToUSDCurrency: jest.fn((number) => `$${number.toFixed(2)}`),
  }));

  describe("when size or delivery frequency is missing", () => {
    it("should return $0.00 when no options are provided", () => {
      expect(calculatePrice({})).toBe("$0.00");
    });

    it("should return $0.00 when only size is provided", () => {
      expect(calculatePrice({ [Step.Size]: "250g" })).toBe("$0.00");
    });

    it("should return $0.00 when only delivery frequency is provided", () => {
      expect(calculatePrice({ [Step.DeliveryFrequency]: "Every week" })).toBe(
        "$0.00",
      );
    });
  });

  describe("when size is 250g", () => {
    it("should return $28.80 for Every week", () => {
      expect(
        calculatePrice({
          [Step.Size]: "250g",
          [Step.DeliveryFrequency]: "Every week",
        }),
      ).toBe("$28.80");
    });

    it("should return $19.20 for Every 2 weeks", () => {
      expect(
        calculatePrice({
          [Step.Size]: "250g",
          [Step.DeliveryFrequency]: "Every 2 weeks",
        }),
      ).toBe("$19.20");
    });

    it("should return $12.00 for Every month", () => {
      expect(
        calculatePrice({
          [Step.Size]: "250g",
          [Step.DeliveryFrequency]: "Every month",
        }),
      ).toBe("$12.00");
    });
  });

  describe("when size is 500g", () => {
    it("should return $52.00 for Every week", () => {
      expect(
        calculatePrice({
          [Step.Size]: "500g",
          [Step.DeliveryFrequency]: "Every week",
        }),
      ).toBe("$52.00");
    });

    it("should return $35.00 for Every 2 weeks", () => {
      expect(
        calculatePrice({
          [Step.Size]: "500g",
          [Step.DeliveryFrequency]: "Every 2 weeks",
        }),
      ).toBe("$35.00");
    });

    it("should return $22.00 for Every month", () => {
      expect(
        calculatePrice({
          [Step.Size]: "500g",
          [Step.DeliveryFrequency]: "Every month",
        }),
      ).toBe("$22.00");
    });
  });

  describe("when size is 1000g", () => {
    it("should return $88.00 for Every week", () => {
      expect(
        calculatePrice({
          [Step.Size]: "1000g",
          [Step.DeliveryFrequency]: "Every week",
        }),
      ).toBe("$88.00");
    });

    it("should return $64.00 for Every 2 weeks", () => {
      expect(
        calculatePrice({
          [Step.Size]: "1000g",
          [Step.DeliveryFrequency]: "Every 2 weeks",
        }),
      ).toBe("$64.00");
    });

    it("should return $42.00 for Every month", () => {
      expect(
        calculatePrice({
          [Step.Size]: "1000g",
          [Step.DeliveryFrequency]: "Every month",
        }),
      ).toBe("$42.00");
    });
  });

  describe("when other options are provided", () => {
    it("should ignore other selected options and return the correct price", () => {
      const selectedOptions: Partial<SelectedOptions> = {
        [Step.BrewMethod]: "Capsule",
        [Step.BeanType]: "Single Origin",
        [Step.Size]: "500g",
        [Step.GrindOption]: "Wholebean",
        [Step.DeliveryFrequency]: "Every 2 weeks",
      };
      expect(calculatePrice(selectedOptions)).toBe("$35.00");
    });
  });
});
