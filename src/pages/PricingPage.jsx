// pages/PricingPage.jsx
import Navbar from "../components/Navbar";
import PricingHero from "../components/PricingHero";
import PricingTabs from "../components/PricingTabs";
import PricingCards from "../components/PricingCards";
import FeaturesGrid from "../components/FeaturesGrid";
import Enterprise from "../components/Enterprise";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <div className="bg-white text-cubeText">
      <Navbar />

      {/* HERO (NAVY) */}
      <section className="bg-cubeNavy">
        <PricingHero />
      </section>

      {/* TABS + CARDS (LIGHT GRAY) */}
      <section className="bg-cubeGray">
        <PricingTabs />
        <PricingCards />
      </section>

      {/* FEATURES (WHITE) */}
      <section className="bg-white">
        <FeaturesGrid />
      </section>

      {/* ENTERPRISE (WHITE) */}
      <section className="bg-white">
        <Enterprise />
      </section>

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

