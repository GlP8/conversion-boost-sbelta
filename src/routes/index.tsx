import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/spa/Nav";
import { WhatsAppButton } from "@/components/spa/WhatsAppButton";
import { BookingForm } from "@/components/spa/BookingForm";
import { Instagram, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-lashes.jpg";
import transformationImg from "@/assets/transformation.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";
import serviceNails from "@/assets/service-nails.png";
import serviceFacial from "@/assets/service-facial.jpg";
import logoImg from "@/assets/Spa & Beauty Initial Logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sbeltas Beauty Spa — Luxury Lashes, Nails & Facials in London, CA" },
      {
        name: "description",
        content:
          "Boutique beauty spa in London, CA. Premium eyelash extensions, manicure, pedicure & advanced facials. Book your luxury appointment today.",
      },
      { property: "og:title", content: "Sbeltas Beauty Spa — Luxury Beauty in London, CA" },
      {
        property: "og:description",
        content:
          "Premium lashes, nails and facials for women who expect perfection. Reserve your appointment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Sbeltas Beauty Spa",
          image: "/og-image.jpg",
          telephone: "+1-437-429-9450",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "London",
            addressRegion: "ON",
            addressCountry: "CA",
          },
          openingHours: "Mo-Fr 09:00-17:00",
          areaServed: "London, CA",
          description:
            "Boutique luxury beauty spa specializing in eyelash extensions, manicure, pedicure and advanced facial treatments.",
        }),
      },
    ],
  }),
});

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

