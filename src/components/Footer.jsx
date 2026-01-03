import { motion } from "framer-motion";
import {
  Youtube,
  Linkedin,
  Smartphone,
  Apple,
} from "lucide-react";

/* animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F2A44] to-[#0B1F33] text-white pt-24">
      {/* CTA STRIP */}
      <motion.div
        className="max-w-[1200px] mx-auto px-6 mb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 bg-cube-blue rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
          <div className="p-12">
            <h3 className="text-4xl font-semibold mb-4">
              Ready for the Future?
            </h3>
            <p className="text-white/90 leading-relaxed max-w-md">
              Get started on leveraging CUBE’s capabilities for your projects.
              Our experts are ready to give you a tailored demo.
            </p>
          </div>

          <div className="bg-white flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-cube-blue text-cube-blue px-10 py-3 uppercase tracking-wide text-sm hover:bg-cube-blue hover:text-white transition"
            >
              Request a demo →
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* CERTIFICATIONS */}
      <motion.div
        className="max-w-[1200px] mx-auto px-6 mb-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-6">
          {[
            "ISO 19650",
            "ISO 9001",
            "ISO 14001",
            "ISO 45001",
            "ISO 27001",
            "SOC 2 Type II",
          ].map((cert) => (
            <motion.div
              key={cert}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-[#132E4A] px-6 py-4 rounded-lg text-sm text-white/80 transition"
            >
              {cert} certified
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FOOTER LINKS */}
      <motion.div
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-12 text-sm pb-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          ["Platform", ["Features", "Modules", "Formats", "Apps"]],
          ["Products", ["Common Data Environment", "Project Management", "Digital Twins"]],
          ["Company", ["About", "Contact", "Partner with Us"]],
          ["Customers", ["Owners", "Contractors", "Engineers", "Architects"]],
          ["Resources", ["Blog", "News", "Case Studies", "Webinars"]],
          ["More", ["Login", "Support", "Status", "Pricing"]],
        ].map(([title, items]) => (
          <motion.div key={title} variants={fadeUp}>
            <h4 className="text-cube-blue mb-4 uppercase tracking-wide">
              {title}
            </h4>
            <ul className="space-y-3 text-white/80">
              {items.map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* CONTACT + DOWNLOAD */}
      <motion.div
        className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-10 pb-20 text-sm text-white/80"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={fadeUp}>
          CUBE enables users to control & monitor project design, timelines,
          quality and costs through a connected platform accessible anywhere.
        </motion.p>

        <motion.div variants={fadeUp}>
          <h4 className="text-cube-blue mb-3">Contact Us</h4>
          <p>+91 830 586 5705</p>
          <p>hello@cube.ms</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="text-cube-blue mb-3">Download</h4>
          <div className="flex gap-6 mt-2">
            <motion.div whileHover={{ y: -4 }}>
              <Smartphone />
            </motion.div>
            <motion.div whileHover={{ y: -4 }}>
              <Apple />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-xs text-white/60">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2026 CUBE. All Rights Reserved.</span>
          <div className="flex gap-6 items-center">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Service
            </span>
            <motion.div whileHover={{ y: -3 }}>
              <Youtube />
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Linkedin />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
