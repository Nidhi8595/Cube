export default function PricingTabs() {
  return (
    <div className="max-w-5xl mx-auto -mt-12 bg-white shadow flex">
      {["Common Data Environment", "Project Management", "Digital Twins"].map((t, i) => (
        <div
          key={t}
          className={`flex-1 text-center py-4 text-sm cursor-pointer ${
            i === 1 ? "bg-cube-blue text-white" : "hover:bg-gray-100"
          }`}
        >
          {t}
        </div>
      ))}
    </div>
  );
}
