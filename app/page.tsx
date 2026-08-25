import { Arrow, Check, ClosingCTA, SiteFooter, SiteHeader } from "./components/site-chrome";
import { cities, regions, services, steps } from "./lib/content";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero">
        <div className="hero__inner shell">
          <div className="hero__copy">
            <p className="eyebrow"><span className="status-dot" /> Personal, private recruitment</p>
            <h1>The right person makes home <em>feel easier.</em></h1>
            <p className="hero__description">For families who want a little more ease at home, we personally find the household help that fits your life — and the people you love.</p>
            <div className="hero__actions">
              <a className="button button--dark button--large" href="/contact">Find your person <Arrow /></a>
              <a className="text-link" href="/how-it-works">See how it works <Arrow /></a>
            </div>
            <p className="hero__note"><Check /> Carefully matched. Personally recruited. Entirely discreet.</p>
          </div>

          <div className="hero__visual">
            <img className="hero__photo" src="/hero-household-help.png" alt="An experienced household assistant and an older homeowner planning the day together in a welcoming Canadian home" />
            <div className="hero__caption"><span className="status-dot status-dot--light" /> Finding your kind of help, across Canada.</div>
          </div>
        </div>
      </section>

      <section className="reassurance" aria-label="Service highlights">
        <div className="shell reassurance__inner">
          <span>For private households</span><span>Personally shortlisted</span><span>Canadian families</span><span>Discreet by design</span>
        </div>
      </section>

      <section className="roles section-space" id="roles">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow">The people we find</p><h2>Good help changes<br /><em>how home feels.</em></h2></div>
            <p className="section-intro">Every household is different. We find the person whose experience, temperament, and availability suit yours.</p>
          </div>
          <div className="roles-grid">
            {services.slice(0, 6).map((role, index) => (
              <article className="role-card" key={role.slug}>
                <span className="role-card__number">0{index + 1}</span>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                <a href={"/services/" + role.slug} aria-label={"Learn about " + role.title}><Arrow diagonal /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="parents section-space">
        <div className="shell parents__inner">
          <div className="parents__portrait">
            <img src="/hero-household-help.png" alt="An older woman enjoying the support of a trusted household companion in her own home" />
            <p>Support that feels like a natural part of home.</p>
          </div>
          <div className="parents__copy">
            <p className="eyebrow">For ageing parents</p>
            <h2>They don’t need a facility.<br /><em>They need the right person.</em></h2>
            <p>Sometimes staying comfortably at home simply means having someone dependable close by — for meals, errands, conversation, and the little things that make a day feel easier.</p>
            <ul><li><Check /> Friendly, non-medical companionship</li><li><Check /> Meal preparation and household support</li><li><Check /> Errands, appointments, and daily routines</li></ul>
            <a className="text-link" href="/for-ageing-parents">Find support for someone you love <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="process section-space" id="process">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">A more personal process</p><h2>From your first conversation<br /><em>to the right fit.</em></h2></div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <article className="process-step" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section-space" id="pricing">
        <div className="shell">
          <div className="section-heading section-heading--center"><p className="eyebrow">Simple, transparent fees</p><h2>Choose the search<br /><em>that suits your home.</em></h2></div>
          <div className="pricing-grid">
            <article className="price-card">
              <p className="price-card__eyebrow">Curated candidate search</p><div className="price-card__amount">$995</div><p className="price-card__sub">One focused search. Up to three introductions.</p>
              <ul><li><Check /> A personal conversation about your needs</li><li><Check /> Targeted sourcing and candidate outreach</li><li><Check /> Up to three thoughtfully matched candidates</li><li><Check /> You handle the interviews and hiring</li></ul>
              <a className="button button--outline" href="/contact?plan=curated-search">Start a curated search <Arrow /></a>
            </article>
            <article className="price-card price-card--featured">
              <span className="price-card__badge">Most complete</span><p className="price-card__eyebrow">Full household recruitment</p><div className="price-card__amount">10<span>%</span></div><p className="price-card__sub">Of your new employee’s annual salary.</p>
              <ul><li><Check /> A tailored search and personal shortlisting</li><li><Check /> Interviews, references, and candidate checks</li><li><Check /> Help preparing the employment agreement</li><li><Check /> A 90-day replacement guarantee</li></ul>
              <p className="price-card__credit">A $500 search commencement is credited toward your final fee.</p>
              <a className="button button--light" href="/contact?plan=full-recruitment">Begin full recruitment <Arrow /></a>
            </article>
          </div>
          <div className="payroll"><div><p className="eyebrow">Optional, ongoing support</p><h3>Payroll, taken care of.</h3><p>Household payroll support is available across Canada, except Quebec.</p></div><div className="payroll__price">$70<span> / month per employee</span></div><a className="text-link" href="/payroll">Add payroll <Arrow /></a></div>
        </div>
      </section>

      <section className="locations section-space" id="locations">
        <div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">Where we work</p><h2>Local understanding.<br /><em>Across Canada.</em></h2></div><p className="section-intro">Thoughtful recruitment for households in the neighbourhoods where experience, discretion, and the right fit matter.</p></div>
          <div className="locations-grid">{regions.map((region) => (<article className="region" key={region}><h3>{region}</h3><ul>{cities.filter((city) => city.region === region).map((city) => (<li key={city.slug}><a href={"/locations/" + city.slug}>{city.name}<Arrow diagonal /></a></li>))}</ul></article>))}</div>
        </div>
      </section>

      <ClosingCTA />
      <SiteFooter />
    </main>
  );
}
