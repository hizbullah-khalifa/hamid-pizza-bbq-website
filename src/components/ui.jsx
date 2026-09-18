import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Flame } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 42, className, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <Reveal>
        {eyebrow ? (
          <span className="eyebrow">
            <span className="dot" />
            {eyebrow}
          </span>
        ) : null}
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.16}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Brand({ compact }) {
  return (
    <span className="brand">
      <span className="brand-badge" aria-hidden="true">
        <Flame size={compact ? 20 : 24} strokeWidth={2.4} />
      </span>
      <span className="brand-text">
        <span className="brand-name">
          Hamid <span className="accent-text">Pizza</span>
        </span>
        {!compact && <span className="brand-sub">&amp; Bar BQ Platter House</span>}
      </span>
    </span>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          className="theme-icon"
          initial={{ rotate: -110, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 110, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.38, ease }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={19} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Counter({ to, suffix, prefix, duration = 1.9 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(val).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}