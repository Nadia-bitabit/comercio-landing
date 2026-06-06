//el contrato de seguridad de tu componente

interface Props {
  imagen: string;
  alt: string;
  titulo: string;
  descripcion: string;
  precio: string | number;
}

export default function CardProducto({ imagen, alt, titulo, descripcion, precio }: Props) {
  return (
    <div className="bg-white/70 w-full max-w-sm bg-neutral-primary-soft p-6 rounded-3xl shadow-lg shadow-teal-900/20">
      <img
        className="rounded-base mb-6"
        src={imagen}
        alt={alt}
      />
      <div>
        <div className="flex items-center space-x-3 mb-6">
          ⭐⭐⭐⭐⭐
          <span className="bg-brand-softer text-fg-brand-strong text-lg font-medium px-1.5 py-0.5">
            4.8
          </span>
        </div>
        
        <a href="#">
          <h2 className="text-xl text-heading font-semibold tracking-tight space-x-3 mb-6">
            <span className="text-3xl font-extrabold text-heading"> {titulo}</span>
          </h2>
          <h5 className="text-xl text-heading font-semibold tracking-tight">
            {descripcion}
          </h5>
        </a>
        
        <div className="flex items-center justify-between mt-6">
          <h5 className="text-xl text-heading font-semibold tracking-tight">
            {precio}
          </h5>
        </div>
      </div>
    </div>
  );
}