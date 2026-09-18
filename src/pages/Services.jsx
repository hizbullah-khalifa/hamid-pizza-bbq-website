import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { ServiceGrid } from "../components/ServiceCards";
import CTABand from "../components/CTABand";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { Reveal } from "../components/ui";

export default function ServicesPage() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35 }}
    >
      <Navbar />

      <div className="page-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="blob blob-2" />
        </div>
        <div className="container">
          <Reveal>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={13} className="sep" />
              <span>Services</span>
            </nav>
            <span className="eyebrow">
              <span className="dot" />
              Our Services
            </span>
            <h1 className="page-title">
              Served the Way <span className="hl">You Like It</span>
            </h1>
            <p className="page-sub">
              Dine in under the glow of the grill, grab a takeaway box, get it
              delivered fast — or book platters for your next event.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="section services-section" style={{ borderTop: "none" }}>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <CTABand
        title={
          <>
            Booking a platter for your event?
          </>
        }
        sub="Message us with your date, headcount and venue — we’ll handle the grill."
      />
      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  );
}