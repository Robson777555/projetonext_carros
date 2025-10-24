import Image from "next/image";
import Link from "next/link";
import { carData } from "../data/cars";
import clsx from "clsx";

export default function Cars() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 md:px-8 lg:px-12 pt-[100px]">
      
      <h1 className="text-white font-extrabold text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-none tracking-[2px] text-center mb-10">
        Nossos Carros
      </h1>
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] w-full">
        {carData.map((car) => (
          <div
            key={car.id}
            className="flex flex-col items-center text-center bg-[#ffffff1a] rounded-lg p-6 hover:bg-[#ffffff33] transition-colors"
          >
            <div className="relative w-full h-[200px] mb-4">
              <Image
                src={car.image}
                alt={car.title}
                className="drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h2 className="text-white font-bold text-2xl md:text-3xl">
              {car.title}
            </h2>

            <br />

            <p className="text-[#e0e0e0] text-base md:text-lg mt-2">
              {car.description}
            </p>

            <br />

            <Link
              href={`/cars/${car.id}`}
              className={clsx(
                "mt-8",
                "bg-[#91ba28]",
                "hover:bg-[#791fd3]",
                "text-black",
                "hover:text-white",
                "transition-colors",
                "font-bold",
                "uppercase",
                "font-sans",
                "rounded-[30px]",
                "h-11",
                "w-full",
                "max-w-[150px]",
                "sm:max-w-[180px]",
                "md:max-w-[200px]",
                "text-base",
                "sm:text-lg",
                "md:text-xl",
                "px-6",
                "py-2",
                "shadow-lg",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-[#91ba28]",
                "focus:ring-offset-2",
                "mx-auto",
                "block",
                "text-center",
                "flex items-center justify-center",
                "cursor-pointer"
              )}
            >
              Ver mais
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
