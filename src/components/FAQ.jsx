import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which products are available on the CUBE Platform?",
    a: "You can subscribe to Common Data Environment, Project Management or Digital Twins. Add-ons are available to extend your subscription.",
  },
  {
    q: "What is CUBE’s pricing model?",
    a: "CUBE offers User-based pricing or Project-based pricing. Digital Twins are available only on Project License. Enterprise pricing is customized.",
  },
  {
    q: "How does the User-based pricing model work?",
    a: "Licenses are based on number of users with no restriction on number of projects. Available for CDE & Project Management.",
  },
  {
    q: "What is included in the Project License?",
    a: "A fixed number of users for a single project, with predictable annual costs. You can scale by adding more licenses.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise pricing is tailored for large teams with advanced security, scalability and dedicated support.",
  },
  {
    q: "Can I collaborate with users from other organizations?",
    a: "Yes, you can invite users across organizations. Each user must have an appropriate license.",
  },
  {
    q: "Can the product be customized based on requirements?",
    a: "Yes. Enterprise plans allow custom branding, domains, login pages and even custom modules.",
  },
  {
    q: "Can we subscribe to only specific modules?",
    a: "Yes, Enterprise customers can mix & match modules based on their needs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-28">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="text-4xl font-light tracking-tight mb-16">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, i) => (
          <div key={i} className="border-b">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-7 text-left hover:bg-[#F8FAFC] transition"
            >
              <span className="text-lg font-medium text-[#0F172A]">
                {item.q}
              </span>

              <motion.span
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.span>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pr-12 text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

