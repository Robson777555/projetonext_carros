import { render, screen } from "@testing-library/react";
import Home from "./page";
import { describe, expect, it, vi } from "vitest";

// Mock dos componentes usados em Home
vi.mock("@/components/Header", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-header">Header</div>,
}));

vi.mock("@/components/CarSlider", () => ({
  __esModule: true,
  default: () => <div data-testid="mock-car-slider">CarSlider</div>,
}));

describe("Home page", () => {
  it(" Should render Header and CarSlider", () => {
    render(<Home />);

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-car-slider")).toBeInTheDocument();
  });
});

