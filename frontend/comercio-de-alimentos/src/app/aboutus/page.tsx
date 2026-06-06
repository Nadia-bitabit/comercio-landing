'use client';
import { useState, useEffect } from "react";
import { apiService } from "../../services/service"

export default function AboutUs() {

    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
  
    useEffect(() => {
      apiService.getBanner()
      .then((data) => {
      const bannerInfo = data.find((item: any) => item.seccion === "aboutus"); 
      if (bannerInfo) {
        setTitulo(bannerInfo.titulo);
        setSubtitulo(bannerInfo.subtitulo);
      }
    })
      .catch((err) => console.error("Error desde el servicio:", err))
    }, []);

  return (
    <section className="bg-peluditos-gradient py-40 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-4 w-90 h-90 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <img
              src="home.png"
              alt="Equipo de especialistas en cuidado animal de Peluditos posando en la veterinaria en Buenos Aires"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />
          </div>

          <div className="text-left">
            <h2 className="text-[#FF6B6B] font-bold tracking-widest uppercase text-sm mb-2">
              Nuestra Manada
            </h2>
            <h3 className="text-4xl font-extrabold text-[#1A535C] mb-6 leading-tight">
              {titulo}
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              {subtitulo}
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Nacimos con la misión de ofrecer solo lo que nosotros mismos
              daríamos a nuestros compañeros: nutrición real, accesorios seguros
              y juguetes que despierten su instinto más feliz.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="block text-3xl font-bold text-[#FF6B6B]">
                  +500
                </span>
                <span className="text-slate-500 font-medium">
                  Clientes felices
                </span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-[#FF6B6B]">
                  100%
                </span>
                <span className="text-slate-500 font-medium">Natural</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
