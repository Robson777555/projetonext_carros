import { describe, it, expect } from 'vitest';
import { carData } from './cars';

describe("carData", () => {
  it("should be an array", () => {
    expect(Array.isArray(carData)).toBe(true);
  });

  it("should contain at least one car object", () => {
    expect(carData.length).toBeGreaterThan(0);
  });

  it("should have correct structure for each car object", () => {
    carData.forEach((car) => {
      expect(car).toHaveProperty("id");
      expect(typeof car.id).toBe("number");

      expect(car).toHaveProperty("title");
      expect(typeof car.title).toBe("string");

      expect(car).toHaveProperty("description");
      expect(typeof car.description).toBe("string");

      expect(car).toHaveProperty("image");
      expect(typeof car.image).toBe("string");

      expect(car).toHaveProperty("details");
      expect(typeof car.details).toBe("string");
    });
  });

  it("should have unique IDs for each car object", () => {
    const ids = carData.map((car) => car.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });
});

