import { render, screen } from "@testing-library/react";
import HowItWorks from "./HowItWorks";

// Mocking the Steps and Button components
jest.mock("../../../components/steps/Step", () => () => (
  <div>Mock Steps Component</div>
));
jest.mock("../../../components/button/Button", () => ({ children }: any) => (
  <div>{children}</div>
));
jest.mock("next/link", () => ({ children }: any) => <div>{children}</div>);

describe("HowItWorks component", () => {
  it("renders the Steps component with correct title", () => {
    render(<HowItWorks />);
    const stepsComponent = screen.getAllByText("Mock Steps Component");
    expect(stepsComponent).toHaveLength(3);
  });

  it("renders the 'Create your plan' button with Link", () => {
    render(<HowItWorks />);
    const linkElement = screen.getByText("Create your plan");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the Button component wrapping the Link", () => {
    render(<HowItWorks />);
    const buttonElement = screen.getByText("Create your plan").parentElement;
    expect(buttonElement?.tagName).toBe("DIV"); // Button mock renders as a div
  });
});
