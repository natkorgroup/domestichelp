import { notFound } from "next/navigation";
import { Arrow, Check, ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../../components/site-chrome";
import { cities, getCity, services } from "../../lib/content";
import { pageMetadata, structuredData } from "../../lib/seo";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const city = getCity((await params).city);
  if (!city) return {};
  return pageMetadata({ title: "Private Household Staff in " + city.name + ", " + city.abbreviation + " | DomesticHelp.ca", description: "Find a trusted housekeeper, household assistant, senior companion, private cook, or household manager in " + city.name + ". Personal private household recruitment.", path: "/locations/" + city.slug });
}

export default async function CityPage({ params }: Props) {
  const city = getCity((await params).city);
  if (!city) notFound();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData({ "@context": "https://schema.org", "@type": "Service", name: "Private Household Staff Recruitment in " + city.name, provider: { "@type": "Organization", name: "DomesticHelp.ca" }, areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "AdministrativeArea", name: city.province } } }) }} />
      <SiteHeader />
      <InteriorHero eyebrow={city.name + ", " + city.province} title={"The right household help"} emphasis={"for your " + city.name + " home."} description={city.description + " We personally recruit the people who make everyday life more comfortable, organized, and manageable."} breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: city.name }]} />

      <section className="section-space"><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">Who we recruit locally</p><h2>{city.name} households.<br /><em>Personally matched.</em></h2></div><p className="section-intro">Choose the kind of support that suits your home, your family, and the level of help you genuinely need.</p></div><div className="roles-grid roles-grid--complete">{services.map((service, index) => (<article className="role-card" key={service.slug}><span className="role-card__number">{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.summary}</p><a href={"/locations/" + city.slug + "/" + service.slug} aria-label={service.title + " in " + city.name}><Arrow diagonal /></a></article>))}</div></div></section>

      <section className="detail-features section-space"><div className="shell detail-split detail-split--balanced"><div><p className="eyebrow">Local understanding</p><h2>Private recruitment<br /><em>throughout {city.name}.</em></h2><p>{city.description} We understand that availability, travel time, and the right personal fit all influence whether a placement will work over the long term.</p>{city.region === "Quebec" && <p>We can discuss English-speaking, French-speaking, or bilingual household preferences. Payroll support is not offered in Quebec.</p>}</div><div className="neighbourhoods"><h3>Communities we can discuss</h3><ul>{city.neighbourhoods.map((name) => (<li key={name}><Check />{name}</li>))}</ul></div></div></section>

      <section className="section-space"><div className="shell local-pricing"><p className="eyebrow">Transparent recruitment fees</p><h2>A focused search, or full support.</h2><p>Meet up to three thoughtfully matched candidates for <strong>$995</strong>, or choose full household recruitment for <strong>10% of the employee’s annual salary</strong>.</p><a className="text-link" href="/pricing">See the full fee structure <Arrow /></a></div></section>
      <ClosingCTA heading={"Find the right person for your " + city.name + " home."} city={city.slug} />
      <SiteFooter />
    </main>
  );
}
