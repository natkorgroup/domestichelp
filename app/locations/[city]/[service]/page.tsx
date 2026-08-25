import { notFound } from "next/navigation";
import { Arrow, Check, ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../../../components/site-chrome";
import { cities, getCity, getService, services } from "../../../lib/content";
import { pageMetadata, structuredData } from "../../../lib/seo";

type Props = { params: Promise<{ city: string; service: string }> };

export function generateStaticParams() {
  return cities.flatMap((city) => services.map((service) => ({ city: city.slug, service: service.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return {};
  return pageMetadata({ title: service.title + " in " + city.name + ", " + city.abbreviation + " | DomesticHelp.ca", description: "Find a personally recruited " + service.singular + " in " + city.name + ", " + city.province + ". " + service.summary + " Private household recruitment.", path: "/locations/" + city.slug + "/" + service.slug });
}

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) notFound();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData({ "@context": "https://schema.org", "@type": "Service", name: service.title + " in " + city.name, description: service.summary, provider: { "@type": "Organization", name: "DomesticHelp.ca" }, areaServed: { "@type": "City", name: city.name } }) }} />
      <SiteHeader />
      <InteriorHero eyebrow={service.title + " · " + city.name + ", " + city.abbreviation} title={service.title + " in " + city.name} emphasis="personally recruited for home." description={service.introduction + " We help " + city.name + " families find the person whose experience, availability, and temperament suit their household."} breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: city.name, href: "/locations/" + city.slug }, { label: service.title }]} />

      <section className="section-space"><div className="shell detail-split"><div><p className="eyebrow">Local household recruitment</p><h2>The right {service.singular}<br /><em>for your {city.name} home.</em></h2><p>{service.introduction}</p><p>{service.suitedFor} We discuss the schedule, practical responsibilities, and personal qualities that will help the arrangement work.</p><p>We can discuss households in {city.neighbourhoods.slice(0, 3).join(", ")} and nearby {city.name}-area communities.</p></div><img className="detail-split__photo" src="/hero-household-help.png" alt={"An experienced " + service.singular + " supporting a private household in " + city.name} /></div></section>

      <section className="detail-features section-space"><div className="shell"><div className="section-heading"><p className="eyebrow">What support can include</p><h2>{service.title} in {city.name}<br /><em>matched to real household needs.</em></h2></div><div className="feature-list">{service.responsibilities.map((item) => (<div key={item}><Check />{item}</div>))}</div></div></section>

      <section className="section-space"><div className="shell detail-split detail-split--balanced"><div><p className="eyebrow">Recruitment options</p><h2>A clearer way to hire<br /><em>in {city.name}.</em></h2><p>Choose a curated candidate search for <strong>$995</strong> and meet up to three relevant candidates, or full recruitment for <strong>10% of annual salary</strong>, including references, agreement support, and a 90-day replacement guarantee.</p>{city.region !== "Quebec" ? <p>Optional household payroll support is available for <strong>$70 per employee per month</strong>.</p> : <p>We recruit household staff in Quebec; optional payroll support is not available in this province.</p>}<a className="text-link" href="/pricing">Compare recruitment options <Arrow /></a></div><ul className="quality-list">{service.qualities.map((quality) => (<li key={quality}><Check />{quality}</li>))}</ul></div></section>

      <ClosingCTA heading={"Find a " + service.singular + " in " + city.name + "."} service={service.slug} city={city.slug} />
      <SiteFooter />
    </main>
  );
}
