import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccordionItem from "@/components/accordion/AccordionItem";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("AccordionItem", () => {
  const mockId = "accordion-item-id";
  const mockLabel = "Test Accordion";
  const mockChildren = <div>Test Content</div>;

  describe("Rendering", () => {
    it("renders the label correctly", () => {
      const { getByText } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      expect(getByText(mockLabel)).toBeInTheDocument();
    });

    it("renders the id correctly", () => {
      const { getByRole } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      expect(getByRole("button").parentElement).toHaveAttribute("id", mockId);
    });

    it("renders the children content", () => {
      const { getByText } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      expect(getByText("Test Content")).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("starts with the accordion closed", () => {
      const { getByRole } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      expect(getByRole("button")).not.toHaveClass("open");
    });

    it("opens the accordion when clicked", () => {
      const { getByRole } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      fireEvent.click(getByRole("button"));
      waitFor(() => {
        expect(getByRole("button")).toHaveClass("open");
      });
    });

    it("closes the accordion when clicked again", () => {
      const { getByRole } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      const button = getByRole("button");
      fireEvent.click(button);
      fireEvent.click(button);

      waitFor(() => {
        expect(button).not.toHaveClass("open");
      });
    });

    it("sets maxHeight to 0px when closed", () => {
      const { getByTestId } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      expect(getByTestId("accordion-content")).toHaveStyle("maxHeight: 0px");
    });
  });

  describe("Dynamic height calculation", () => {
    beforeEach(() => {
      Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
        configurable: true,
        value: 100,
      });
    });

    it("updates maxHeight when opened", () => {
      const { getByRole, getByTestId } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      fireEvent.click(getByRole("button"));
      expect(getByTestId("accordion-content")).toHaveStyle("maxHeight: 100px");
    });

    it("resets maxHeight to 0px when closed", () => {
      const { getByRole, getByTestId } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          {mockChildren}
        </AccordionItem>,
      );
      const button = getByRole("button");
      fireEvent.click(button);
      fireEvent.click(button);
      expect(getByTestId("accordion-content")).toHaveStyle("maxHeight: 0px");
    });
  });

  describe("useEffect behavior", () => {
    it("updates maxHeight when content changes while open", async () => {
      const { getByRole, getByTestId, rerender } = render(
        <AccordionItem id={mockId} label={mockLabel}>
          <div style={{ height: "50px" }}>Initial Content</div>
        </AccordionItem>,
      );

      // Open the accordion
      fireEvent.click(getByRole("button"));

      // Change the content
      rerender(
        <AccordionItem id={mockId} label={mockLabel}>
          <div style={{ height: "100px" }}>New Content</div>
        </AccordionItem>,
      );

      // Wait for useEffect to run
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      expect(getByTestId("accordion-content")).toHaveStyle("maxHeight: 100px");
    });
  });
});
