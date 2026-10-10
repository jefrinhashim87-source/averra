import { useState } from "react";

const PHONE = "+971543776698";
const PHONE_LABEL = "+971 54 377 6698";
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

// Swap these for your own job photos later.
const IMG = {
  hero: u("photo-1509391366360-2e959784a276", 1200),
  inspect: "/images/inspection-testing.jpeg",
  leak: u("photo-1621905251189-08b45d6a269e"),
  tank: "/images/tank-replacement.jpeg",
  clean: "/images/collector-cleaning.jpeg",
};

const SERVICES = [
  { id: "inspect", name: "Inspection", title: "Complete System Inspection", img: IMG.inspect, position: "50% 35%",
    text: "We check the tank, solar collector, heating element, and other components then tell you plainly what needs attention." },
  { id: "leak", name: "Leak Repair", title: "Leak Detection and Repair", img: IMG.leak,
    text: "We find the source of the leak and fix it before it damages your roof or ceiling." },
  { id: "tank", name: "Replacement", title: "Tank and Full System Replacement", img: IMG.tank, position: "72% 60%",
    text: "When repair no longer makes sense, we replace the tank or the whole system." },
  { id: "clean", name: "Cleaning", title: "Solar Water Heating System Cleaning", img: IMG.clean, position: "50% 62%",
    text: "Clean panels collect more heat, so you get hotter water for longer." },
];

const WHY = [
  ["Expert Technicians", "Trained on solar water heating systems."],
  ["Quick Response", "We reach you fast when something stops working."],
  ["Affordable Maintenance Plans", "Regular care at a fair price."],
  ["Long-term System Protection", "Fixes that last, not patches."],
  ["Guaranteed Quality Workmanship", "We stand behind every job."],
];

const AREAS = ["Villanova", "Arabella 1 & 2", "Mira", "Zahra Townhouse", "Damac Hills", "Arabian Ranches"];

function Img({ src, alt = "", className, style }) {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div className={`${className || ""} img-fallback`} role="img" aria-label={alt} />
  ) : (
    <img className={className} src={src} alt={alt} style={style} loading="lazy" onError={() => setBad(true)} />
  );
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function App() {
  const [active, setActive] = useState(SERVICES[0].id);
  const [activeNav, setActiveNav] = useState("home");
  const svc = SERVICES.find((s) => s.id === active);

  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <a href="#home" className="brand"><span className="dot" />Averra Solentra</a>
          <nav className="dnav" aria-label="Main">
            <a href="#services">Services</a><a href="#why">Why Us</a>
            <a href="#areas">Communities</a><a href="#contact">Contact</a>
          </nav>
          <a className="pill dark sm" href={`tel:${PHONE}`}>Call Now</a>
        </div>
      </header>

      <main id="home">
        <section className="wrap hero">
          <p className="muted">Solar Water Heater Care in Dubai</p>
          <h1>Warmth YOU Trust.<br />Service YOU Rely On.</h1>
          <div className="hero-card">
            <Img src={IMG.hero} alt="Solar panels on a villa roof" className="cover" />
            <div className="hero-over">
              <span className="chip yellow">Averra Solentra Technical Works L.L.C.</span>
              <a className="pill light" href={`tel:${PHONE}`}>Book a visit! <span className="circle"><Arrow /></span></a>
            </div>
          </div>
        </section>

        <section className="wrap block" id="services">
          <h2>Our Services</h2>
          <div className="chips" role="tablist" aria-label="Services">
            {SERVICES.map((s) => (
              <button key={s.id} role="tab" aria-selected={s.id === active}
                className={`chip ${s.id === active ? "on" : ""}`} onClick={() => setActive(s.id)}>
                {s.name}
              </button>
            ))}
          </div>
          <article className="svc" role="tabpanel">
            <Img src={svc.img} alt={svc.title} className="svc-img"
              style={{ objectPosition: svc.position || "center" }} />
            <div className="svc-body">
              <h3>{svc.title}</h3>
              <p>{svc.text}</p>
              <a className="pill dark" href={`tel:${PHONE}`}>Ask about this. <span className="circle blue"><Arrow /></span></a>
            </div>
          </article>
        </section>

        <section className="wrap block" id="why">
          <h2>Why choose us?</h2>
          <ul className="why">
            {WHY.map(([t, d], i) => (
              <li key={t} className={i === 0 ? "feature" : ""}>
                <span className="tick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
                <div><b>{t}</b><span>{d}</span></div>
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap block" id="areas">
          <h2>Trusted in Your Community</h2>
          <p className="muted">We already look after systems in these communities.</p>
          <ul className="chips wrapchips">
            {AREAS.map((a) => <li key={a} className="chip outline">{a}</li>)}
          </ul>
        </section>

        <section className="wrap block">
          <div className="plan">
            <h2>Protect your system with a maintenance plan</h2>
            <p>Regular inspection and cleaning avoid expensive breakdowns. Ask us about our affordable plans.</p>
            <a className="pill yellow" href={`tel:${PHONE}`}>Ask about a plan <span className="circle"><Arrow /></span></a>
          </div>
        </section>

        <section className="wrap block contact" id="contact">
          <h2>Book a visit</h2>
          <p className="muted">Call us and tell us what your system is doing. We will arrange a technician.</p>
          <a className="phone" href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© 2026 Averra Solentra Technical Works L.L.C.</span>
        <span>Dubai, UAE</span>
      </footer>

      <nav className="dock" aria-label="Quick navigation">
        <a href="#home" aria-label="Home" aria-current={activeNav === "home" ? "page" : undefined}
          className={activeNav === "home" ? "active" : ""} onClick={() => setActiveNav("home")}>
          <svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" /></svg>
        </a>
        <a href="#services" aria-label="Services" aria-current={activeNav === "services" ? "page" : undefined}
          className={activeNav === "services" ? "active" : ""} onClick={() => setActiveNav("services")}>
          <svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></svg>
        </a>
        <a href="#areas" aria-label="Communities" aria-current={activeNav === "areas" ? "page" : undefined}
          className={activeNav === "areas" ? "active" : ""} onClick={() => setActiveNav("areas")}>
          <svg viewBox="0 0 24 24"><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
        </a>
        <a href={`tel:${PHONE}`} aria-label="Call" aria-current={activeNav === "call" ? "page" : undefined}
          className={activeNav === "call" ? "active" : ""} onClick={() => setActiveNav("call")}>
          <svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
        </a>
      </nav>
    </>
  );
}
