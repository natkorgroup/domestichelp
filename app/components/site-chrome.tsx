import { enquiryEmail } from "../lib/content";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a className={inverted ? "brand brand--inverted" : "brand"} href="/" aria-label="DomesticHelp.ca home">
      <img className="brand__mark" src="/brand-mark.svg" alt="" width="44" height="44" />
      <span className="brand__copy">
        <span className="brand__name">Domestic<span>Help</span><i>.ca</i></span>
        <span className="brand__subtitle">Private household staff</span>
      </span>
    </a>
  );
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M2.8 8h10.4m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="8" fill="currentColor" fillOpacity=".11" />
      <path d="m5.4 8.6 2 2 4.25-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="announcement">\n        <span className="announcement__line">Personalized household staff recruitment</span>\n        <span className="announcement__separator">·</span>\n        <span className="announcement__line">Serving families across Canada</span>\n      </div>
      <header className="site-header">
        <div className="site-header__inner shell">
          <Brand />
          <nav className="navigation" aria-label="Main navigation">
            <a href="/services">Who we recruit</a>
            <a href="/how-it-works">How it works</a>
            <a href="/pricing">Our fees</a>
            <a href="/locations">Locations</a>
          </nav>
          <a className="button button--dark header-cta" href="/contact">Start your search <Arrow /></a>
          <a className="mobile-menu" href="/contact" aria-label="Start your search"><Arrow /></a>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer__main">
        <Brand inverted />
        <div><p>Thoughtful private household recruitment for Canadian families.</p><a href={"mailto:" + enquiryEmail}>{enquiryEmail}</a></div>
        <div className="footer__links"><a href="/services">Our services</a><a href="/pricing">Our fees</a><a href="/locations">Locations</a><a href="/contact">Contact</a></div>
      </div>
      <div className="shell footer__bottom"><span>© 2026 DomesticHelp.ca</span><span>Made for the way you live.</span></div>
    </footer>
  );
}

export function ClosingCTA({ heading = "Tell us who you’re hoping to find.", service, city }: { heading?: string; service?: string; city?: string }) {
  const query = new URLSearchParams();
  if (service) query.set("service", service);
  if (city) query.set("city", city);
  const suffix = query.toString();

  return (
    <section className="contact">
      <div className="shell contact__inner">
        <div><p className="eyebrow">Let’s make home easier</p><h2>{heading}</h2><p>A short conversation is all it takes to get started. We’ll listen, ask the right questions, and explain what happens next.</p></div>
        <a className="button button--light button--large" href={"/contact" + (suffix ? "?" + suffix : "")}>Start your search <Arrow /></a>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      {items.map((item) => (<span key={item.label}><span aria-hidden="true">/</span>{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</span>))}
    </nav>
  );
}

export function InteriorHero({ eyebrow, title, emphasis, description, breadcrumbs }: { eyebrow: string; title: string; emphasis: string; description: string; breadcrumbs: { label: string; href?: string }[] }) {
  return (
    <section className="interior-hero">
      <div className="shell">
        <Breadcrumbs items={breadcrumbs} />
        <div className="interior-hero__copy"><p className="eyebrow">{eyebrow}</p><h1>{title}<br /><em>{emphasis}</em></h1><p>{description}</p><a className="button button--dark button--large" href="/contact">Find your person <Arrow /></a></div>
      </div>
    </section>
  );
}
