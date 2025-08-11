import { render, screen } from "@testing-library/react";
import CarsPage from "./page";
import { describe, it, expect } from "vitest";
import { carData } from "../data/cars";

describe("Cars Page", () => {
  it("should render the main heading for cars page", () => {
    render(<CarsPage />);
    expect(
      screen.getByRole("heading", { name: /Nossos Carros/i })
    ).toBeInTheDocument();
  });

  it("should render all car cards from the data", () => {
    render(<CarsPage />);

    // Verifica se há um card para cada carro nos dados
    const carCards = screen.getAllByRole("heading", { level: 2 });
    expect(carCards.length).toBe(carData.length);

    // Verifica se os títulos dos carros estão presentes
    carData.forEach((car) => {
      expect(screen.getByText(car.title)).toBeInTheDocument();
    });
  });

  it("each car card should have an image, description and 'Ver mais' button", () => {
    render(<CarsPage />);

    carData.forEach((car) => {
      const card = screen.getByText(car.title).closest("div");

      // Verifica descrição
      expect(card).toHaveTextContent(car.description);
    });
  });
});
