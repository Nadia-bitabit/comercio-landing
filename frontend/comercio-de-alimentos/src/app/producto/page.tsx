
import CardProducto from "@/src/components/common/CardProducto";
import { apiService } from "../../services/service"

export async function Producto() {

  const products = await apiService.getProducts();

  const imagenesPorCategoria: Record<string, string> = {
  alimento: "/alimento.png",
  diversión: "/diversion.png",
  accesorio: "/accesorio.png",
};

  /*

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      apiService.getProducts()
      .then((data) => {
          setProducts(data);
        })
      .catch((err) => console.error("Error desde el servicio:", err))
    }, []);

    */

  return (
    <section className="bg-peluditos-gradient-reverse py-10 px-8">
      <div className="mx-auto text-center mb-16">
        <h1 className="text-4xl text-[#1A535C] font-extrabold mb-6 leading-tight">
          Nuestros productos
        </h1>
      </div>
      <div className="mx-auto flex justify-between container">
        {products.map((prod: any) => (
          <CardProducto
            key={prod.id}
            imagen={imagenesPorCategoria[prod.titulo.toLowerCase()]}
            alt={prod.descripcion}
            titulo={prod.titulo}
            descripcion={prod.descripcion}
            precio={prod.precio}
          />
        ))}        
      </div>
    </section>
  );
}

export default Producto;
