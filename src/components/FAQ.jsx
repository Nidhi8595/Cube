// components/FAQ.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    "Which products are available on the CUBE Platform?",
    "What is CUBE’s pricing model?",
    "How does Enterprise pricing work?"
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="bg-white py-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-10">
                    Frequently Asked Questions
                </h2>

                {faqs.map((q, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        key={i}
                        className="border-b py-6 cursor-pointer"
                        onClick={() => setOpen(open === i ? null : i)}
                    >
                        <div className="flex justify-between items-center">
  <span className="font-medium text-lg">{q}</span>
  <span className="text-xl transition-transform duration-300">
    {open === i ? "−" : "+"}
  </span>
</div>


                        {open === i && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 text-gray-600"
                            >

                                This is placeholder content just like Cube.
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
