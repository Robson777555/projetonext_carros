import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CarSlider from ".";

// Mock dos componentes filhos
vi.mock("./CarSlide", () => ({
  default: ({ car, isActive }: { car: any; isActive: boolean }) => (
    <div
      data-testid="car-slide"
      data-car-id={car.id}
      data-is-active={isActive}
      className={isActive ? "active" : "inactive"}
    >
      {car.name}
    </div>
  ),
}));

vi.mock("./Arrows", () => ({
  default: ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
    <div data-testid="arrows">
      <button
        onClick={onPrev}
        data-testid="prev-button"
        aria-label="Previous slide"
      >
        Prev
      </button>
      <button
        onClick={onNext}
        data-testid="next-button"
        aria-label="Next slide"
      >
        Next
      </button>
    </div>
  ),
}));

vi.mock("./Indicators", () => ({
  default: ({
    count,
    activeIndex,
    onDotClick,
  }: {
    count: number;
    activeIndex: number;
    onDotClick: (index: number) => void;
  }) => (
    <div data-testid="indicators">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          data-testid={`indicator-${i}`}
          data-is-active={i === activeIndex}
          aria-label={`Go to slide ${i + 1}`}
        >
          {i}
        </button>
      ))}
    </div>
  ),
}));

// Mock dos dados dos carros
vi.mock("@/app/data/cars", () => ({
  carData: [
    { id: 1, name: "Car 1", image: "/img/car1.png", description: "Desc 1" },
    { id: 2, name: "Car 2", image: "/img/car2.png", description: "Desc 2" },
    { id: 3, name: "Car 3", image: "/img/car3.png", description: "Desc 3" },
  ],
}));

describe("CarSlider Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
    cleanup();
  });

  it("should render all car slides", () => {
    render(<CarSlider />);
    const slides = screen.getAllByTestId("car-slide");
    expect(slides.length).toBe(3);
  });

  it("should initially render the first slide as active", () => {
    render(<CarSlider />);
    const activeSlide = screen.getByText("Car 1");
    expect(activeSlide).toHaveAttribute("data-is-active", "true");
  });

  it("should render navigation arrows", () => {
    render(<CarSlider />);
    expect(screen.getByTestId("arrows")).toBeInTheDocument();
    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });

  it("should render indicators for each slide", () => {
    render(<CarSlider />);
    const indicators = screen.getByTestId("indicators");
    expect(indicators).toBeInTheDocument();
    expect(screen.getAllByTestId(/indicator-\d/).length).toBe(3);
  });

  it("should advance to the next slide when next button is clicked", () => {
    render(<CarSlider />);
    fireEvent.click(screen.getByLabelText("Next slide"));
    const activeSlide = screen.getByText("Car 2");
    expect(activeSlide).toHaveAttribute("data-is-active", "true");
  });

  it("should go to the previous slide when prev button is clicked", () => {
    render(<CarSlider />);
    // Go to second slide first
    fireEvent.click(screen.getByLabelText("Next slide"));
    // Then go back to first slide
    fireEvent.click(screen.getByLabelText("Previous slide"));
    const activeSlide = screen.getByText("Car 1");
    expect(activeSlide).toHaveAttribute("data-is-active", "true");
  });

  it("should loop to last slide when clicking prev on first slide", () => {
    render(<CarSlider />);
    fireEvent.click(screen.getByLabelText("Previous slide"));
    const activeSlide = screen.getByText("Car 3");
    expect(activeSlide).toHaveAttribute("data-is-active", "true");
  });

  it("should loop to first slide when clicking next on last slide", () => {
    render(<CarSlider />);
    // Go to last slide
    fireEvent.click(screen.getByLabelText("Next slide"));
    fireEvent.click(screen.getByLabelText("Next slide"));
    // Click next again to loop back
    fireEvent.click(screen.getByLabelText("Next slide"));
    const activeSlide = screen.getByText("Car 1");
    expect(activeSlide).toHaveAttribute("data-is-active", "true");
  });

  it("should go to a specific slide when an indicator is clicked", () => {
    render(<CarSlider />);
    fireEvent.click(screen.getByTestId("indicator-2")); // Third slide (index 2)
    const activeSlide = screen.getByText("Car 3");
    expect(activeSlide).toHaveAttribute("data-is-active", "true");
  });

  it("should clean up interval on unmount", () => {
    const clearIntervalSpy = vi.spyOn(global, "clearInterval");
    const { unmount } = render(<CarSlider />);

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();

    clearIntervalSpy.mockRestore();
  });
});
