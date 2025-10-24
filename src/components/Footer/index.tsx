// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff0d] text-[#e0e0e0] w-full py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Esplayer Cars. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
