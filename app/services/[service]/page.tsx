import { notFound } from "next/navigation";
import { Arrow, Check, ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../../components/site-chrome";
import { cities, getService, services } from "../../lib/content";
import { pageMetadata, structuredData } from "../../lib/seo";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).service);
  if (!service) return {};
  return pageMetadata({ title: service.title + " in Canada | Private Recruitment | DomesticHelp.ca", description: "Find a personally recruited " + service.singular + " for your Canadian household. " + service.summary + " Curated search or full recruitment.", path: "/services/" + service.slug });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).service);
  if (!service) notFound();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData({ "@context": "https://schema.org", "@type": "Service", name: service.title + " Recruitment", description: service.summary, provider: { "@type": "Organization", name: "DomesticHelp.ca", url: "https://domestichelp.ca" }, areaServed: { "@type": "Country", name: "Canada" } }) }} />
      <SiteHeader />
      <InteriorHero eyebrow="Personally recruited household staff" title={service.title + " who fit"} emphasis="the way your home works." description={service.introduction} breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]} />

      <section className="section-space"><div className="shell detail-split"><div><p className="eyebrow">Thoughtful private recruitment</p><h2>A person who understands<br /><em>what your home needs.</em></h2><p>{service.introduction}</p><p>{service.suitedFor}</p><a className="text-link" href={"/contact?service=" + service.slug}>Talk to us about your search <Arrow /></a></div><img className="detail-split__photo" src="/hero-household-help.png" alt={"A trusted " + service.singular + " supporting a Canadian private household"} /></div></section>

      <section className="detail-features section-space"><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">What the role can include</p><h2>Support shaped<br /><em>around your household.</em></h2></div><p className="section-intro">Responsibilities are agreed around your home, the employee’s experience, and the working arrangement you choose together.</p></div><div className="feature-list">{service.responsibilities.map((item) => (<div key={item}><Check />{item}</div>))}</div></div></section>

      <section className="section-space"><div className="shell detail-split detail-split--balanced"><div><p className="eyebrow">What we look for</p><h2>Experience matters.<br /><em>So does temperament.</em></h2><p>We consider not only whether someone can do the work, but whether their communication style, judgment, and availability suit the people they will be supporting.</p></div><ul className="quality-list">{service.qualities.map((quality) => (<li key={quality}><Check />{quality}</li>))}</ul></div></section>

      <section className="service-cities section-space"><div className="shell"><div className="section-heading"><p className="eyebrow">Across Canada</p><h2>Find a {service.singular}<br /><em>where you live.</em></h2></div><div className="city-links">{cities.map((city) => (<a href={"/locations/" + city.slug + "/" + service.slug} key={city.slug}>{city.name}, {city.abbreviation}<Arrow diagonal /></a>))}</div></div></section>

      <ClosingCTA heading={"Find the right " + service.singular + " for your home."} service={service.slug} />
      <SiteFooter />
    </main>
  );
}
