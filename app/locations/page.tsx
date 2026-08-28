import type { Metadata } from "next";
import { Arrow, ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { cities, regions } from "../lib/content";

export const metadata: Metadata = { title: "Household Staff Recruitment Across Canada | DomesticHelp.ca", description: "Find private household staff in Toronto, Ottawa, Vancouver, Calgary, Edmonton, Montreal, Oakville, Westmount, and other Canadian communities.", alternates: { canonical: "/locations" } };

export default function LocationsPage() {
  return (
    <main>
      <SiteHeader />
      <InteriorHero eyebrow="Private household staffing across Canada" title="Close to the places" emphasis="you call home." description="From Toronto and Ottawa to Vancouver, Calgary, Edmonton, Montreal, and Westmount, we help families find experienced household staff with a thoughtful, personal approach." breadcrumbs={[{ label: "Locations" }]} />
      <section className="section-space"><div className="shell location-index">{regions.map((region) => (<section className="location-index__region" key={region}><p className="eyebrow">{region}</p><h2>{region === "British Columbia" ? "British Columbia" : region + " households"}</h2><div className="location-index__cards">{cities.filter((city) => city.region === region).map((city) => (<a className="location-card" href={"/locations/" + city.slug} key={city.slug}><div><h3>{city.name}</h3><p>{city.description}</p></div><Arrow diagonal /></a>))}</div></section>))}</div></section>
      <ClosingCTA />
      <SiteFooter />
    </main>
  );
}

