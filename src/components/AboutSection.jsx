import { Link } from "react-router-dom";
import {
  Pizza,
  Flame,
  Drumstick,
  UtensilsCrossed,
  ShieldCheck,
  Leaf,
  ChefHat,
  Timer,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";
import { SITE } from "../data/site";
import { Reveal, SectionHead, Counter } from "./ui";

const FEATURES = [
  {
    icon: ShieldCheck,
    t: "Charcoal-Grilled",
    s: "Real smoke, no shortcuts",
  },
  {
    icon: Leaf,
    t: "Fresh Daily",
    s: "Marinated every morning",
  },
  {
    icon: ChefHat,
    t: "Master Recipe",
    s: "Signature BBQ masalas",
  },
  {
    icon: Timer,
    t: "30-Min Delivery",
    s: "Hot at your doorstep",
  },
];

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media" y={30}>
            <div className="about-tile large" style={{ "--thumb-grad": "var(--accent-soft)" }}>
              <span className="at-fx" />
              <Pizza size={104} strokeWidth={1.2} className="at-icon" />
              <span className="at-label">Our kitchen</span>
            </div>
            <div className="about-tile" style={{ "--thumb-grad": "rgba(255,179,71,.25)", "--thumb-color": "var(--accent-2)" }}>
              <span className="at-fx" />
              <Flame size={72} strokeWidth={1.2} className="at-icon" />
              <span className="at-label">Charcoal bar BQ</span>
            </div>
            <div className="about-tile" style={{ "--thumb-grad": "var(--accent-soft)", "--thumb-color": "var(--accent)" }}>
              <span className="at-fx" />
              <Drumstick size={66} strokeWidth={1.2} className="at-icon" />
              <span className="at-label">Crispy broast</span>
            </div>
            <div className="exp-badge">
              <span className="num">12+</span>
              <span className="lbl">Years of flavor</span>
            </div>
          </Reveal>

          <div className="about-copy">
            <SectionHead
              eyebrow="Our story"
              title={
                <>
                  Where Raheem Abad comes for <span className="hl">real BBQ</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="lead">
                From a single charcoal grill near Police Chowki to the
                neighborhood’s favourite platter house — it all started with one
                promise.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="txt">
                Every day we hand-marinate our chicken, hand-roll our kababs and
                stretch our pizza dough fresh. Our smoky Bar BQ platters, juicy
                tikka and crispy broast are grilled over real charcoal and served
                hot — on our tables or delivered to your door.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="about-features">
                {FEATURES.map((f) => (
                  <li className="about-feature" key={f.t}>
                    <span className="chk">
                      <f.icon size={14} />
                    </span>
                    <span>
                      <span className="ft">{f.t}</span>
                      <span className="fs">
                        <br />
                        {f.s}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="hero-ctas" style={{ marginBottom: 0 }}>
                <Link className="btn btn-accent" to="/about">
                  Read our story <ArrowRight size={16} />
                </Link>
                <a
                  className="btn btn-ghost"
                  href={`tel:${SITE.phoneTel}`}
                >
                  <Heart size={16} />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="counters-grid">
          {[
            { icon: Timer, to: 30, suffix: "", lbl: "Minutes avg. delivery" },
            { icon: Users, to: 15000, suffix: "+", lbl: "Happy customers served" },
            { icon: UtensilsCrossed, to: 200000, suffix: "+", lbl: "Platters & pizzas made" },
            { icon: Heart, to: 12, suffix: "+", lbl: "Years of serving flavor" },
          ].map((c, i) => (
            <Reveal key={c.lbl} delay={i * 0.08} className="counter">
              <span className="c-icon">
                <c.icon size={22} />
              </span>
              <span className="c-num">
                <Counter to={c.to} suffix={c.suffix} />
              </span>
              <span className="c-lbl">{c.lbl}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}