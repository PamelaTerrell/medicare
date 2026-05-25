import { Link } from "react-router-dom";

const questions = [
  "Is this available in my exact ZIP code and county?",
  "Is this a Medicare Advantage plan, not Original Medicare?",
  "How much of my Part B premium would actually be reduced?",
  "Will my doctors, specialists, hospitals, pharmacy, and prescriptions still be covered?",
  "Will I need referrals or prior authorization?",
  "What is the plan’s maximum out-of-pocket cost?",
  "Could this affect retiree, union, employer, military, or other benefits?",
  "Can I review the Summary of Benefits and Evidence of Coverage before enrolling?",
];

const myths = [
  {
    title: "“It is free money from Medicare.”",
    text: "Usually, it is not free government cash. It is often a Part B premium reduction connected to certain Medicare Advantage plans.",
  },
  {
    title: "“Everyone qualifies.”",
    text: "Not everyone qualifies. Availability depends on your area, the plan, and your situation.",
  },
  {
    title: "“The biggest giveback is automatically the best plan.”",
    text: "A larger giveback does not mean the plan is best for you. Doctors, hospitals, prescriptions, costs, and plan rules still matter.",
  },
  {
    title: "“If it is advertised on TV, it must apply to me.”",
    text: "TV ads can be broad. You still need to check the exact plan available in your county and ZIP code.",
  },
];

const checks = [
  {
    label: "Check the plan name",
    text: "Ask for the exact plan name, carrier, county, and plan year. Do not rely only on the advertisement.",
  },
  {
    label: "Check the real amount",
    text: "Ask how much of the Part B premium would actually be reduced and when you would see the change.",
  },
  {
    label: "Check your providers",
    text: "Confirm your doctors, specialists, hospitals, labs, pharmacy, and medications using official plan documents.",
  },
  {
    label: "Check the tradeoffs",
    text: "Look for networks, referrals, prior authorization, copays, hospital costs, and the maximum out-of-pocket limit.",
  },
];

