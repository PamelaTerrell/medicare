import { Link } from "react-router-dom";

const styles = {
  page: "min-h-screen bg-[#eef7ff] text-[#16324f] print:bg-white",
  screenHeader: "mx-auto flex max-w-5xl items-center justify-between px-6 py-6 print:hidden",
  brand: "text-xl font-bold",
  homeLink: "text-sm font-semibold text-[#2563eb] hover:underline",
  controls: "mx-auto flex max-w-5xl flex-wrap gap-3 px-6 pb-6 print:hidden",
  printButton: "rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]",
  card: "mx-auto mb-12 max-w-4xl border-4 border-[#16324f] bg-white p-8 shadow-2xl print:mb-0 print:max-w-none print:border-4 print:p-8 print:shadow-none",
  warning: "text-center text-5xl font-black tracking-tight text-[#9f1239] md:text-6xl",
  instruction: "mx-auto mt-5 max-w-3xl text-center text-2xl font-bold leading-tight text-[#16324f]",
  ruleBox: "mt-8 border-2 border-[#fecdd3] bg-[#fff1f2] p-6",
  ruleTitle: "text-3xl font-black text-[#881337]",
  ruleList: "mt-4 space-y-3 text-xl font-semibold leading-8 text-[#7f1d1d]",
  scriptBox: "mt-8 border-2 border-[#bfdbfe] bg-[#eef7ff] p-6",
  script: "mt-3 text-3xl font-bold leading-tight text-[#16324f]",
  contactGrid: "mt-8 grid gap-5 md:grid-cols-2",
  contactBox: "border-2 border-[#d6e3ee] p-5",
  contactLabel: "text-sm font-bold uppercase tracking-[0.18em] text-[#526b80]",
  contactValue: "mt-2 text-2xl font-black text-[#16324f]",
  blankLine: "mt-5 border-b-2 border-[#16324f] pb-2 text-lg",
};

export default function PhoneSafetyCard() {
  return (
    <main className={styles.page}>
      <header className={styles.screenHeader}>
        <Link to="/" className={styles.brand}>Medicare Before You Switch</Link>
        <Link to="/" className={styles.homeLink}>← Back to home</Link>
      </header>

      <div className={styles.controls}>
        <button type="button" onClick={() => window.print()} className={styles.printButton}>
          Print This Card
        </button>
        <p className="self-center text-sm text-[#526b80]">Print it and place it beside the telephone.</p>
      </div>

      <section className={styles.card}>
        <p className="text-center text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
          Put this by the phone
        </p>
        <h1 className={styles.warning}>STOP. DO NOT RUSH.</h1>
        <p className={styles.instruction}>
          You do not have to make an insurance or Medicare decision during an unexpected call.
        </p>

        <div className={styles.ruleBox}>
          <h2 className={styles.ruleTitle}>Do not give the caller:</h2>
          <ul className={styles.ruleList}>
            <li>• Your Medicare number</li>
            <li>• Your Social Security number</li>
            <li>• Bank or credit-card information</li>
            <li>• Passwords or verification codes</li>
            <li>• Permission to enroll before you verify the offer</li>
          </ul>
        </div>

        <div className={styles.scriptBox}>
          <p className={styles.contactLabel}>What to say</p>
          <p className={styles.script}>
            “I do not make insurance decisions during incoming calls. I will verify this independently.”
          </p>
          <p className="mt-4 text-xl font-semibold text-[#35556f]">Then hang up. Do not call the number they provided.</p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactBox}>
            <p className={styles.contactLabel}>Official Medicare number</p>
            <p className={styles.contactValue}>1-800-MEDICARE</p>
            <p className="mt-1 text-lg">1-800-633-4227</p>
          </div>
          <div className={styles.contactBox}>
            <p className={styles.contactLabel}>Senior Medicare Patrol</p>
            <p className={styles.contactValue}>1-877-808-2468</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div><p className={styles.contactLabel}>Trusted family contact</p><p className={styles.blankLine}>Name:</p><p className={styles.blankLine}>Phone:</p></div>
          <div><p className={styles.contactLabel}>My benefits or SHIP contact</p><p className={styles.blankLine}>Name:</p><p className={styles.blankLine}>Phone:</p></div>
        </div>

        <p className="mt-8 border-t border-[#d6e3ee] pt-5 text-center text-xs leading-5 text-[#526b80]">
          MedicareBeforeYouSwitch.com · Published by Stabile USA · Independent education only · Not affiliated with Medicare, CMS, HHS, or any government agency.
        </p>
      </section>
    </main>
  );
}