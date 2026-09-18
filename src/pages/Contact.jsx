import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CTABand from "../components/CTABand";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { Reveal } from "../components/ui";

export default function ContactPage() {
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
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className="container">
          <Reveal>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={13} className="sep" />
              <span>Contact</span>
            </nav>
            <span className="eyebrow">
              <span className="dot" />
              Contact
            </span>
            <h1 className="page-title">
              Say Salam, <span className="hl">Order Up</span>
            </h1>
            <p className="page-sub">
              Reach us by phone or WhatsApp — or drop your message below and
              we’ll get back to you faster than our delivery.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Contact />
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Prefer to just call?
          </>
        }
        sub="One ring and your order is on the grill. Delivery available across Raheem Abad & nearby areas."
      />
      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  );
}