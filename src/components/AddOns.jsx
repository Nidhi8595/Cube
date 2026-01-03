export default function AddOns() {
  return (
    <section className="py-24 bg-white shadow-2xl">
      <div className="max-w-[1200px] mx-auto px-8">

        <h2 className="text-4xl heading-tight mb-4">
          Supercharge Your Projects
        </h2>

        <p className="text-gray-600 max-w-xl mb-14">
          Take your construction projects to the next level with these
          must-have add-ons.
        </p>

        <div className="grid grid-cols-3 gap-8">

          {/* Dark Cards */}
          {[
            ["BIM Server", "Dedicated server for expedited BIM processing"],
            ["Clash Detection", "Advanced BIM clash detection [BETA]"],
            ["Digital Signatures", "Secure document signing [BETA]"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-cube-navy shadow-2xl text-white p-8 hover:translate-y-[-4px] transition-transform rounded-md"
            >
              <h3 className="text-xl mb-2">{title}</h3>
              <p className="text-white/80">{desc}</p>
            </div>
          ))}

          {/* Custom Add-On */}
          <div className="border-2 border-cube-blue p-8 shadow-2xl rounded-md">
            <h3 className="text-xl mb-2">Custom Add-On</h3>
            <p className="text-gray-600">
              Tailor-made solutions to meet your unique needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
