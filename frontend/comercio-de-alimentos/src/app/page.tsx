'use client';
import { useEffect, useState } from 'react';

export default function MiPagina() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/saludo')
      .then(res => res.json())
      .then(data => setDatos(data.mensaje))
      .catch(err => console.error("Error conectando:", err));
  }, []);

  return (
    <div>
      <h1>Mi Página</h1>
      {datos ? <p>{datos}</p> : <p>Cargando...</p>}
    </div>
  );
}