export default function SeniorGiveBackAllowance() {
  return (
    <main className="min-h-screen bg-[#f5f9fc] text-[#1f2937]">
      <div className="border-b border-[#d6e3ee] bg-[#eef7ff] px-5 py-3 text-center text-sm text-[#35556f]">
        Educational resource only. Not affiliated with Medicare, CMS, HHS, or any government agency.
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="tracking-tight">
          <span className="block text-xl font-bold text-[#16324f]">
            Medicare Before You Switch
          </span>
          <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-[#64748b]">
            A Stabile USA educational resource
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#526b80] md:flex">
          <Link to="/" className="hover:text-[#16324f]">
            Home
          </Link>
          <Link to="/check-before-you-switch" className="hover:text-[#16324f]">
            Check Before You Switch
          </Link>
          <a href="#questions" className="hover:text-[#16324f]">
            Questions
          </a>
          <a href="#disclaimer" className="hover:text-[#16324f]">
            Disclaimer
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden border-y border-[#d6e3ee] bg-gradient-to-br from-[#16324f] via-[#1e4f78] to-[#0f766e] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
            Plain-English Medicare education
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Senior Give Back Allowance: what it may really mean
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#eaf4fb]">
            Ads may say you can get money back, a giveback allowance, or more money in
            your Social Security check. Before you respond, make sure you understand what
            is being offered — and what may change if you enroll.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/check-before-you-switch"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#16324f] shadow-lg transition hover:bg-[#eef7ff]"
            >
              Check an Ad or Website
            </Link>

            <a
              href="#questions"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Questions to Ask First
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-[2rem] border border-[#bfdbfe] bg-[#eef7ff] p-7 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Simple explanation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16324f]">
            It is usually a Part B premium reduction.
          </h2>

          <p className="mt-5 leading-8 text-[#526b80]">
            A “give back” benefit usually means certain Medicare Advantage plans may reduce
            part of what you pay for Medicare Part B. It may show up as a lower Part B
            premium or more money in a Social Security payment if your Part B premium is
            deducted from your check.
          </p>

          <div className="mt-6 rounded-2xl border border-[#cfe0ee] bg-white p-5">
            <p className="font-bold text-[#16324f]">Important:</p>
            <p className="mt-2 text-sm leading-6 text-[#526b80]">
              A giveback benefit does not mean the plan is automatically better. It must be
              compared with doctors, hospitals, prescriptions, copays, referrals, prior
              authorization, and out-of-pocket costs.
            </p>
          </div>
        </aside>

        <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Before you trust the ad
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Do not ask only, “How much do I get back?”
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#526b80]">
            The better question is:
          </p>

          <div className="mt-5 rounded-[1.5rem] bg-[#f8fbff] p-6">
            <p className="text-3xl font-bold leading-tight text-[#2563eb]">
              “What changes if I enroll in this plan?”
            </p>
          </div>

          <p className="mt-6 leading-8 text-[#526b80]">
            A giveback benefit may be helpful for some people. But a Medicare coverage
            decision should never be based on the allowance alone.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Common misunderstandings
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            Wording that can confuse people
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {myths.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#d6e3ee] bg-[#f8fbff] p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#16324f]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#526b80]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="questions" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Questions to ask first
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Before switching for a giveback benefit, ask these questions.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {questions.map((question) => (
            <div
              key={question}
              className="rounded-2xl border border-[#d6e3ee] bg-white p-6 shadow-sm shadow-[#16324f]/5"
            >
              <p className="text-lg font-semibold leading-7 text-[#16324f]">
                {question}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf4fb]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            What to check
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            Verify the full plan, not just the giveback.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {checks.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-[#cfe0ee] bg-white p-6 shadow-sm shadow-[#16324f]/5"
              >
                <h3 className="text-xl font-bold text-[#16324f]">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526b80]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9f1239]">
            Important warning
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#881337]">
            Do not give up valuable coverage for a benefit you have not verified.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#7f1d1d]">
            If you have retiree, union, employer, military, Medicaid, Extra Help, or other
            benefits, check before switching. A giveback may sound helpful, but it should
            never replace a full review of what you already have and what could change.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d6e3ee] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Plain-language takeaway
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            A giveback benefit may help — but it is only one part of the decision.
          </h2>

          <p className="mt-6 leading-8 text-[#526b80]">
            Before you switch Medicare coverage, compare the whole plan. The right question
            is not only whether money comes back. The right question is whether the plan
            still protects your access to the care, providers, prescriptions, and benefits
            you depend on.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/check-before-you-switch"
              className="rounded-full bg-[#2563eb] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
            >
              Check Before You Switch
            </Link>

            <a
              href="https://www.medicare.gov/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-center text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]"
            >
              Visit Medicare.gov
            </a>
          </div>
        </div>
      </section>

      <section id="disclaimer" className="bg-[#f8fbff]">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-[#16324f]">
            Important disclaimer
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#526b80]">
            MedicareBeforeYouSwitch.com is an independent educational resource published
            by Stabile USA. It is not affiliated with Medicare, CMS, HHS, or any
            government agency. The information on this page is for general education only
            and should not be treated as legal, financial, medical, or personal insurance
            advice. Before changing Medicare coverage, verify details with Medicare.gov,
            the plan’s official documents, your retiree benefits administrator, a SHIP
            counselor, or a properly licensed professional.
          </p>
        </div>
      </section>

      <footer className="bg-[#16324f] px-6 py-10 text-center text-sm text-white">
        <p className="text-xl font-bold">Medicare Before You Switch</p>

        <p className="mt-3 text-[#cfe0ee]">
          Understand the full Medicare decision — not just the allowance in the commercial.
        </p>

        <p className="mt-5 text-xs text-[#bfd4e5]">
          Published by Stabile USA, an independent educational media brand created by Pamela J. Terrell.
        </p>

        <p className="mt-3 text-xs text-[#9fb8cc]">
          © {new Date().getFullYear()} MedicareBeforeYouSwitch.com. Educational resource only.
        </p>
      </footer>
    </main>
  );
}