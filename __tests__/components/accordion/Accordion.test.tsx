import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "@/components/accordion/Accordion";

describe("Accordion component", () => {
  const mockChildren = <div>Accordion Content</div>;

  describe("Rendering", () => {
    it("renders the Accordion component", () => {
      render(<Accordion>{mockChildren}</Accordion>);
      const accordionElement = screen
        .getByText("Accordion Content")
        .closest("div");
      expect(accordionElement).toBeInTheDocument();
    });

    it("renders children inside the Accordion", () => {
      render(<Accordion>{mockChildren}</Accordion>);
      const childElement = screen.getByText("Accordion Content");
      expect(childElement).toBeInTheDocument();
    });
  });
});
