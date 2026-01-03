// components/Enterprise.jsx
export default function Enterprise() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-[1.2fr_1fr] gap-20 items-center">
        
        <div className="bg-[#0F2742] text-white p-12 rounded-md shadow-[0_25px_60px_rgba(15,42,68,0.35)]">
          <h2 className="text-3xl font-semibold mb-4">Enterprise</h2>
          <p className="text-white/80 mb-8">
            For enterprise-level pricing and customized plans.
          </p>
          <button className="bg-[#0AA0D6] px-6 py-3 text-sm font-medium hover:translate-x-1 transition-transform">

            REQUEST QUOTE →
          </button>
        </div>

        <ul className="grid grid-cols-2 gap-y-4 text-gray-900">
          <li>Unlimited Users</li>
          <li>Unlimited Projects</li>
          <li>Unlimited Storage</li>
          <li>SSO & Audit Log</li>
          <li>Custom Development</li>
          <li>99.9% SLA</li>
        </ul>

      </div>
    </section>
  );
}
