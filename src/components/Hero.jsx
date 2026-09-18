import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  UtensilsCrossed,
  Bike,
  Flame,
  Star,
  CupSoda,
} from "lucide-react";
import { SITE, waLink } from "../data/site";
import { ease } from "./ui";

const PHRASES = [
  { words: "Sizzling Pizza & BBQ,".split(" "), hl: false, base: 0.1 },
  { words: "Delivered Fresh".split(" "), hl: true, base: 0.42 },
  { words: "to Your Door.".split(" "), hl: false, base: 0.72 },
];

function AnimatedLine({ phrase }) {
  return (
    <span className={`line ${phrase.hl ? "hl-line" : ""}`}>
      {phrase.words.map((word, i) => (
        <span className="tk" key={`ref-${i}`}>
          <motion.span
            className="t"
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.72, ease, delay: phrase.base + i * 0.07 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const artRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: artRef,
    offset: ["start end", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const artRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Flame size={15} />
            Fast Delivery · Fresh &amp; Hot
          </motion.span>

          <h1 className="hero-title">
            {PHRASES.map((p, i) => (
              <AnimatedLine key={`line-${i}`} phrase={p} />
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.0 }}
          >
            Charcoal-grilled BBQ platters, crispy broast and wood-fired style
            pizzas — handcrafted fresh, straight to your doorstep. Call{" "}
            <a className="phone-link" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>{" "}
            or order on WhatsApp in seconds.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.15 }}
          >
            <a
              className="btn btn-accent btn-lg"
              href={waLink(SITE.whatsappOrderMessage())}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={19} />
              Order Now
            </a>
            <a className="btn btn-ghost btn-lg" href="#menu">
              <UtensilsCrossed size={19} />
              View Menu
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.3 }}
          >
            <div className="hero-stat">
              <span className="num">
                <span className="hl">30</span>&nbsp;min
              </span>
              <span className="lbl">Avg. delivery</span>
            </div>
            <div className="hero-stat">
              <span className="num">
                4.9<span className="hl">★</span>
              </span>
              <span className="lbl">2,300+ reviews</span>
            </div>
            <div className="hero-stat">
              <span className="num">
                <span className="hl">15K</span>+
              </span>
              <span className="lbl">Orders served</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          ref={artRef}
          style={{ y: artY, rotate: artRotate }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
        >
          <div className="plate-glow" />
          <div className="plate-ring" />

          <div className="plate-img-wrap">
            <motion.img
              src="/hero-pizza.svg"
              alt="Signature Hamid BBQ pizza"
              className="plate-img"
              initial={{ opacity: 0, scale: 1.15, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.85 }}
            />
            <div className="steam steam-1" />
            <div className="steam steam-2" />
            <div className="steam steam-3" />
            <div className="plate-shine" />
          </div>

          <motion.div
            className="float-chip chip-delivery"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          >
            <span className="fc-icon"><Bike size={20} /></span>
            <span>
              <span className="fc-title">Fast Delivery</span>
              <span className="fc-sub">Hot &amp; quick · 30 min</span>
            </span>
          </motion.div>

          <motion.div
            className="float-chip chip-fresh"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="fc-icon"><Flame size={20} /></span>
            <span>
              <span className="fc-title">Fresh Daily</span>
              <span className="fc-sub">Charcoal-grilled</span>
            </span>
          </motion.div>

          <motion.div
            className="float-chip chip-order"
            animate={{ y: [0, -9, 0] }}
            transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 1.1 }}
          >
            <span className="fc-icon"><Star size={20} /></span>
            <span>
              <span className="fc-title">4.9 Rating</span>
              <span className="fc-sub">2,300+ happy orders</span>
            </span>
          </motion.div>

          <motion.div
            className="float-chip chip-rating"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5.4, ease: "easeInOut", delay: 0.2 }}
          >
            <span className="fc-icon"><CupSoda size={20} /></span>
            <span>
              <span className="fc-title">Mint Fresh</span>
              <span className="fc-sub">Juices &amp; shakes</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="mouse" />
        Scroll
      </motion.div>
    </section>
  );
}