import { Link } from "react-router-dom";

const styles = {
  page: "min-h-screen bg-[#f5f9fc] text-[#1f2937]",
  notice: "border-b border-[#d6e3ee] bg-[#eef7ff] px-5 py-3 text-center text-sm text-[#35556f]",
  header: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6",
  brand: "text-xl font-bold text-[#16324f]",
  homeLink: "text-sm font-semibold text-[#2563eb] hover:underline",
  hero: "border-y border-[#fecdd3] bg-[#fff1f2]",
  heroInner: "mx-auto max-w-5xl px-6 py-16",
  eyebrow: "text-sm font-bold uppercase tracking-[0.22em] text-[#9f1239]",
  title: "mt-4 text-4xl font-bold tracking-tight text-[#881337] md:text-5xl",
  introduction: "mt-5 max-w-3xl text-lg leading-8 text-[#7f1d1d]",
  content: "mx-auto max-w-7xl px-6 py-16",
  stepGrid: "mt-10 grid gap-6 md:grid-cols-2",
  stepCard: "rounded-[1.5rem] border border-[#d6e3ee] bg-white p-7 shadow-sm",
  stepNumber: "text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]",
  stepTitle: "mt-3 text-2xl font-bold text-[#16324f]",
  stepText: "mt-3 leading-7 text-[#526b80]",
  urgentCard: "mt-8 rounded-[1.5rem] border border-[#fecdd3] bg-[#fff1f2] p-7",
  officialLink: "font-semibold text-[#2563eb] hover:underline",
  footer: "bg-[#16324f] px-6 py-10 text-center text-sm text-white",
};

const informationSteps = [
  {
    title: "Medicare number",
    text: "Call 1-800-MEDICARE (1-800-633-4227). Explain what happened, ask whether any enrollment or suspicious activity appears, and follow Medicare’s instructions.",
  },
  {
    title: "Social Security number",
    text: "Visit IdentityTheft.gov for a recovery plan. Review credit reports and consider a fraud alert or credit freeze if appropriate.",
  },
  {
    title: "Bank or card information",
    text: "Call the bank or card issuer using the number printed on the card or statement. Ask them to secure the account and review recent transactions.",
  },
  {
    title: "Password or verification code",
    text: "Change the affected password from the service’s official website. Change reused passwords too, enable multi-factor authentication, and review account activity.",
  },
  {
    title: "Permission to enroll",
    text: "Call 1-800-MEDICARE and the plan using an independently verified number. Ask what enrollment was submitted, its effective date, and what options exist to correct it.",
  },
  {
    title: "Remote access to a device",
    text: "Disconnect the device from the internet, stop using it for sensitive accounts, and obtain help from a trusted technician. Change important passwords from another safe device.",
  },
];

export default function AlreadySharedInformation() {
  return (
    <main className={styles.page}>
      <div className={styles.notice}>
        Educational resource only. Not affiliated with Medicare, CMS, HHS, Social Security, or any government agency.
      </div>

      <header className={styles.header}>
        <Link to="/" className={styles.brand}>Medicare Before You Switch</Link>
        <Link to="/" className={styles.homeLink}>← Back to home</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Take the next safe step</p>
          <h1 className={styles.title}>I already gave them my information. What should I do?</h1>
          <p className={styles.introduction}>
            Do not feel embarrassed. High-pressure calls and official-looking advertisements
            are designed to create trust and urgency. Stop communicating with the caller,
            write down what happened, and use the steps below.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <p className={styles.stepNumber}>First actions</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-bold text-[#16324f]">
          Identify what was shared, then contact the real organization directly.
        </h2>

        <div className={styles.stepGrid}>
          {informationSteps.map((step, index) => (
            <article key={step.title} className={styles.stepCard}>
              <p className={styles.stepNumber}>Step {index + 1}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.urgentCard}>
          <p className={styles.eyebrow}>If money was sent</p>
          <h2 className="mt-3 text-3xl font-bold text-[#881337]">Contact the payment provider immediately.</h2>
          <p className="mt-4 leading-7 text-[#7f1d1d]">
            Tell the bank, card issuer, wire service, or payment application that the payment
            may have resulted from fraud. Ask whether it can be stopped or reversed. Then use
            the FTC’s recovery guidance at{" "}
            <a className={styles.officialLink} href="https://www.identitytheft.gov/" target="_blank" rel="noreferrer">IdentityTheft.gov</a>.
          </p>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-7">
          <h2 className="text-2xl font-bold text-[#16324f]">Keep a record</h2>
          <p className="mt-3 leading-7 text-[#526b80]">
            Save the advertisement, phone number, website, company name, date, time, names used,
            promises made, information shared, and any confirmation numbers. Do not include
            Medicare or Social Security numbers in an ordinary email or online complaint form.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>Published by Stabile USA as an independent educational resource.</footer>
    </main>
  );
}