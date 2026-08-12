import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ImageFrame } from "@/components/site/ImageFrame";

import logoAsset from "@/assets/crevantix-logo.png.asset.json";
import emblemAsset from "@/assets/crevantix-emblem.png.asset.json";
import heroBg from "@/assets/hero.jpg";
import webDesign from "@/assets/web-design.jpg";
import webApps from "@/assets/web-apps.jpg";
import videoAds from "@/assets/video-ads.jpg";
import voiceAgents from "@/assets/voice-agents.jpg";
import pSales from "@/assets/p-sales.jpg";
import pEcom from "@/assets/p-ecom.jpg";
import pRealEstate from "@/assets/p-realestate.jpg";
import pCommercial from "@/assets/p-commercial.jpg";
import pSupport from "@/assets/p-support.jpg";
import pFintech from "@/assets/p-fintech.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crevantix — Luxury AI & Web Design Agency" },
      {
        name: "description",
        content:
          "Crevantix is a premium creative agency crafting cinematic websites, web apps, AI commercial video ads and AI voice call agents for luxury brands.",
      },
      { property: "og:title", content: "Crevantix — Luxury AI & Web Design Agency" },
      {
        property: "og:description",
        content:
          "Cinematic black-and-gold digital experiences: web design, web applications, AI video ads and AI voice agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Web Design",
    image: webDesign,
    alt: "Premium black and gold luxury website design shown on a laptop in a dark studio",
    text: "Cinematic, conversion-driven websites built around your brand's most premium expression — typography, motion and light engineered to feel expensive.",
    points: ["Bespoke art direction", "Motion & micro-interaction", "Conversion architecture"],
  },
  {
    title: "Web Applications",
    image: webApps,
    alt: "Sophisticated dark futuristic SaaS dashboard interface with gold analytics on a monitor",
    text: "Scalable dashboards, portals and SaaS platforms with the interface polish of a luxury product and the engineering of a serious system.",
    points: ["SaaS & dashboards", "Client portals", "Automation workflows"],
  },
  {
    title: "AI Commercial Video Ads",
    image: videoAds,
    alt: "Cinematic commercial production set filming a luxury product under warm golden lighting",
    text: "Broadcast-grade commercials produced with AI cinematography — product films, brand spots and paid-social creative at unprecedented speed.",
    points: ["Product films", "Brand spots", "Paid-social creative"],
  },
  {
    title: "AI Voice Call Agents",
    image: voiceAgents,
    alt: "Premium AI voice agent visual with glowing gold waveform rings on a black background",
    text: "Human-grade voice agents that answer, qualify and book — around the clock, in your brand's tone, connected to your CRM.",
    points: ["Inbound & outbound", "CRM integration", "24/7 qualification"],
  },
];

const portfolio = [
  {
    title: "AI Sales Command Center",
    tag: "AI Platform",
    image: pSales,
    alt: "Futuristic AI sales command center dashboard with glowing gold pipeline visualizations",
  },
  {
    title: "Luxury E-Commerce Experience",
    tag: "E-Commerce",
    image: pEcom,
    alt: "Luxury black and gold e-commerce product page for a designer perfume on a tablet",
  },
  {
    title: "Real Estate Business Platform",
    tag: "Platform",
    image: pRealEstate,
    alt: "Premium real estate website with luxury villa listings displayed on a laptop",
  },
  {
    title: "Premium Product Commercial",
    tag: "Video",
    image: pCommercial,
    alt: "Cinematic luxury perfume bottle commercial still with golden rim lighting and smoke",
  },
  {
    title: "AI Customer Support Agent",
    tag: "Voice AI",
    image: pSupport,
    alt: "AI customer support voice agent interface with gold call waveform and live transcript",
  },
  {
    title: "Fintech Dashboard",
    tag: "Fintech",
    image: pFintech,
    alt: "Sophisticated dark fintech dashboard with gold candlestick charts and portfolio balances",
  },
];

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "38", label: "Luxury brands" },
  { value: "4.9x", label: "Average ROAS" },
  { value: "24/7", label: "AI agents live" },
];

