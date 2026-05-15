import logoImg from "@/assets/Spa & Beauty Initial Logo.png";
import { useState } from "react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-gold/10 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#top" className="flex items-center">
          <img src={logoImg} alt="Sbeltas Logo" className="h-12 w-auto md:h-16" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-gold">Services</a>
          <a href="#testimonials" className="transition-colors hover:text-gold">Reviews</a>
          <a href="#contact" className="transition-colors hover:text-gold">Contact</a>
        </nav>
        
        {/* Desktop Book Button */}
        <a
          href="#book"
          className="hidden rounded-sm border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-primary-foreground md:inline-block"
        >
          Book
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t border-gold/10 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-6 px-6 py-8">
            <a href="#services" className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#testimonials" className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </a>
            <a href="#contact" className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a
              href="#book"
              className="rounded-sm border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Book
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
