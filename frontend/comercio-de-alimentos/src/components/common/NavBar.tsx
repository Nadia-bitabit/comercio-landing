import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-6">
      <Link
        href="#inicio"
        className="text-[#1A535C] hover:text-[#eab3bb] transition"
      >
        Inicio
      </Link>
      <Link
        href="#aboutus"
        className="text-[#1A535C] hover:text-[#eab3bb] transition"
      >
        Nuestra Manada
      </Link>
      <Link
        href="#producto"
        className="text-[#1A535C] hover:text-[#eab3bb] transition"
      >
        Productos
      </Link>
      <Link
        href="#contacto"
        className="text-[#1A535C] hover:text-[#eab3bb] transition"
      >
        Contacto
      </Link>
      <Link
        href="/login"
        className="text-[#1A535C] hover:text-[#eab3bb] transition"
      >
        Login
      </Link>
    </nav>
  );
}
