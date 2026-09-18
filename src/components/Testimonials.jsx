import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";
import { SectionHead, Reveal, ease } from "./ui";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6200);
    return () => clearInterval(id);
  }, [index]);

  const t = TESTIMONIALS[index];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <SectionHead
          center
          eyebrow="Loved by our town"
          title={
            <>
              What Our <span className="hl">Customers Say</span>
            </>
          }
          sub="Real reviews from real plates — from family dinners to late-night delivery orders."
        />

        <div className="tst-wrap">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              className="tst-card"
              custom={dir}
              initial={{ opacity: 0, x: dir * 60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: dir * -60, scale: 0.98 }}
              transition={{ duration: 0.45, ease }}
            >
              <div className="tst-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < t.rating ? "currentColor" : "none"}
                    opacity={i < t.rating ? 1 : 0.25}
                  />
                ))}
              </div>
              <blockquote className="tst-quote">“{t.quote}”</blockquote>
              <figcaption className="tst-person">
                <span className="tst-avatar">{t.name.charAt(0)}</span>
                <span>
                  <span className="tst-name">{t.name}</span>
                  <span className="tst-loc">{t.loc}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="tst-nav">
            <motion.button
              className="tst-arrow"
              onClick={() => go(-1)}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <div className="tst-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`tst-dot ${i === index ? "active" : ""}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <motion.button
              className="tst-arrow"
              onClick={() => go(1)}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}