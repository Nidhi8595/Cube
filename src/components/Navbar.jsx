export default function Navbar() {
  return (
    <header className="bg-cube-navy text-white sticky top-0 z-50 border-b border-white/5">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">
        <div className="font-bold text-xl">CUBE</div>

        <nav className="flex gap-8 text-sm text-gray-200">
          {["Platform", "Products", "Customers", "Resources", "Pricing"].map(i => (
            <span
  key={i}
  className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
>
  {i}
</span>
          ))}
        </nav>

        <button className="border border-cube-blue px-6 py-2 hover:bg-cube-blue hover:text-white transition">

          GET STARTED
        </button>
      </div>
    </header>
  );
}
