import { motion } from "framer-motion";

export default function PricingCards() {
    return (
        <section className="max-w-6xl mx-auto py-24 grid grid-cols-2 gap-10 px-8">

            {/* USER LICENSE */}
            <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className="bg-white border shadow-[0_20px_40px_rgba(15,42,68,0.08)]"
            >

                <div className="bg-cube-blue text-white p-8">
                    <h3 className="text-xl">User License</h3>
                    <p className="text-4xl mt-3 font-medium">
                        ₹49,999 <span className="text-base font-normal">/ user / year</span>
                    </p>
                </div>

                <ul className="p-8 space-y-3 text-cube-text">
                    {[
                        "Pay Per User",
                        "Unlimited Projects",
                        "Unlimited Storage",
                        "Unlimited Version History",
                        "Business Hours Support",
                    ].map(i => (
                        <li key={i}>• {i}</li>
                    ))}
                </ul>

                <button className="mx-8 mb-8 w-[calc(100%-4rem)] bg-cube-blue text-white py-4 hover:bg-[#0088bb] transition">
                    START NOW
                </button>
            </motion.div>

            {/* PROJECT LICENSE */}
            <motion.div
  whileHover={{ y: -6 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-[#F8FAFC] border p-8 flex flex-col justify-between"
>
  <div>
    <h3 className="text-xl">Project License</h3>
    <p className="text-4xl mt-3 font-medium">Custom</p>
  </div>

  <button className="mt-12 border border-cube-blue text-cube-blue px-6 py-4 hover:bg-cube-blue hover:text-white transition">
    TALK TO US
  </button>
</motion.div>

        </section>
    );
}
