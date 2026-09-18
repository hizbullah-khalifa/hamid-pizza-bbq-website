import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Pizza } from "lucide-react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { Reveal } from "../components/ui";

export default function AboutPage() {
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
        </div>
        <div className="container">
          <Reveal>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={13} className="sep" />
              <span>About</span>
            </nav>
            <span className="eyebrow">
              <span className="dot" />
              Our Story
            </span>
            <h1 className="page-title">
              The Charcoal Soul of <span className="hl">Raheem Abad</span>
            </h1>
            <p className="page-sub">
              Twelve years, one charcoal grill and a neighbourhood that keeps
              coming back for more.
            </p>
          </Reveal>
        </div>
      </div>

      <AboutSection full />

      <section className="section">
        <div className="container">
          <div className="cta-band" style={{ borderColor: "var(--accent-line)" }}>
            <Pizza
              size={44}
              className="cta-solo-icon"
              style={{
                color: "var(--accent)",
                margin: "0 auto 18px",
                filter: "drop-shadow(0 8px 20px rgba(255,107,53,.4))",
              }}
            />
            <h2 className="cta-title">
              Taste the story for yourself
            </h2>
            <p className="cta-sub">
              Every platter carries twelve years of perfected masala, real
              charcoal smoke and a family recipe we guard with pride.
            </p>
            <div className="cta-actions">
              <Link className="btn btn-accent btn-lg" to="/#menu">
                View the Menu
              </Link>
              <Link className="btn btn-ghost btn-lg" to="/contact">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  );
}