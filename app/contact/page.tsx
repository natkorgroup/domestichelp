import type { Metadata } from "next";
import { InteriorHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { ContactForm } from "../components/contact-form";
import { enquiryEmail } from "../lib/content";

export const metadata: Metadata = { title: "Contact Our Household Recruitment Agency | DomesticHelp.ca", description: "Tell DomesticHelp.ca what kind of household help you need. Contact our private household staffing team about housekeepers, senior companions, and family assistants.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main><SiteHeader /><InteriorHero eyebrow="Let’s talk about your home" title="Tell us who you’re" emphasis="hoping to find." description="Share a few details about your household and the support you need. We will follow up to discuss the right kind of search for your family." breadcrumbs={[{ label: "Contact" }]} /><section className="section-space"><div className="shell contact-page"><div className="contact-page__intro"><p className="eyebrow">A more personal first conversation</p><h2>Tell us about<br /><em>your household.</em></h2><p>Whether you already know who you need or want help figuring it out, a few thoughtful details are enough to get the conversation started.</p><a className="contact-page__email" href={"mailto:" + enquiryEmail}>{enquiryEmail}</a><p>Supporting private households in Ontario, British Columbia, Alberta, and Quebec.</p></div><ContactForm /></div></section><SiteFooter /></main>;
}
