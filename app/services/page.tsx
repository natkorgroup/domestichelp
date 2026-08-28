import type { Metadata } from "next";
import { Arrow, ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { services } from "../lib/content";

export const metadata: Metadata = {
  title: "Private Household Staffing Services in Canada | DomesticHelp.ca",
  description: "Find personally recruited housekeepers, live-in household staff, domestic couples, senior companions, private cooks, and household managers across Canada.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <InteriorHero eyebrow="Private household recruitment" title="The right kind of help" emphasis="for the life you actually live." description="We recruit experienced people for private Canadian households, taking the time to find a genuine fit for your routines, preferences, and family." breadcrumbs={[{ label: "Services" }]} />
      <section className="section-space"><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">Who we recruit</p><h2>Practical support.<br /><em>Personally matched.</em></h2></div><p className="section-intro">From experienced housekeepers to non-medical senior companions, every search starts with understanding what your home genuinely needs.</p></div><div className="roles-grid roles-grid--complete">{services.map((service, index) => (<article className="role-card" key={service.slug}><span className="role-card__number">{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.summary}</p><a href={"/services/" + service.slug} aria-label={"Learn about " + service.title}><Arrow diagonal /></a></article>))}</div></div></section>
      <ClosingCTA />
      <SiteFooter />
    </main>
  );
}

