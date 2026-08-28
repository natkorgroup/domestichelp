import type { Metadata } from "next";
import { Arrow, ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { FAQList, RecruitmentPricing } from "../components/recruitment-sections";

export const metadata: Metadata = { title: "Household Staff Recruitment Fees | DomesticHelp.ca", description: "Start with a $995 curated household staff search. Full recruitment is coming soon with a planned fee of 10% of annual salary. Optional household payroll is $70 per employee per month.", alternates: { canonical: "/pricing" } };

export default function PricingPage() {
  return <main><SiteHeader /><InteriorHero eyebrow="Simple, transparent pricing" title="A clearer way" emphasis="to find the right person." description="Begin with a focused shortlist of up to three candidates. Full household recruitment with references, agreement support, and a replacement guarantee is coming soon." breadcrumbs={[{ label: "Our fees" }]} /><section className="pricing section-space"><div className="shell"><div className="section-heading section-heading--center"><p className="eyebrow">Recruitment options</p><h2>Choose the search<br /><em>that suits your household.</em></h2></div><RecruitmentPricing /><div className="payroll"><div><p className="eyebrow">Optional, ongoing support</p><h3>Payroll, taken care of.</h3><p>Available across Canada, except Quebec.</p></div><div className="payroll__price">$70<span> / month per employee</span></div><a className="text-link" href="/payroll">Learn about payroll <Arrow /></a></div></div></section><section className="section-space"><div className="shell faq-section"><div className="section-heading"><p className="eyebrow">Common questions</p><h2>Fees without<br /><em>the guesswork.</em></h2></div><FAQList limit={6} /></div></section><ClosingCTA /><SiteFooter /></main>;
}

