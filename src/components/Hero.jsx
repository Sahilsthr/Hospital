export default function Hero() {
  return (
   <section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://hope.jamstacktemplates.dev/img/slider/slide2.jpg')",
  }}
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <p className="uppercase tracking-[6px] text-white text-lg mb-6">
            FEEL THE DIFFERENCE WITH US
          </p>

          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
            Your Health Is
          </h1>

          <h2 className="text-white text-5xl md:text-7xl font-light mt-2">
            Our Priority
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-red-800 hover:bg-red-900 text-white px-10 py-4 rounded-md font-semibold transition">
              GET A QUOTE
            </button>

            <button className="border border-white text-white px-10 py-4 rounded-md hover:bg-white hover:text-black transition">
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}