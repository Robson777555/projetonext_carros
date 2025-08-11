import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="
        fixed w-[90%] left-1/2 -translate-x-1/2 flex justify-between items-center 
        z-[100] py-5 max-w-[1400px]
        md:w-[95%]
        sm:flex-col sm:gap-4 sm:py-4
        max-[576px]:flex-col max-[576px]:gap-4 max-[576px]:py-3
        max-[400px]:gap-2 max-[400px]:py-2
      "
    >
      <Image
        src="/img/logo.png"
        alt="Esplayer Cars Logo"
        width={180}
        height={50}
        className="
          w-[180px] 
          md:w-[150px] 
          max-[576px]:w-[110px]
        "
      />
      <nav>
        <ul
          className="
            flex gap-[30px]
            md:gap-[15px]
            max-[576px]:flex-wrap max-[576px]:justify-center max-[576px]:gap-3
            max-[400px]:gap-2
          "
        >
          <li>
            <Link
              href="/"
              className="text-white text-[1.1rem] hover:text-[#beff1b] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cars"
              className="text-white text-[1.1rem] hover:text-[#beff1b] transition-colors"
            >
              Carros
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white text-[1.1rem] hover:text-[#beff1b] transition-colors"
            >
              Fale conosco
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;