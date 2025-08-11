import { carData } from "@/app/data/cars";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CarDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const carId = parseInt(awaitedParams.id);
  const car = carData.find((car) => car.id === carId);

  if (!car) notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 md:px-8 lg:px-12">
      <h1 className="text-white font-extrabold text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-none tracking-[2px] text-center">
        {car.title}
      </h1>

      <div className="w-full flex justify-center my-10">
        <div className="relative w-[851px] h-[315px] mx-auto">
          <Image
            src={car.image}
            alt={car.title}
            className="-rotate-12 drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            sizes="851px"
          />
        </div>
      </div>

      <p
        className="text-[#e0e0e0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug max-w-[90%] md:max-w-3xl lg:max-w-4xl mt-6 mb-6 text-center"
        data-testid="car-details"
      >
        {car.details}
      </p>
      <br />

      <Link
        href="/"
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
          "flex items-center justify-center"
        )}
      >
        Voltar
      </Link>
    </main>
  );
}

export async function generateStaticParams() {
  return carData.map((car) => ({
    id: car.id.toString(),
  }));
}
