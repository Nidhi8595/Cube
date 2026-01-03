import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0F2A44] to-[#0B1F33] text-white">

      {/* diagonal overlay */}
<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_40%)]" />

{/* vignette */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35))]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h1 className="text-[70px] font-semibold leading-tight tracking-tight">
          We’ve got a plan that’s<br />perfect for you
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-gray-200 text-xl"
        >
          CUBE brings together project planning, task management,
          collaboration, and reporting into one intuitive platform.
        </motion.p>
      </motion.div>

    </section>
  );
}
