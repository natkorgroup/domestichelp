import { Arrow, Check } from "./site-chrome";
import { steps } from "../lib/content";

export function RecruitmentPricing() {
  return (
    <div className="pricing-grid">
      <article className="price-card"><p className="price-card__eyebrow">Curated candidate search</p><div className="price-card__amount">$995</div><p className="price-card__sub">One focused search. Up to three introductions.</p><ul><li><Check /> A personal conversation about your needs</li><li><Check /> Targeted sourcing and candidate outreach</li><li><Check /> Up to three thoughtfully matched candidates</li><li><Check /> You handle the interviews and hiring</li></ul><a className="button button--outline" href="/contact?plan=curated-search">Start a curated search <Arrow /></a></article>
      <article className="price-card price-card--featured"><span className="price-card__badge">Coming soon</span><p className="price-card__eyebrow">Full household recruitment</p><div className="price-card__amount">10<span>%</span></div><p className="price-card__sub">Planned fee: 10% of your new employee’s annual salary.</p><ul><li><Check /> A tailored search and personal shortlisting</li><li><Check /> Interviews, references, and candidate checks</li><li><Check /> Help preparing the employment agreement</li><li><Check /> A 90-day replacement guarantee</li></ul><p className="price-card__credit">This service is not currently available. Join the interest list to hear when it launches.</p><a className="button button--light" href="/contact?plan=full-recruitment">Join the interest list <Arrow /></a></article>
    </div>
  );
}

export function RecruitmentProcess() {
  return <div className="process-grid">{steps.map((step, index) => (<article className="process-step" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>))}</div>;
}

export const faqs = [
  { question: "Are you a household staffing agency or a marketplace?", answer: "DomesticHelp.ca provides a personal household recruitment service. We source and introduce candidates for private families; we do not publish an open directory or ask families to search through a marketplace." },
  { question: "What does the $995 candidate search include?", answer: "Our curated search includes a conversation about your household, targeted candidate sourcing, and introductions to up to three relevant candidates. You arrange the interviews and make your own hiring decision." },
  { question: "How will the full recruitment fee be calculated?", answer: "Full household recruitment is coming soon and is not currently available. The planned fee is 10% of the employee’s agreed annual salary." },
  { question: "What is planned for full household recruitment?", answer: "The planned service includes a tailored search, personal shortlisting, interview coordination, relevant references and candidate checks, help preparing the employment agreement, and a 90-day replacement guarantee." },
  { question: "Can you help us prepare an employment agreement?", answer: "This support is planned as part of full household recruitment, which is coming soon and is not currently available." },
  { question: "Do you recruit support for ageing parents?", answer: "Yes. We recruit household assistants and senior companions who provide practical, strictly non-medical support, including companionship, meals, errands, and help with everyday household routines." },
  { question: "Is household payroll included in the recruitment fee?", answer: "No. Household payroll is an optional ongoing service priced at $70 per employee per month. It is available in Canadian provinces outside Quebec." },
  { question: "Do you recruit household staff in Montreal and Westmount?", answer: "Yes. We recruit private household staff in Montreal and Westmount, including English-speaking, French-speaking, and bilingual candidates where appropriate. Payroll support is not available in Quebec." },
  { question: "Do you place live-in household employees?", answer: "Yes. We can recruit live-in household help where the family and employee agree on the role, schedule, accommodation, time off, and other practical arrangements." },
  { question: "How do we get started?", answer: "Complete our enquiry form with your city, the type of household help you need, and a few details about your circumstances. We will follow up to discuss the most suitable search option." },
];

export function FAQList({ limit }: { limit?: number }) {
  return <div className="faq-list">{faqs.slice(0, limit).map((faq) => (<details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>))}</div>;
}

