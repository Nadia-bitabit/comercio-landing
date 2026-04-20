'use client';
import { useEffect, useState } from 'react';

export default function MiPagina() {
  const [datos, setDatos] = useState("Hola");

  useEffect(() => {
    fetch('http://localhost:4000/api/saludo')
      .then(res => res.json())
      .then(data => setDatos(data.mensaje))
      .catch(err => console.error("Error conectando:", err));
  }, []);

  return (
    <div>
      <h1>Estado de la conexión:</h1>
      <p>{datos ? datos : "Cargando o no conectado..."}</p>
    </div>
  );
}