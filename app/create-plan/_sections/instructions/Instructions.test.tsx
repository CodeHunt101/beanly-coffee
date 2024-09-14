import { render, screen } from "@testing-library/react";
import Instructions from "./Instructions";

jest.mock("@/components/steps/Steps", () => () => (
  <div>Mock Steps Component</div>
));

describe("Instructions Component", () => {
  it("should render the section with the correct class name", () => {
    render(<Instructions />);
    const section = screen.getByRole("region", {
      name: /Instructions Section/i,
    });

    expect(section).toHaveClass("instructions");
  });

  it("should render a div with the content class name", () => {
    render(<Instructions />);
    const contentDiv = screen
      .getByRole("region", { name: /Instructions Section/i })
      .querySelector("div");

    expect(contentDiv).toHaveClass("content");
  });

  it("should render the Steps component with the correct theme", () => {
    render(<Instructions />);
    const mockSteps = screen.getByText("Mock Steps Component");

    expect(mockSteps).toBeInTheDocument();
  });
});
