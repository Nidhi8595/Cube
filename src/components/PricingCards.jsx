export default function PricingCards() {
  return (
    <section className="max-w-6xl mx-auto py-20 grid grid-cols-2 gap-8 px-8">
      <div className="border">
        <div className="bg-cube-blue text-white p-6">
          <h3 className="text-xl">User License</h3>
          <p className="text-3xl mt-2">₹49,999 <span className="text-sm">/ user / year</span></p>
        </div>
        <ul className="p-6 space-y-3">
          {[
            "Pay Per User",
            "Unlimited Projects",
            "Unlimited Storage",
            "Unlimited Version History",
            "Business Hours Support",
          ].map(i => <li key={i}>• {i}</li>)}
        </ul>
        <button className="m-6 w-[calc(100%-3rem)] bg-cube-blue text-white py-3">
          START NOW
        </button>
      </div>

      <div className="border bg-gray-100 p-6">
        <h3 className="text-xl">Project License</h3>
        <p className="text-3xl mt-2">Custom</p>
        <button className="mt-6 border px-6 py-3">TALK TO US</button>
      </div>
    </section>
  );
}
