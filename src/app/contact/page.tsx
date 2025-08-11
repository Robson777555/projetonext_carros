export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 md:px-8 lg:px-12 pt-[100px]">
      <div className="text-[#e0e0e0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug max-w-[90%] md:max-w-3xl lg:max-w-4xl text-center">
        <p className="mt-4">
          Email:{" "}
          <span className="text-[#beff1b] hover:underline">
            robsonjobim96@hotmail.com
          </span>
        </p>
        <br />
        <p className="mt-4">
          Telefone:{" "}
          <span className="text-[#beff1b] hover:underline">
            +55 (51) 99694-0564
          </span>
        </p>
      </div>
    </main>
  );
}
