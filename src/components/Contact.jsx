import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  MapPinned,
} from "lucide-react";
import { SITE, waLink } from "../data/site";
import { Reveal, SectionHead } from "./ui";
import { WhatsAppIcon } from "./BrandIcons";

export default function Contact({ asSection }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Salam! My name is *${form.name}* (${form.email}).\n\n${form.message}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
    window.setTimeout(() => setSent(false), 2600);
  };

  const card = (
    <>
      <div className="contact-cards">
        {[
          {
            icon: Phone,
            title: "Call or WhatsApp",
            val: (
              <a href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay} <span className="cc-sub">· tap to call</span>
              </a>
            ),
          },
          {
            icon: MapPin,
            title: "Find us",
            val: (
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                {SITE.address}
              </a>
            ),
          },
          {
            icon: Clock,
            title: "Opening hours",
            val: SITE.hours,
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.09}>
            <div className="contact-card">
              <span className="cc-icon">
                <c.icon size={22} />
              </span>
              <span>
                <span className="cc-title">{c.title}</span>
                <br />
                <span className="cc-val">{c.val}</span>
              </span>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.26}>
          <div className="wa-card">
            <span className="wa-icon-circle">
              <WhatsAppIcon size={30} />
            </span>
            <span>
              <span className="wa-title">Chat &amp; order on WhatsApp</span>
              <span className="wa-sub">Instant confirmation · {SITE.phoneDisplay}</span>
              <br />
              <a
                className="wa-cta"
                href={waLink(SITE.whatsappOrderMessage())}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={16} /> Start a chat
              </a>
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <span className="fg-icon">
                <Phone size={16} />
              </span>
              <input
                type="text"
                id="f-name"
                placeholder=" "
                value={form.name}
                onChange={update("name")}
                required
              />
              <label className="form-floating-label" htmlFor="f-name">
                Your name
              </label>
            </div>
            <div className="form-group">
              <span className="fg-icon">
                <Send size={16} />
              </span>
              <input
                type="email"
                id="f-email"
                placeholder=" "
                value={form.email}
                onChange={update("email")}
                required
              />
              <label className="form-floating-label" htmlFor="f-email">
                Email address
              </label>
            </div>
          </div>
          <div className="form-group area">
            <span className="fg-icon">
              <MapPinned size={16} />
            </span>
            <textarea
              id="f-msg"
              placeholder=" "
              value={form.message}
              onChange={update("message")}
              required
            />
            <label className="form-floating-label" htmlFor="f-msg">
              Your message / order
            </label>
          </div>

          <motion.button
            type="submit"
            className="btn btn-accent btn-lg"
            style={{ width: "100%" }}
            whileTap={{ scale: 0.97 }}
            disabled={sent}
          >
            {sent ? (
              <>
                <Check size={18} /> Opening WhatsApp…
              </>
            ) : (
              <>
                Send via WhatsApp <Send size={16} />
              </>
            )}
          </motion.button>

          <div className="map-box" aria-hidden="false">
            <div className="map-pin">
              <span className="pulse" />
              <span className="pin-core">
                <MapPin size={22} />
              </span>
            </div>
            <a className="map-open" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </form>
      </Reveal>
    </>
  );

  if (asSection) {
    return (
      <section className="section" id="contact">
        <div className="container">
          <SectionHead
            center
            eyebrow="Get in touch"
            title={
              <>
                Hungry? Let’s <span className="hl">Talk</span>
              </>
            }
            sub="Call us, drop a message, or swing by — we’ll have your order sizzling in no time."
          />
          <div className="contact-grid">{card}</div>
        </div>
      </section>
    );
  }

  return card;
}