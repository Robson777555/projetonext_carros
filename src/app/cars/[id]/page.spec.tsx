import { render, screen } from "@testing-library/react";
import CarDetails, { generateStaticParams } from "./page";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { carData } from "@/app/data/cars";
import { notFound } from "next/navigation";

// Mock for next/navigation
vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
}));

// Mock for next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...rest } = props;
    return <img {...rest} alt={props.alt || "mocked image"} />;
  },
}));

describe("CarDetails Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders car details correctly", async () => {
    const car = carData[0];

    render(
      await CarDetails({
        params: Promise.resolve({ id: String(car.id) }),
      })
    );

    expect(screen.getByText(car.title)).toBeInTheDocument();
    expect(screen.getByAltText(car.title)).toBeInTheDocument();
    expect(screen.getByTestId("car-details")).toHaveTextContent(car.details);

    const backLink = screen.getByRole("link", { name: /voltar/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("calls notFound when car is not found", async () => {
    const invalidId = "999"; // An ID that doesn't exist in carData

    await expect(
      CarDetails({
        params: Promise.resolve({ id: invalidId }),
      })
    ).rejects.toThrow(); // notFound throws an error in test environment
    expect(notFound).toHaveBeenCalled();
  });
});

describe("generateStaticParams Function", () => {
  it("generates static params for all cars", async () => {
    const params = await generateStaticParams();
    expect(params).toEqual(
      carData.map((car) => ({
        id: car.id.toString(),
      }))
    );
    expect(params.length).toBe(carData.length);
  });
});