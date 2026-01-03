import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="bg-cube-navy text-white py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h1 className="text-5xl font-light leading-tight">
          We’ve got a plan that’s<br />perfect for you
        </h1>
        <p className="mt-6 text-gray-300">
          CUBE brings together project planning, task management,
          collaboration, and reporting into one intuitive platform.
        </p>
      </motion.div>
    </section>
  );
}
