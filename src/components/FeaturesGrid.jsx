// components/FeaturesGrid.jsx
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import {
  RefreshCcw,
  FileText,
  Clipboard,
  TrendingUp,
  Calculator,
  Calendar,
  Mail,
  CheckCircle,
  Folder
} from "lucide-react";

const features = [
  { icon: RefreshCcw, label: "Change Orders" },
  { icon: FileText, label: "Bills" },
  { icon: Clipboard, label: "Contracts" },
  { icon: TrendingUp, label: "Progress Updates" },
  { icon: Calculator, label: "Estimates" },
  { icon: Calendar, label: "Schedules" },
  { icon: Mail, label: "Mailbox" },
  { icon: CheckCircle, label: "Inspections" },
  { icon: Folder, label: "Files" },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1200px] mx-auto px-8">

        <h3 className="text-cube-blue font-bold text-lg ml-6 mb-8 tracking-wide uppercase">
          What’s included
        </h3>

        <div className="grid grid-cols-3 gap-y-12 gap-x-24 bg-white p-14 shadow-sm">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="w-7 h-7 text-cubeNavy" />
              <span className="text-lg text-cubeText">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
