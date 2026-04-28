export default function Hero() {
  return (
    <section className="bg-peluditos-gradient min-h-screen w-full flex flex-col items-start justify-center px-10">
      <div className="container max-w-2xl items-start text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A535C] mb-6">
          Todo lo que tu perro ama, <span className="text-[#FF6B6B]">en un solo lugar.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Desde nutrición premium hasta los juguetes más resistentes. En <strong>Peluditos</strong> cuidamos a tu mejor amigo con productos seleccionados para su bienestar.
        </p>
        <div className="flex gap-6 ">
          <button className="bg-[#1A535C] text-2xl font-bold text-white px-8 py-4 backdrop-blur-md border-radius rounded-full">
            Nuestra Manada
          </button>
          <button className="bg-[#FF6B6B] text-2xl font-bold text-white px-8 py-4 backdrop-blur-md border-radius rounded-full">
            Comprar Ahora
          </button>
        </div>
      </div> 
    </section>
  );
}