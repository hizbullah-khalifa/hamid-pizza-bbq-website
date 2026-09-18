import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { CATEGORIES } from "../data/menu";
import { SITE, waChatLink } from "../data/site";
import { Brand } from "./ui";
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" aria-label="Hamid Pizza home">
              <Brand />
            </Link>
            <p className="footer-desc">
              The home of charcoal-grilled Bar BQ platters, crispy broast and
              hand-stretched pizzas — near Police Chowki, Raheem Abad. Fresh
              daily, delivered fast.
            </p>
            <div className="socials">
              <a
                className="social-btn"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon size={19} />
              </a>
              <a
                className="social-btn"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={19} />
              </a>
              <a
                className="social-btn wa"
                href={waChatLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={19} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/#menu">Menu</Link></li>
            </ul>
          </nav>

          <nav aria-label="Menu categories">
            <h4 className="footer-title">Our Menu</h4>
            <ul className="footer-links">
              {CATEGORIES.map((c) => (
                <li key={c.key}>
                  <Link to={`/?cat=${encodeURIComponent(c.key)}`}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="footer-title">Order &amp; Visit</h4>
            <div className="footer-contact">
              <span className="footer-contact-item">
                <Phone size={17} className="fci-icon" />
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </span>
              <span className="footer-contact-item">
                <MapPin size={17} className="fci-icon" />
                <span>{SITE.address}</span>
              </span>
              <span className="footer-contact-item">
                <Clock size={17} className="fci-icon" />
                <span>{SITE.hours}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Hamid Pizza &amp; Bar BQ Platter House.
            All rights reserved.
          </span>
          <span>
            Made with <span className="heart">♥</span> and a lot of charcoal in
            Raheem Abad.
          </span>
        </div>
      </div>
    </footer>
  );
}