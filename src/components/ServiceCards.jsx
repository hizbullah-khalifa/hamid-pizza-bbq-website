import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Utensils,
  ShoppingBag,
  Bike,
  PartyPopper,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../data/testimonials";
import { Reveal } from "./ui";

const SERVICE_ICONS = {
  Utensils,
  ShoppingBag,
  Bike,
  PartyPopper,
};

export function ServiceGrid({ showLink }) {
  return (
    <div className="services-grid">
      {SERVICES.map((svc, i) => {
        const Icon = SERVICE_ICONS[svc.icon] || Utensils;
        return (
          <Reveal key={svc.id} delay={i * 0.08}>
            <motion.div className="service-card" whileHover={{ y: -10 }}>
              <div className="service-icon">
                <Icon size={28} />
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              {showLink && (
                <Link to="/services" className="service-link">
                  Learn more <ArrowRight size={15} className="arrow" />
                </Link>
              )}
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  );
}