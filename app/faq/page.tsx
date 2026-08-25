import type { Metadata } from "next";
import { ClosingCTA, InteriorHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { FAQList } from "../components/recruitment-sections";

export const metadata: Metadata = { title: "Household Staffing and Recruitment Questions | DomesticHelp.ca", description: "Answers to common questions about household staffing, recruitment fees, private housekeepers, senior companions, employment agreements, and payroll.", alternates: { canonical: "/faq" } };

export default function FAQPage() {
  return <main><SiteHeader /><InteriorHero eyebrow="Frequently asked questions" title="Good questions deserve" emphasis="straightforward answers." description="Learn how our household recruitment service works, what each fee covers, where we operate, and how to get started." breadcrumbs={[{ label: "Frequently asked questions" }]} /><section className="section-space"><div className="shell faq-section"><FAQList /></div></section><ClosingCTA /><SiteFooter /></main>;
}
