import { motion } from "framer-motion";
import { SITE, waLink } from "../data/site";
import { WhatsAppIcon } from "./BrandIcons";

export default function FloatingWhatsApp() {
  return (
    <div className="float-wa">
      <motion.a
        className="float-wa-btn"
        href={waLink("Salam! I'd like to place an order at Hamid Pizza & Bar BQ Platter House.")}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat on WhatsApp — ${SITE.phoneDisplay}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.4 }}
        whileHover={{ scale: 1.08, rotate: -6 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="wa-inner">
          <WhatsAppIcon size={30} />
        </span>
      </motion.a>
      <span className="float-wa-tip">Order on WhatsApp</span>
    </div>
  );
}