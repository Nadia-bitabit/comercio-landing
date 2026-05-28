'use client';
import { useState, useEffect } from "react";
import { apiService } from "../../services/service"
import { Button } from "../common/Button";

export default function Hero() {

  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");

   useEffect(() => {
      apiService.getBanner()
      .then((data) => {
      const bannerInfo = data.find((item: any) => item.seccion === "home");
      if (bannerInfo) {
        setTitulo(bannerInfo.titulo);
        setSubtitulo(bannerInfo.subtitulo);
      }
    })
      .catch((err) => console.error("Error desde el servicio:", err))
    }, []);


  return (
    <section className="bg-peluditos-gradient min-h-screen w-full flex flex-col items-start justify-center px-10">
      <div className="container max-w-2xl items-start text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A535C] mb-6">
          {titulo}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          {subtitulo}
        </p>
        <div className="flex gap-6 ">
          <Button>Nuestra Manada</Button>
          <Button color="bg-[#FF6B6B]">Comprar Ahora</Button>
        </div>
      </div>
    </section>
  );
}
