"use client";

import { useState, useEffect } from "react";
import CarSlide from "./CarSlide";
import Arrows from "./Arrows";
import Indicators from "./Indicators";
import { carData } from "@/app/data/cars";


const CarSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === carData.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? carData.length - 1 : prev - 1));
  const goToSlide = (index: number) => setActiveIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="bg-gradient-radial from-primary to-secondary min-h-screen flex items-center justify-center pt-[100px] pb-5 px-5">
      <div className="w-full max-w-[1400px] relative">
        <div className="w-full h-full relative">
          {carData.map((car, index) => (
            <CarSlide key={car.id} car={car} isActive={index === activeIndex} />
          ))}
          <Arrows onPrev={prevSlide} onNext={nextSlide} />
          <Indicators
            count={carData.length}
            activeIndex={activeIndex}
            onDotClick={goToSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default CarSlider;