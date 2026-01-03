import { useState } from "react";

const tabs = [
    "Common Data Environment",
    "Project Management",
    "Digital Twins",
];

export default function PricingTabs() {
    const [active, setActive] = useState(1);


    return (
        <div className="relative flex max-w-[1200px] mx-auto -mt-14 bg-white shadow-sm border">

            {/* <div className="absolute bottom-0 left-1/3 h-[3px] w-1/3 bg-cube-blue opacity-80" /> */}

            <div
                className="absolute bottom-0 h-[3px] bg-cube-blue transition-all duration-300"
                style={{
                    left: `${active * 33.3333}%`,
                    width: "33.3333%",
                }}
            />

{tabs.map((tab, i) => (
  <button
    key={tab}
    onClick={() => setActive(i)}
    className={`flex-1 py-5 text-sm font-medium transition-colors shadow-2xl
      ${active === i
        ? "bg-cube-blue text-white"
        : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    {tab}
  </button>
))}


            
        </div>
    );
}
