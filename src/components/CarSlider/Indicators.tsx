interface IndicatorsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const Indicators = ({ count, activeIndex, onDotClick }: IndicatorsProps) => {
  return (
    <div className="absolute left-[40px] top-[calc(60%-90px)] -translate-y-1/2 z-10 md:left-10 sm:left-6 max-sm:top-[25px] max-sm:translate-y-0">
      <div className="flex flex-col items-start gap-2">
        {/* Número do slide */}
        <span className="text-white text-[2.5rem] font-bold leading-none max-sm:text-[2rem] max-[400px]:text-[1.3rem]">
          {`0${activeIndex + 1}`}
        </span>

        {/* Linha destacada */}
        <div className="w-[50px] h-[3px] bg-[#beff1b] rounded mt-2 max-[576px]:w-[40px] max-[400px]:w-[25px]" />

        {/* Bolinhas indicadores */}
        <ul className="flex gap-[5px] mt-2">
          {Array.from({ length: count }).map((_, index) => (
            <li
              key={index}
              onClick={() => onDotClick(index)}
              
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Indicators;
