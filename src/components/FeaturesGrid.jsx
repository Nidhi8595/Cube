// components/FeaturesGrid.jsx
import { motion } from "framer-motion";

const features = [
  "Change Orders", "Bills", "Contracts",
  "Progress Updates", "Estimates", "Schedules",
  "Mailbox", "Inspections", "Files"
];

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-24">
  <div className="max-w-6xl mx-auto grid grid-cols-3 gap-y-14 gap-x-24">


        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-4"
          >
           <div className="w-5 h-5 border border-gray-400 rounded-sm bg-white shadow-sm" />


            <span className="text-[15px] text-[#334155]">

{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
