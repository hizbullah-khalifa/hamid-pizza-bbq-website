import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Flame, Star, Bike, ChefHat } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuHighlights from "../components/MenuHighlights";
import { ServiceGrid } from "../components/ServiceCards";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CTABand from "../components/CTABand";
import { SectionHead } from "../components/ui";

const MARQUEE_ITEMS = [
  { icon: Flame, text: "Charcoal Bar BQ Platters" },
  { icon: Star, text: "Signature Tandoori & BBQ Pizzas" },
  { icon: Bike, text: "30-Min Delivery in Raheem Abad" },
  { icon: ChefHat, text: "Crispy Broast — Half & Full" },
];

function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((m, i) => (
          <span className="marquee-item" key={i}>
            <m.icon size={16} className="star" />
            {m.text}
            <Star size={9} className="star" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const t = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35 }}
    >
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <MenuHighlights />

      <section className="section services-section">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we serve you"
            title={
              <>
                More Ways to <span className="hl">Enjoy</span>
              </>
            }
            sub="Dine in by the grill, grab your box to go, or let us bring the sizzle to your doorstep — and book platters for your events."
          />
          <ServiceGrid />
        </div>
      </section>

      <AboutSection />
      <Testimonials />
      <Contact asSection />
      <CTABand />
      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  );
}