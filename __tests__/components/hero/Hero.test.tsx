import { render, screen } from "@testing-library/react";
import Hero from "@/components/hero/Hero";

jest.mock("@/components/buttons/ButtonLink", () => ({ children }: any) => (
  <a href="hrefLink">{children}</a>
));

describe("Hero Component", () => {
  const baseProps = {
    title: "Test Title",
    description: "Test Description",
    styles: {
      content: "content-class",
      title: "title-class",
      description: "description-class",
    },
  };

  describe("When linkButton is false", () => {
    it("should render the title with the correct text", () => {
      render(<Hero {...baseProps} linkButton={false} />);
      const titleElement = screen.getByText("Test Title");
      expect(titleElement).toBeInTheDocument();
    });

    it("should render the description with the correct text", () => {
      render(<Hero {...baseProps} linkButton={false} />);
      const descriptionElement = screen.getByText("Test Description");
      expect(descriptionElement).toBeInTheDocument();
    });

    it("should not render the ButtonLink component", () => {
      render(<Hero {...baseProps} linkButton={false} />);
      const buttonElement = screen.queryByRole("button");
      expect(buttonElement).not.toBeInTheDocument();
    });

    it("should apply the correct content style class", () => {
      render(<Hero {...baseProps} linkButton={false} />);
      const contentDiv = screen.getByText("Test Title").parentElement;
      expect(contentDiv).toHaveClass("content-class");
    });
  });

  describe("When linkButton is true", () => {
    const propsWithLink = {
      ...baseProps,
      linkButton: true,
      linkButtonContent: "Click Me",
    };

    it("renders the Button component with correct text", () => {
      render(<Hero {...propsWithLink} />);
      const button = screen.getByRole("link", { name: /Click Me/i });
      expect(button).toBeInTheDocument();
    });

    it(`contains a link to the desired page`, () => {
      render(<Hero {...propsWithLink} />);
      const link = screen.getByRole("link", { name: /Click Me/i });
      expect(link).toHaveAttribute("href", "hrefLink");
    });

    it("should apply the correct title style class", () => {
      render(<Hero {...propsWithLink} />);
      const titleElement = screen.getByText("Test Title");
      expect(titleElement).toHaveClass("title-class");
    });

    it("should apply the correct description style class", () => {
      render(<Hero {...propsWithLink} />);
      const descriptionElement = screen.getByText("Test Description");
      expect(descriptionElement).toHaveClass("description-class");
    });
  });
});