function GoldButton({
  href,
  children,
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  const sizes = size === "lg" ? "px-10 py-4 text-sm" : "px-8 py-3.5 text-xs";
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-sm gradient-gold font-medium uppercase tracking-[0.3em] text-primary-foreground shadow-gold-sm transition-all duration-300 hover:shadow-gold ${sizes}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-sm border border-gold/50 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.3em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

function Index() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Sbeltas Beauty Spa Background"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32">
          <p className="reveal mb-4 text-[9px] uppercase tracking-[0.5em] text-gold sm:mb-6 sm:text-[10px] sm:tracking-[0.6em]">
            Sbeltas Beauty Spa · London, CA
          </p>
          <h1 className="reveal font-display text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            Wake Up <span className="italic text-gold">Beautiful.</span>
            <br />Effortlessly.
          </h1>
          <p className="reveal mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg">
            Luxury lashes, flawless nails and radiant skin — designed for women who expect perfection.
          </p>

          <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:gap-4 sm:flex-row">
            <GoldButton href="#book" size="lg">Book Your Appointment</GoldButton>
            <OutlineButton href="#services">See Our Services</OutlineButton>
          </div>

          <ul className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:mt-12 sm:gap-x-8 sm:gap-y-3 sm:text-xs sm:tracking-[0.2em]">
            <li className="flex items-center gap-2"><span className="text-gold">✓</span> Certified Technicians</li>
            <li className="flex items-center gap-2"><span className="text-gold">✓</span> Premium Products</li>
            <li className="flex items-center gap-2"><span className="text-gold">✓</span> Personalized Experience</li>
          </ul>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
          
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal order-2 md:order-1">
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-gold">The Experience</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              More Than a Service.
              <br /><span className="italic text-gold">A Transformation.</span>
            </h2>
            <div className="gold-divider my-8 w-24" />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Every visit is crafted to leave you feeling unmistakably yourself — only more so. Confidence, poise and quiet elegance, designed in the smallest details.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/80">
              Confidence. Assurance. Elegance.
            </p>
            <div className="mt-10">
              <GoldButton href="#book">Reserve Your Experience</GoldButton>
            </div>
          </div>
          <div className="reveal order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30" />
              <img
                src={transformationImg}
                alt="Elegant manicured hands"
                width={1200}
                height={1400}
                loading="lazy"
                className="relative h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="testimonials" className="relative bg-card py-16 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal text-center">
            <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-gold sm:mb-4 sm:text-[10px] sm:tracking-[0.5em]">Loved by Our Clients</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              Whispered between <span className="italic text-gold">friends.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
            {[
              { name: "Olivia M.", text: "My lashes have never looked this perfect. I genuinely wake up ready." },
              { name: "Sophia R.", text: "The most luxurious manicure experience I've ever had. The detail is unreal." },
              { name: "Isabella K.", text: "My skin is glowing for days after every facial. Worth every minute." },
            ].map((t) => (
              <figure
                key={t.name}
                className="reveal group relative border border-border bg-background p-6 transition-all duration-500 hover:border-gold sm:p-8"
              >
                <div className="mb-4 flex gap-1 sm:mb-5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
                <blockquote className="font-display text-lg leading-snug text-foreground sm:text-xl">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:mt-6 sm:text-xs sm:tracking-[0.3em]">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="reveal mt-12 text-center md:mt-16">
            <div className="gold-divider mx-auto w-24 sm:w-32" />
            <p className="mt-5 font-display text-2xl text-gold md:text-3xl lg:text-4xl">+</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs sm:tracking-[0.4em]">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-gold sm:mb-4 sm:text-[10px] sm:tracking-[0.5em]">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              Crafted with <span className="italic text-gold">precision.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {[
              { img: serviceLashes, title: "Lash Extensions", result: "An unforgettable gaze, 24/7." },
              { img: serviceNails, title: "Manicure & Pedicure", result: "Effortless, impeccable elegance." },
              { img: serviceFacial, title: "Advanced Facials", result: "Radiant, healthy, glowing skin." },
            ].map((s) => (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:border-gold hover:shadow-gold-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-foreground/90 sm:mt-3">{s.result}</p>
                  <a
                    href="#book"
                    className="mt-4 inline-block border-b border-gold/40 pb-1 text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:border-gold sm:mt-6 sm:text-[11px] sm:tracking-[0.3em]"
                  >
                    Book Now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="relative overflow-hidden border-y border-gold/15 bg-card py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="reveal mb-6 text-[10px] uppercase tracking-[0.5em] text-gold">Our Standard</p>
          <h2 className="reveal font-display text-5xl leading-tight md:text-7xl">
            Precision. Technique.
            <br /><span className="italic text-gold">Luxury.</span>
          </h2>
          <div className="gold-divider mx-auto my-10 w-24" />
          <div className="reveal grid gap-10 text-left md:grid-cols-3">
            {[
              { t: "Professional Technique", d: "Years of refined craft and continuous specialized training." },
              { t: "High-End Products", d: "Only premium brands trusted by elite beauty professionals." },
              { t: "Personal Attention", d: "Every appointment is tailored to your features and lifestyle." },
            ].map((b) => (
              <div key={b.t}>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{b.t}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="relative bg-background py-28 md:py-36">
        <div className="reveal mx-auto max-w-3xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-gold">By Appointment Only</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Limited Appointments
            <br />Available <span className="italic text-gold">Weekly.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            To ensure deeply personalized attention, we accept a limited number of clients per day.
          </p>
          <div className="mt-10">
            <GoldButton href="#book" size="lg">Secure Your Spot</GoldButton>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="book"
        className="relative overflow-hidden py-28 md:py-36"
        style={{ background: "var(--gradient-dark-gold)" }}
      >
        <div className="absolute inset-0 bg-background/40" />
        <div className="reveal relative z-10 mx-auto max-w-3xl px-6 text-center" id="contact">
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Ready to Elevate
            <br />Your <span className="italic text-gold">Beauty?</span>
          </h2>
          <div className="gold-divider mx-auto my-10 w-32" />
          <p className="mx-auto max-w-xl text-muted-foreground md:text-lg">
            Reserve your appointment in less than a minute. We'll confirm your spot personally.
          </p>

          <BookingForm />

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="tel:+14374299450"
              className="font-display text-2xl text-foreground transition-colors hover:text-gold md:text-3xl"
            >
              +1 (437) 429-9450
            </a>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <p>London, CA</p>
              <p className="mt-2">Monday – Friday · 9 AM – 5 PM</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold/10 bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Logo y Info */}
            <div className="text-center md:text-left">
              <img src={logoImg} alt="Sbeltas Logo" className="mx-auto h-10 w-auto md:mx-0 md:h-12" />
              <p className="mt-4 font-display text-sm tracking-[0.4em] text-gold"></p>
              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
                London, Ontario & Surroundings
              </p>
            </div>

            {/* Redes Sociales */}
            <div className="text-center">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Follow Us</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/sbeltasbeautyspa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/14374299450?text=Hi%20Sbelta%20💛%20I%20want%20to%20book%20a%20full%20beauty%20reset%20(spa%2C%20lashes%20%26%20nails).%20Do%20you%20have%20availability%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-left">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Stay Updated</p>
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gold/30 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none rounded-sm"
                />
                <button
                  type="submit"
                  className="rounded-sm border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 border-t border-gold/10 pt-6 text-center">
            <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
              © {new Date().getFullYear()} Sbeltas Beauty Spa · London, CA · By Zed Emprendedor ·
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
