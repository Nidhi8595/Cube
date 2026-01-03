// components/Enterprise.jsx
export default function Enterprise() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-start">
        
        <div className="bg-[#0F2742] text-white p-12 rounded-sm">
          <h2 className="text-3xl font-semibold mb-4">Enterprise</h2>
          <p className="text-white/80 mb-8">
            For enterprise-level pricing and customized plans.
          </p>
          <button className="bg-[#0AA0D6] px-6 py-3 text-sm font-medium">
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
