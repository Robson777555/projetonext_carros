import Image from "next/image";
import { clsx } from "clsx";

interface ArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const Arrows = ({ onPrev, onNext }: ArrowsProps) => {
  return (
    <div
      className={clsx(
        "absolute",
        "top-[calc(60%+150px)]",
        "md:top-[335px]",
        "left-0",
        "right-0",
        "w-full",
        "md:w-1/2",
        "flex",
        "justify-between",
        "items-center",
        "-translate-y-1/2",
        "z-10",
        "px-5",
        "md:px-12",
        "pointer-events-none"
      )}
    >
      <button
        onClick={onPrev}
        aria-label="Slide anterior"
        className={clsx(
          "pointer-events-auto",
          "flex",
          "items-center",
          "justify-center",
          "w-[60px]",
          "h-[60px]",
          "md:w-[60px]",
          "md:h-[60px]",
          "rounded-full",
          "bg-[white] !important",
          "border-2",
          "shadow-md",
          "transition-all",
          "duration-300",
          "hover:bg-[#beff1b]",
          "max-md:w-[50px]",
          "max-md:h-[50px]",
          "max-[400px]:w-[32px]",
          "max-[400px]:h-[32px]"
        )}
      >
        <Image
          src="/img/arrow.png"
          alt="Previous"
          width={25}
          height={25}
          className={clsx(
            "transition",
            "duration-300",
            "hover:brightness-0",
            "rotate-180",
            "w-[25px]",
            "h-[25px]",
            "max-md:w-[20px]",
            "max-md:h-[20px]",
            "max-[400px]:w-[14px]",
            "max-[400px]:h-[14px]"
          )}
        />
      </button>

      <button
        onClick={onNext}
        aria-label="Próximo slide"
        className={clsx(
          "pointer-events-auto",
          "flex",
          "items-center",
          "justify-center",
          "w-[60px]",
          "h-[60px]",
          "md:w-[60px]",
          "md:h-[60px]",
          "rounded-full",
          "bg-[white] !important",
          "border-2",
          "shadow-md",
          "transition-all",
          "duration-300",
          "hover:bg-[#beff1b]",
          "max-md:w-[50px]",
          "max-md:h-[50px]",
          "max-[400px]:w-[32px]",
          "max-[400px]:h-[32px]"
        )}
      >
        <Image
          src="/img/arrow.png"
          alt="Next"
          width={25}
          height={25}
          className={clsx(
            "transition",
            "duration-300",
            "hover:brightness-0",
            "w-[25px]",
            "h-[25px]",
            "max-md:w-[20px]",
            "max-md:h-[20px]",
            "max-[400px]:w-[14px]",
            "max-[400px]:h-[14px]"
          )}
        />
      </button>
    </div>
  );
};

export default Arrows;
