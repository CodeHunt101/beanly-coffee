import { render, screen } from "@testing-library/react";
import Steps from "@/components/steps/Steps";

// Mock the Step component
jest.mock("@/components/steps/Step", () => () => <div>Mock Step</div>);

describe("Steps component", () => {
  it("renders without crashing", () => {
    render(<Steps />);
    const stepsWrapper = screen.getByRole("list");
    expect(stepsWrapper).toBeInTheDocument();
  });

  it("renders the title when the title prop is provided", () => {
    const title = "How to enjoy coffee";
    render(<Steps title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("does not render the title when the title prop is not provided", () => {
    render(<Steps />);
    const titleElement = screen.queryByText(/ff-serif/); // checking for the class since there is no text
    expect(titleElement).not.toBeInTheDocument();
  });

  describe("theme", () => {
    it("applies the 'light' theme class when theme is 'light'", () => {
      render(<Steps theme="light" />);
      const stepsWrapper = screen.getByRole("list").parentElement;
      expect(stepsWrapper).toHaveClass("light");
    });

    it("applies the 'dark' theme class when theme is 'dark'", () => {
      render(<Steps theme="dark" />);
      const stepsWrapper = screen.getByRole("list").parentElement;
      expect(stepsWrapper).toHaveClass("dark");
    });
  });

  it("renders all steps from stepsData", () => {
    render(<Steps />);
    const steps = screen.getAllByText("Mock Step");
    expect(steps.length).toBe(3);
  });
});
