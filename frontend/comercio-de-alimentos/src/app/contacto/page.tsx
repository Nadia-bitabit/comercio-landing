import { apiService } from "../../services/service"

export default async function Contacto() {

  const sucursales = await apiService.getSucursales();

  return (
    <section className="bg-peluditos-gradient-reverse py-50 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="text-4xl text-[#1A535C] mb-6 leading-tight">
              Estamos a un guau <br />
              de distancia
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-4xl text-[#1A535C] mb-6 leading-tight">
                Ubicación
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                123 Anywhere St. <br />
                Any City, State <br />
                Any Country
                <br />
                (123) 456 7890
              </p>
            </div>
            <div>
              <h2 className="text-4xl text-[#1A535C] mb-6 leading-tight">
                Redes Sociales
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Facebook <br />
                Instagram
                <br />
                YouTube
                <br />
                Tiktoc
              </p>
              </div>
              <div>
              <h2 className="text-4xl text-[#1A535C] mb-6 leading-tight">
                Sucursales
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {sucursales.sucursales.map((sucursal: any) => (
                  <span key={sucursal.id}>
                    {sucursal.ciudad}  {sucursal.telefono} <br />
                      {sucursal.direccion}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
