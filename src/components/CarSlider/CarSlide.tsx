import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface CarSlideProps {
  car: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  isActive: boolean;
}

const CarSlide = ({ car, isActive }: CarSlideProps) => {
  if (!isActive) return null;

  return (
    // Contêiner principal: Ocupa a largura e altura total do pai.
    // Usamos flexbox para centralizar o conteúdo vertical e horizontalmente.
    // O padding horizontal (px) aumenta em telas maiores para um melhor respiro.
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 py-6 md:px-8 lg:px-12">
      {/* Título do carro: Extremamente grande em telas maiores, compacto nas linhas. */}
      {/* As classes personalizadas \'text-[Xrem]\'' dão controle preciso sobre o tamanho. */}
      {/* \'leading-none\' garante que não haja espaçamento extra entre linhas para títulos de uma linha. */}
      <h2 className="text-white font-extrabold \n                     text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] \n                     leading-none tracking-[2px]">
        {car.title}
      </h2>
      <br />
      {/* Descrição do carro: Tamanho de fonte responsivo e largura máxima para legibilidade. */}
      {/* \'leading-snug\' mantém o espaçamento entre linhas mais justo. */}
      {/* \'max-w-[90%]\' para ocupar bastante espaço em telas pequenas, e \'md:max-w-3xl lg:max-w-4xl\' para limitar em telas muito largas. */}
      <p className="text-[#e0e0e0] text-lg sm:text-xl md:text-2xl lg:text-3xl \n                    leading-snug max-w-[90%] md:max-w-3xl lg:max-w-4xl \n                    mt-6 mb-6">
        {car.description}
      </p>
      <br />

      {/* Contêiner da imagem: Essencial para o posicionamento e responsividade da imagem. */}
      {/* 'relative' é OBRIGATÓRIO quando se usa 'fill' no Next.js Image. */}
      {/* Definimos altura e largura fixas para consistência em todas as imagens. */}
      <div className="w-full flex justify-center mb-10">
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
      <br />

      {/* Botão "Ver mais": Mantido com as otimizações de responsividade anteriores. */}
      {/* Centralizado horizontalmente e com largura máxima definida para cada breakpoint. */}
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
          "flex items-center justify-center" // útil para alinhar o texto como um botão real
        )}
      >
        Ver mais
      </Link>
    </div>
  );
};
export default CarSlide;
