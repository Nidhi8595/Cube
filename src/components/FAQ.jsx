// components/FAQ.jsx
import { useState } from "react";

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
          <div
            key={i}
            className="border-b py-6 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{q}</span>
              <span>{open === i ? "−" : "+"}</span>
            </div>

            {open === i && (
              <p className="mt-4 text-gray-600">
                This is placeholder content just like Cube.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
