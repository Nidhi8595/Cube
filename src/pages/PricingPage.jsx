
import Navbar from "../components/Navbar";
import PricingHero from "../components/PricingHero";
import PricingTabs from "../components/PricingTabs";
import PricingCards from "../components/PricingCards";
import FeaturesGrid from "../components/FeaturesGrid";
import Enterprise from "../components/Enterprise";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import AddOns from "../components/AddOns";
import SupportCTA from "../components/SupportCTA";

export default function PricingPage() {
    return (
        <div className="bg-white text-cubeText">
            <Navbar />

            {/* HERO (NAVY) */}

            <PricingHero />


            {/* TABS + CARDS (LIGHT GRAY) */}
            <section className="bg-cubeGray">
                <PricingTabs />
                <PricingCards />
                <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

            </section>

            {/* FEATURES (WHITE) */}
            <section className="bg-white">
                <FeaturesGrid />
                <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

            </section>

            <AddOns />

            {/* ENTERPRISE (WHITE) */}
            <section className="bg-white">
                <Enterprise />
                <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

            </section>

            <SupportCTA />
            {/* FAQ (LIGHT GRAY) */}
            <section className="bg-cubeGray">
                <FAQ />
            </section>

            {/* FOOTER (NAVY) */}
            <section className="bg-cubeNavy text-white">
                <Footer />
            </section>
        </div>
    );
}

