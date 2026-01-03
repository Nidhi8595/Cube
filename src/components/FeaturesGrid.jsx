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
    <section className=" pb-24 max-w-6xl bg-cube-gray mx-auto px-8">
<div className="bg-white">
   <h3 className="text-cube-blue font-bold text-lg p-8 tracking-wide uppercase">
          What’s included
        </h3> 

        <div className="grid grid-cols-3 gap-y-12 gap-x-24 bg-white p-14 shadow-2xl rounded-md">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="w-7 h-7 text-cube-navy" />
              <span className="text-lg text-cubeText">{label}</span>
            </div>
          ))}
        </div>
        </div>

    </section>
  );
}
