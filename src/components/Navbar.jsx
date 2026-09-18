import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Phone,
  Menu,
  X,
  ArrowRight,
  UtensilsCrossed,
  Beef,
  Drumstick,
  Flame,
  CupSoda,
} from "lucide-react";
import { CATEGORIES } from "../data/menu";
import { SITE, waLink } from "../data/site";
import { ThemeToggle, Brand, ease } from "./ui";

const CATEGORY_ICONS = {
  Pizza: Flame,
  Broast: Drumstick,
  "Bar BQ Items": Beef,
  "Bar BQ Platters": UtensilsCrossed,
  "Juices & Drinks": CupSoda,
};

const CATEGORY_DESC = {
  Pizza: "Tandoori, fajita & BBQ pizzas",
  Broast: "Crispy half or full box",
  "Bar BQ Items": "Charcoal-grilled kababs",
  "Bar BQ Platters": "Sharing platters per person",
  "Juices & Drinks": "Shakes, teas & cold drinks",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setMobileSubOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled || open ? "scrolled" : ""}`}>
        <div className="container nav">
          <Link to="/" aria-label="Hamid Pizza home">
            <Brand />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              About
            </NavLink>

            <div className="nav-item has-menu">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={15} className="chev" />
              </NavLink>

              <div className="dropdown" role="menu">
                <div className="dropdown-head">Browse the Menu</div>
                {CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.key] || Flame;
                  return (
                    <Link
                      key={cat.key}
                      className="dropdown-link"
                      to={`/?cat=${encodeURIComponent(cat.key)}`}
                      role="menuitem"
                    >
                      <span className="di">
                        <Icon size={18} />
                      </span>
                      <span>
                        {cat.label}
                        <small>{CATEGORY_DESC[cat.key]}</small>
                      </span>
                    </Link>
                  );
                })}
                <div className="dropdown-foot">
                  <Link to="/services">
                    All services <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Contact
            </NavLink>
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <a
              className="btn btn-accent order-btn"
              href={waLink(SITE.whatsappOrderMessage())}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={17} />
              Order Now
            </a>
            <button
              className="burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: 340 }}
              animate={{ x: 0 }}
              exit={{ x: 340 }}
              transition={{ duration: 0.4, ease }}
            >
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
              >
                About
              </NavLink>

              <button
                className="mobile-sub"
                onClick={() => setMobileSubOpen((v) => !v)}
                aria-expanded={mobileSubOpen}
              >
                <span>Services & Menu</span>
                <motion.span
                  animate={{ rotate: mobileSubOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <motion.div
                className="mobile-sub-menu"
                initial={false}
                animate={{ height: mobileSubOpen ? "auto" : 0, opacity: mobileSubOpen ? 1 : 0 }}
                transition={{ duration: 0.38, ease }}
              >
                {CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.key] || Flame;
                  return (
                    <Link
                      key={cat.key}
                      className="mobile-sub-link"
                      to={`/?cat=${encodeURIComponent(cat.key)}`}
                      onClick={closeMenu}
                    >
                      <Icon size={16} style={{ color: "var(--accent)" }} />
                      {cat.label}
                    </Link>
                  );
                })}
                <Link
                  className="mobile-sub-link"
                  to="/services"
                  onClick={closeMenu}
                >
                  <ArrowRight size={16} style={{ color: "var(--accent)" }} />
                  All Services
                </Link>
              </motion.div>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
              >
                Contact
              </NavLink>

              <div className="mobile-menu-foot">
                <a
                  className="btn btn-accent btn-lg"
                  href={waLink(SITE.whatsappOrderMessage())}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone size={18} />
                  Order Now — {SITE.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}