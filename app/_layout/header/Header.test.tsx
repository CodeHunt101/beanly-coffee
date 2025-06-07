import { render, screen, waitFor, act } from "@testing-library/react";
import Header from "./Header";
import React from "react";

// Mock the Logo and NavBar components
let resolveNavBar: () => void;
let navBarPromise: Promise<{ default: React.FC }>;
let isResolved = false;

jest.mock("@/components/navbar/NavBar", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: () => {
      if (!isResolved) {
        throw navBarPromise;
      }
      return <nav data-testid="navbar" />;
    },
  };
});

beforeEach(() => {
  isResolved = false;
  navBarPromise = new Promise<{ default: React.FC }>((resolve) => {
    resolveNavBar = () => {
      isResolved = true;
      resolve({ default: () => <nav data-testid="navbar" /> });
    };
  });
});
jest.mock("@/components/logo/Logo", () => () => <div data-testid="logo" />);

describe("Header Component", () => {
  describe("Logo", () => {
    it("should render the Logo component", () => {
      render(<Header />);
      const logo = screen.getByTestId("logo");
      expect(logo).toBeInTheDocument();
    });
  });

  describe("NavBar", () => {
    it("should render the NavBar component inside Suspense", async () => {
      render(<Header />);

      await act(async () => {
        resolveNavBar();
      });

      const navbar = await screen.findByTestId("navbar");
      expect(navbar).toBeInTheDocument();
    });

    it("should show fallback content while NavBar is loading", async () => {
      render(<Header />);

      await waitFor(() => {
        const fallback = screen.getByText("Loading navigation...");
        expect(fallback).toBeInTheDocument();
      });

      await act(async () => {
        resolveNavBar();
      });

      const navbar = await screen.findByTestId("navbar");
      expect(navbar).toBeInTheDocument();
    });
  });
});
