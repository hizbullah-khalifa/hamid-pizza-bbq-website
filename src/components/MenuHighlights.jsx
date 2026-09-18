import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone, ArrowRight } from "lucide-react";
import { CATEGORIES, MENU } from "../data/menu";
import { SITE, waLink } from "../data/site";
import { Reveal, SectionHead, ease } from "./ui";

const cardsVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function MenuHighlights() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabCat, setTabCat] = useState("All");
  const [ordered, setOrdered] = useState({});
  const sectionRef = useRef(null);

  const urlCat = searchParams.get("cat");
  const urlCatValid = urlCat && CATEGORIES.some((c) => c.key === urlCat);
  const activeCat = urlCatValid ? urlCat : tabCat;

  useEffect(() => {
    if (searchParams.get("cat")) {
      const t = window.setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(t);
    }
  }, [searchParams]);

  const selectCat = (key) => {
    setTabCat(key);
    setSearchParams(key === "All" ? {} : { cat: key }, {
      replace: true,
      preventScrollReset: true,
    });
  };

  const filtered =
    activeCat === "All" ? MENU : MENU.filter((m) => m.category === activeCat);

  const markOrdered = (id, name) => {
    setOrdered((o) => ({ ...o, [id]: true }));
    window.setTimeout(() => setOrdered((o) => ({ ...o, [id]: false })), 1500);
    window.open(waLink(SITE.whatsappOrderMessage(name)), "_blank");
  };

  return (
    <section className="section menu-section" id="menu" ref={sectionRef}>
      <div className="container">
        <div className="menu-head-row">
          <SectionHead
            eyebrow="From our kitchen"
            title={
              <>
                A Menu Made for <span className="hl">Flame Lovers</span>
              </>
            }
            sub="Real charcoal BBQ, hand-stretched pizzas and our famous broast — priced in PKR, ready in minutes."
          />
          <Reveal delay={0.15}>
            <div className="cat-tabs" role="tablist" aria-label="Menu categories">
              <button
                className={`cat-tab ${activeCat === "All" ? "active" : ""}`}
                onClick={() => selectCat("All")}
                role="tab"
              >
                All
              </button>
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.key}
                    className={`cat-tab ${activeCat === cat.key ? "active" : ""}`}
                    onClick={() => selectCat(cat.key)}
                    role="tab"
                    aria-selected={activeCat === cat.key}
                  >
                    <span className="tab-icon">
                      <Icon size={15} />
                    </span>
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.div
          className="menu-grid"
          variants={{
            show: { transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.id}
                  className="menu-card"
                  variants={cardsVariants}
                  exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                  layout
                >
                  <div className="menu-thumb">
                    <span
                      className="thumb-fx"
                      style={{ "--thumb-grad": item.grad }}
                    />
                    <Icon
                      className="menu-icon"
                      size={92}
                      strokeWidth={1.2}
                      style={{
                        "--thumb-color": "var(--accent)",
                      }}
                    />
                    {item.tags[0] && (
                      <span className={`menu-badge ${item.tags[0] === "New" ? "soft" : ""}`}>
                        {item.tags[0]}
                      </span>
                    )}
                    <span className="menu-cat-chip">
                      {item.category}
                    </span>
                  </div>

                  <div className="menu-body">
                    <h3 className="menu-name">{item.name}</h3>
                    <p className="menu-desc">{item.desc}</p>
                    <div className="menu-meta">
                      <div>
                        <span className="menu-price">
                          <span className="currency">Rs</span>
                          {item.price}
                          <span className="menu-size">{item.size}</span>
                        </span>
                      </div>
                      <motion.button
                        className="menu-order"
                        onClick={() => markOrdered(item.id, item.name)}
                        whileTap={{ scale: 0.93 }}
                        aria-label={`Order ${item.name}`}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {ordered[item.id] ? (
                            <motion.span
                              key="check"
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.25, ease }}
                              style={{ display: "inline-flex", alignItems: "center" }}
                            >
                              <Check size={15} />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="plus"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ display: "inline-flex", alignItems: "center" }}
                            >
                              <PlusIcon />
                            </motion.span>
                          )}
                        </AnimatePresence>
                        {ordered[item.id] ? "Sent!" : "Order"}
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <Reveal className="menu-cta-row" delay={0.1}>
          <a
            className="btn btn-ghost"
            href={waLink("Salam! Please share the full menu of Hamid Pizza & Bar BQ Platter House.")}
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={17} />
            Full menu on WhatsApp — {SITE.phoneDisplay}
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}