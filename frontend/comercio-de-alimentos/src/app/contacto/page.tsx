export default function Contacto() {
  return (
    <section className="bg-peluditos-gradient-reverse py-50 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <h3 className="text-4xl text-[#1A535C] mb-6 leading-tight">
              Estamos a un guau <br/>de distancia
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
              <div>
                <h1 className="text-4xl text-[#1A535C] mb-6 leading-tight">
                Ubicación
            </h1>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              123 Anywhere St. <br/>Any City, State <br/>Any Country<br/>(123) 456 7890
            </p>
              </div>
              <div>
                <h1 className="text-4xl text-[#1A535C] mb-6 leading-tight">
                Redes Sociales
            </h1>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Facebook <br/>Instagram<br/>YouTube<br/>Tiktoc
            </p>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}