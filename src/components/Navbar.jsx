export default function Navbar() {
  return (
    <header className="bg-cube-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">
        <div className="font-bold text-xl">CUBE</div>

        <nav className="flex gap-8 text-sm text-gray-200">
          {["Platform", "Products", "Customers", "Resources", "Pricing"].map(i => (
            <span key={i} className="hover:text-white cursor-pointer">{i}</span>
          ))}
        </nav>

        <button className="border border-cube-blue px-6 py-2 hover:bg-cube-blue transition">
          GET STARTED
        </button>
      </div>
    </header>
  );
}
