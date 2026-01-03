import { Phone, BarChart, Handshake } from "lucide-react";

export default function SupportCTA() {
    return (
        <section className="bg-cube-navy text-white py-24">
            <div className="max-w-[1200px] mx-auto px-8">

                <h2 className="text-4xl mb-3">Need any help?</h2>
                <p className="text-white/80 mb-16">
                    Contact us and our experts will help you out.
                </p>

                <div className="grid grid-cols-3 gap-12">

                    {[
                        ["Sales Enquiry", Phone],
                        ["Get Support", BarChart],
                        ["Partner with us", Handshake],
                    ].map(([title, Icon]) => (
                        <div key={title} className="shadow-md rounded-md p-5 shadow-white">
                            <Icon className="w-10 h-10 mb-4" />
                            <h4 className="text-lg mb-3">{title}</h4>
                            <div className="h-px bg-white/30" />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
