import { Link } from "react-router-dom";

const styles = {
  page: "min-h-screen bg-[#f5f9fc] text-[#1f2937]",
  notice: "border-b border-[#d6e3ee] bg-[#eef7ff] px-5 py-3 text-center text-sm text-[#35556f]",
  header: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6",
  brand: "text-xl font-bold text-[#16324f]",
  homeLink: "text-sm font-semibold text-[#2563eb] hover:underline",
  hero: "border-y border-[#d6e3ee] bg-gradient-to-br from-[#16324f] via-[#1e4f78] to-[#0f766e] text-white",
  heroInner: "mx-auto max-w-5xl px-6 py-16",
  eyebrow: "text-sm font-bold uppercase tracking-[0.22em] text-[#bfdbfe]",
  title: "mt-4 text-4xl font-bold tracking-tight md:text-5xl",
  introduction: "mt-5 max-w-3xl text-lg leading-8 text-[#eaf4fb]",
  content: "mx-auto max-w-7xl px-6 py-16",
  optionGrid: "mt-10 grid gap-6 md:grid-cols-2",
  optionCard: "rounded-[1.5rem] border border-[#d6e3ee] bg-white p-7 shadow-sm",
  optionTitle: "text-2xl font-bold text-[#16324f]",
  optionText: "mt-3 leading-7 text-[#526b80]",
  optionLink: "mt-5 inline-flex font-semibold text-[#2563eb] hover:underline",
  footer: "bg-[#16324f] px-6 py-10 text-center text-sm text-white",
};

const reportingOptions = [
  {
    title: "Suspicious Medicare contact or Medicare-number misuse",
    text: "Call 1-800-MEDICARE (1-800-633-4227). Use this for suspicious Medicare contacts, possible unauthorized enrollment, or concern that a Medicare number was misused.",
    label: "Medicare fraud and abuse guidance",
    href: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse",
  },
  {
    title: "Medicare fraud, errors, or abuse",
    text: "Senior Medicare Patrol helps beneficiaries, families, and caregivers prevent, detect, and report Medicare fraud, errors, and abuse. Call 1-877-808-2468.",
    label: "Find Senior Medicare Patrol help",
    href: "https://smpresource.org/you-can-help/report-fraud/",
  },
  {
    title: "Government impersonation or deceptive sales tactics",
    text: "Report an impersonation scam or misleading solicitation to the Federal Trade Commission. Do not include sensitive identification numbers in the narrative.",
    label: "ReportFraud.ftc.gov",
    href: "https://reportfraud.ftc.gov/",
  },
  {
    title: "Life, auto, or other private insurance concern",
    text: "Contact your state department of insurance to check an insurer or agent and submit a complaint about insurance marketing or sales conduct.",
    label: "Find your state insurance department",
    href: "https://content.naic.org/state-insurance-departments",
  },
  {
    title: "Unresolved Medicare rights or complaint concern",
    text: "Call 1-800-MEDICARE and ask for help from the Medicare Beneficiary Ombudsman when a Medicare concern has not been resolved.",
    label: "Medicare rights and protections",
    href: "https://www.medicare.gov/basics/your-medicare-rights/get-help-with-your-rights-protections",
  },
  {
    title: "Neutral Medicare counseling before a decision",
    text: "A State Health Insurance Assistance Program counselor can provide local Medicare counseling without insurance-sales pressure.",
    label: "Find local SHIP counseling",
    href: "https://www.shiphelp.org/",
  },
];

export default function ReportInsuranceConcern() {
  return (
    <main className={styles.page}>
      <div className={styles.notice}>Educational resource only. Not affiliated with Medicare, CMS, HHS, or any government agency.</div>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>Medicare Before You Switch</Link>
        <Link to="/" className={styles.homeLink}>← Back to home</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Official reporting help</p>
          <h1 className={styles.title}>Where should I report this?</h1>
          <p className={styles.introduction}>
            Choose the description that best matches what happened. Use the organization’s
            official website or published telephone number—not contact information supplied
            by the caller or advertisement.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="rounded-[1.5rem] border border-[#fde68a] bg-[#fffbeb] p-6 text-[#78350f]">
          <strong>Before reporting:</strong> save the advertisement, caller’s number, website,
          date, time, company name, and notes. Do not place a full Medicare number, Social
          Security number, bank number, or password in a general complaint narrative.
        </div>

        <div className={styles.optionGrid}>
          {reportingOptions.map((option) => (
            <article key={option.title} className={styles.optionCard}>
              <h2 className={styles.optionTitle}>{option.title}</h2>
              <p className={styles.optionText}>{option.text}</p>
              <a className={styles.optionLink} href={option.href} target="_blank" rel="noreferrer">
                {option.label} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>Published by Stabile USA as an independent educational resource.</footer>
    </main>
  );
}