import { Phone } from "lucide-react";
import { SITE, waLink } from "../data/site";
import { Reveal } from "./ui";
import { WhatsAppIcon } from "./BrandIcons";

export default function CTABand({ title, sub }) {
  return (
    <section className="container" style={{ paddingBottom: "clamp(56px, 7vw, 90px)" }}>
      <Reveal>
        <div className="cta-band">
          <h2 className="cta-title">
            {title || (
              <>
                Order now — <span className="hl">hot at your door</span>
              </>
            )}
          </h2>
          <p className="cta-sub">
            {sub ||
              `One call or one WhatsApp message is all it takes. We deliver across Raheem Abad & nearby areas in ~30 minutes.`}
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-accent btn-lg"
              href={waLink(SITE.whatsappOrderMessage())}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={19} /> Order on WhatsApp
            </a>
            <a className="btn btn-ghost btn-lg" href={`tel:${SITE.phoneTel}`}>
              <Phone size={18} /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}