"use client";

import { useEffect, useState, type FormEvent } from "react";
import { cities, services } from "../lib/content";

type SubmissionState = "idle" | "sending" | "success" | "error";

const emptyValues = { name: "", email: "", phone: "", city: "", service: "", plan: "", schedule: "", startDate: "", message: "", website: "", consent: false };

export function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [state, setState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const city = query.get("city") ?? "";
    const service = query.get("service") ?? "";
    const plan = query.get("plan") ?? "";
    setValues((previous) => ({ ...previous, city, service, plan }));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Something went wrong. Please try again.");
      setState("success");
      setValues(emptyValues);
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return <div className="form-success" role="status"><span>✓</span><h3>Thank you — we’ve received your enquiry.</h3><p>Our team will review the information you shared and contact you within 1–2 business days to discuss the right support for your household and explain the next steps.</p><p>There is no need to submit another enquiry. If you need to add anything, email us at <a href="mailto:hello@domestichelp.ca">hello@domestichelp.ca</a>.</p><button className="button button--outline" onClick={() => setState("idle")} type="button">Send another enquiry</button></div>;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Your name <input autoComplete="name" required value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} placeholder="Full name" maxLength={100} /></label>
        <label>Email address <input autoComplete="email" required type="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} placeholder="you@example.com" maxLength={160} /></label>
        <label>Phone number <input autoComplete="tel" type="tel" value={values.phone} onChange={(event) => setValues({ ...values, phone: event.target.value })} placeholder="Optional" maxLength={40} /></label>
        <label>Where is your household? <select required value={values.city} onChange={(event) => setValues({ ...values, city: event.target.value })}><option value="">Choose your city</option>{cities.map((city) => (<option key={city.slug} value={city.slug}>{city.name}, {city.abbreviation}</option>))}<option value="other">Another Canadian community</option></select></label>
        <label>Who are you hoping to find? <select required value={values.service} onChange={(event) => setValues({ ...values, service: event.target.value })}><option value="">Choose the kind of help</option>{services.map((service) => (<option key={service.slug} value={service.slug}>{service.title}</option>))}<option value="not-sure">I’m not sure yet</option></select></label>
        <label>Which search interests you? <select value={values.plan} onChange={(event) => setValues({ ...values, plan: event.target.value })}><option value="">Help me decide</option><option value="curated-search">Curated candidate search — $995</option><option value="full-recruitment">Full recruitment — coming soon</option><option value="payroll">Household payroll — $70 per month</option></select></label>
        <label>Preferred schedule <select value={values.schedule} onChange={(event) => setValues({ ...values, schedule: event.target.value })}><option value="">Not decided yet</option><option value="full-time">Full-time</option><option value="part-time">Part-time</option><option value="live-in">Live-in</option><option value="flexible">Flexible</option></select></label>
        <label>When would you like to start? <input type="text" value={values.startDate} onChange={(event) => setValues({ ...values, startDate: event.target.value })} placeholder="For example: within one month" maxLength={100} /></label>
      </div>
      <label className="form-message">Tell us a little about your household <textarea required value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} placeholder="Share what kind of support you need, who it is for, and anything that matters to your family." rows={5} maxLength={3000} /></label>
      <div className="form-honeypot" aria-hidden="true"><label>Website <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => setValues({ ...values, website: event.target.value })} /></label></div>
      <label className="form-consent"><input required type="checkbox" checked={values.consent} onChange={(event) => setValues({ ...values, consent: event.target.checked })} /> I agree that DomesticHelp.ca may contact me about this enquiry.</label>
      {state === "error" && <p className="form-error" role="alert">{errorMessage}</p>}
      <button className="button button--dark button--large form-submit" disabled={state === "sending"} type="submit">{state === "sending" ? "Sending your enquiry…" : "Send your enquiry"}<span aria-hidden="true">→</span></button>
      <p className="form-privacy">Your details are used only to follow up on your household recruitment enquiry.</p>
    </form>
  );
}

