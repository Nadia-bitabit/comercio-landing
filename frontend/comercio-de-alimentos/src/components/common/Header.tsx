import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center">
      <div className="flex w-full items-center justify-between px-10 py-3 shadow-2xl border border-white/10">
        <div className="font-bold text-xl text-[#1A535C]">Peluditos</div>
        <NavBar />
      </div>
    </header>
  );
}