const process = [
  { step: "01", title: "Discovery", text: "We map your brand, audience and revenue goals before a single pixel is drawn." },
  { step: "02", title: "Direction", text: "Art direction, structure and messaging locked in one cinematic concept." },
  { step: "03", title: "Build", text: "Design, engineering, AI production — executed by a senior-only team." },
  { step: "04", title: "Launch & Scale", text: "We ship, measure and keep optimising for conversion after go-live." },
];

const heroCards = [
  { label: "Websites Design", image: webDesign, pos: "lg:absolute lg:left-0 lg:top-0" },
  { label: "Web Applications", image: webApps, pos: "lg:absolute lg:right-0 lg:top-0" },
  { label: "AI Commercial Video Ads", image: videoAds, pos: "lg:absolute lg:left-0 lg:bottom-0" },
  { label: "AI Voice Call Agents", image: voiceAgents, pos: "lg:absolute lg:right-0 lg:bottom-0" },
];


const heroBadges = ["Design-driven", "Custom-built", "Conversion-focused", "Global-ready"];

const WHATSAPP =
  "https://wa.me/919999999999?text=Hi%20Crevantix%2C%20I%27d%20like%20to%20discuss%20a%20project";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.41 4.41-9.81 9.83-9.81 2.62 0 5.09 1.02 6.94 2.88a9.75 9.75 0 0 1 2.88 6.94c0 5.41-4.41 9.81-9.84 9.81zM20.5 3.49A11.75 11.75 0 0 0 12.05 0C5.56 0 .28 5.28.28 11.76c0 2.07.54 4.1 1.57 5.88L.18 24l6.5-1.7a11.72 11.72 0 0 0 5.37 1.31h.01c6.48 0 11.76-5.28 11.76-11.76 0-3.14-1.22-6.1-3.32-8.36z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Crevantix logo" className="h-12 w-auto" width={216} height={144} />
            <span className="text-gradient-gold hidden text-xl font-medium uppercase tracking-[0.35em] sm:block">
              Crevantix
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            {["Home", "Services", "Work", "Process", "About", "Contact"].map((l) => (
              <a
                key={l}
                href={l === "Home" ? "#top" : `#${l.toLowerCase()}`}
                className="transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary/50 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Start a project <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
        <img
          src={heroBg}
          alt="Cinematic black and gold futuristic digital environment"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,oklch(0.07_0.008_80/0.35),oklch(0.07_0.008_80/0.85))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Reveal>
              <span className="inline-flex rounded-md border border-primary/30 bg-background/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-foreground/80 backdrop-blur">
                Digital Solutions &amp; AI <span className="ml-1 text-primary">Creative Agency</span>
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-sans text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                <span className="block">Create.</span>
                <span className="text-gradient-gold block">Connect.</span>
                <span className="block">Convert.</span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Premium digital experiences, powerful web applications, cinematic commercial content,
                and intelligent voice solutions — built for businesses ready to move forward.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="glow-gold inline-flex items-center gap-3 rounded-md bg-[image:var(--gradient-gold)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Start your project <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-md border border-border px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  Explore services <span aria-hidden="true">↓</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                {heroBadges.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 text-[10px] text-primary">
                      ◆
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right visual */}
          <Reveal delay={200}>
            <div className="relative mx-auto grid max-w-xl grid-cols-2 gap-4 lg:block lg:aspect-square lg:max-w-none">
              {/* orbit rings + glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_85/0.22),transparent_62%)] lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/25 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 lg:block" />

              {/* central emblem */}
              <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                <div className="glow-gold flex h-72 w-72 items-center justify-center rounded-full border border-primary/50 bg-[radial-gradient(circle,oklch(0.11_0.015_82),oklch(0.05_0.006_80))]">
                  <img
                    src={emblemAsset.url}
                    alt="Crevantix emblem"
                    className="h-[94%] w-[94%] rounded-full object-contain drop-shadow-[0_0_60px_oklch(0.82_0.14_85_/_0.55)]"
                    width={1246}
                    height={1246}
                  />
                </div>
              </div>

              {heroCards.map((c) => (
                <div
                  key={c.label}
                  className={`surface-card group w-full overflow-hidden rounded-2xl border-primary/30 p-3 transition-colors hover:border-primary/70 lg:w-[38%] ${c.pos}`}
                >
                  <p className="px-1 pb-2 text-center text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-foreground">
                    {c.label}
                  </p>
                  <div className="overflow-hidden rounded-xl border border-primary/25">
                    <img
                      src={c.image}
                      alt={c.label}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="px-4 py-10 text-center">
                <p className="text-gradient-gold font-display text-4xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
              ✦ What we build ✦
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-sans text-4xl font-bold leading-tight md:text-5xl">
              Powerful Solutions. <span className="text-gradient-gold">Real Impact.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              From your digital presence to intelligent customer conversations, we create experiences
              designed around your business goals.
            </p>
          </div>
        </Reveal>


        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="surface-card group h-full overflow-hidden rounded-3xl p-3 transition-all duration-500 hover:border-primary/40">
                <ImageFrame src={s.image} alt={s.alt} ratio="aspect-[16/10]" />
                <div className="px-5 pb-6 pt-7">
                  <h3 className="text-2xl font-normal">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-foreground/70"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="border-t border-border/60 bg-[oklch(0.09_0.008_80)] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
              Projects with <span className="text-gradient-gold italic">presence</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <article className="group relative overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/50">
                  <ImageFrame src={p.image} alt={p.alt} ratio="aspect-[4/3]" className="rounded-2xl border-0" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.tag}</span>
                    <h3 className="mt-2 text-xl font-normal">{p.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
              ✦ How we work ✦
            </span>
            <h2 className="mt-6 font-sans text-4xl font-bold leading-tight md:text-5xl">
              A <span className="text-gradient-gold">clear</span> path to launch
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="surface-card h-full rounded-2xl p-7 transition-colors hover:border-primary/50">
                <p className="text-gradient-gold font-display text-4xl">{p.step}</p>
                <h3 className="mt-4 text-xl font-normal">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <ImageFrame
              src={aboutImg}
              alt="Premium futuristic black and gold digital agency studio with holographic interfaces"
              ratio="aspect-[4/3]"
              className="glow-gold"
            />
          </Reveal>
          <Reveal delay={150}>
            <SectionLabel>About Crevantix</SectionLabel>
            <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
              A studio built for <span className="text-gradient-gold italic">premium brands</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Crevantix sits at the intersection of luxury art direction and applied artificial
              intelligence. We treat every surface — a landing page, a dashboard, a thirty-second
              commercial, a voice on a call — as part of one continuous brand experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Small senior team. Direct access to the people doing the work. Delivery measured in
              weeks, not quarters.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["Design-led", "Every pixel art-directed"],
                ["AI-native", "Automation in the core"],
                ["Senior only", "No junior handoffs"],
                ["Global", "Clients across 3 continents"],
              ].map(([t, d]) => (
                <div key={t} className="border-l border-primary/40 pl-4">
                  <p className="text-sm font-medium text-primary">{t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border/60 py-28">
        <img
          src={heroBg}
          alt="Golden cinematic light in a dark futuristic space"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <SectionLabel>Let's build</SectionLabel>
            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
              Ready to look <span className="text-gradient-gold italic">unmistakable</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Tell us about your brand and we'll come back with a direction, a timeline and a fixed
              price within 48 hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-gold inline-flex items-center gap-3 rounded-full bg-[image:var(--gradient-gold)] px-9 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>

              <a
                href="#work"
                className="rounded-full border border-border px-9 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
              >
                See the work
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <img src={logoAsset.url} alt="Crevantix" loading="lazy" className="h-10 w-auto opacity-80" />
          <p className="text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Crevantix. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-card/95 py-2 pl-2 pr-5 shadow-[var(--shadow-card)] backdrop-blur transition-transform hover:scale-[1.04]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
        <span className="text-xs font-medium leading-tight text-foreground">
          Chat on
          <br />
          WhatsApp
        </span>
      </a>

    </div>
  );
}
