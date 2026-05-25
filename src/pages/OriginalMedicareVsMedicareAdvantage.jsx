import { Link } from "react-router-dom";

const originalMedicarePoints = [
  {
    title: "Includes Part A and Part B",
    text: "Original Medicare is the traditional Medicare program. It includes Part A hospital insurance and Part B medical insurance.",
  },
  {
    title: "No private plan required",
    text: "You do not have to choose a private company like Humana, UnitedHealthcare, Aetna, Cigna, or others to have Medicare.",
  },
  {
    title: "Broad provider access",
    text: "With Original Medicare, you can generally use any doctor or hospital that takes Medicare, anywhere in the United States.",
  },
  {
    title: "You can add coverage",
    text: "People with Original Medicare may be able to add a separate Part D drug plan and may choose supplemental coverage such as Medigap, employer or union coverage, Medicaid, or other coverage if eligible.",
  },
];

const medicareAdvantagePoints = [
  {
    title: "Private Medicare-approved plans",
    text: "Medicare Advantage plans are offered by private companies approved by Medicare. They are also called Part C or MA plans.",
  },
  {
    title: "Another way to receive Medicare benefits",
    text: "Medicare Advantage is another way to get Part A and Part B benefits instead of receiving them through Original Medicare.",
  },
  {
    title: "May include extra benefits",
    text: "Many Medicare Advantage plans include drug coverage and may offer extra benefits such as dental, vision, hearing, transportation, OTC, or other benefits.",
  },
  {
    title: "May have networks and plan rules",
    text: "Medicare Advantage plans may have provider networks, referral rules, prior authorization, copays, and other plan-specific requirements.",
  },
];

const comparisonRows = [
  {
    label: "Do you have to choose it?",
    original: "No private company is required to keep Original Medicare.",
    advantage: "Optional. You may choose a Medicare Advantage plan if it fits your needs and you are eligible.",
  },
  {
    label: "Who provides the coverage?",
    original: "The federal Medicare program.",
    advantage: "A Medicare-approved private insurance company.",
  },
  {
    label: "Doctor and hospital access",
    original: "Generally any doctor or hospital that takes Medicare in the U.S.",
    advantage: "Usually depends on the plan’s network and service area.",
  },
  {
    label: "Prescription drug coverage",
    original: "You may join a separate Part D drug plan.",
    advantage: "Many plans include Part D drug coverage, but not all.",
  },
  {
    label: "Supplemental coverage",
    original: "Some people add Medigap, employer/union coverage, Medicaid, or other supplemental coverage.",
    advantage: "You generally cannot use Medigap to pay Medicare Advantage plan costs.",
  },
  {
    label: "Prior authorization",
    original: "In many cases, Original Medicare does not require prior approval for covered services.",
    advantage: "Plans may require prior authorization for certain services or items.",
  },
];

const questions = [
  "Am I being told I must choose a private Medicare company?",
  "Do I want Original Medicare, Medicare Advantage, or do I need more time to compare?",
  "Are my doctors, specialists, hospitals, labs, pharmacies, and medications covered?",
  "Will I need referrals or prior authorization?",
  "What is the maximum out-of-pocket cost?",
  "Could switching affect retiree, union, employer, military, Medicaid, or other benefits?",
  "Can I return to Original Medicare later, and would I be able to get a Medigap plan?",
  "Have I reviewed the official plan documents, not just the advertisement?",
];

const warningSigns = [
  "Someone says you must choose a company like Humana, UHC, Aetna, Cigna, or another private insurer to have Medicare.",
  "Someone says Original Medicare is no longer available.",
  "Someone focuses only on dental, grocery, giveback, or flex-card benefits without explaining networks, costs, and plan rules.",
  "Someone pressures you to decide quickly before you understand what changes.",
  "Someone asks for your Medicare number, Social Security number, bank information, or credit card too early.",
];

export default function OriginalMedicareVsMedicareAdvantage() {
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
          <a href="#compare" className="hover:text-[#16324f]">
            Compare
          </a>
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
            Original Medicare vs. Medicare Advantage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#eaf4fb]">
            You do not have to choose a private insurance company to have Medicare.
            Original Medicare is still an option. Medicare Advantage is another way
            to receive Medicare benefits through a private Medicare-approved plan.
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/90 backdrop-blur">
            If someone tells you that every Medicare recipient must choose a company
            like Humana, UnitedHealthcare, Aetna, Cigna, or another private insurer,
            slow down and verify. That statement can confuse people.
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#compare"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#16324f] shadow-lg transition hover:bg-[#eef7ff]"
            >
              Compare the Two
            </a>

            <Link
              to="/check-before-you-switch"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Check an Ad or Website
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9f1239]">
            Important truth
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#881337]">
            You can keep Original Medicare.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#7f1d1d]">
            A person with Medicare does not automatically have to enroll in a private
            Medicare Advantage plan. Medicare Advantage may be a good fit for some people,
            but it is a choice — not a universal requirement.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Option 1
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Original Medicare
          </h2>

          <p className="mt-5 leading-8 text-[#526b80]">
            Original Medicare is the traditional Medicare program. It includes Part A
            and Part B. Many people with Original Medicare also consider Part D drug
            coverage and supplemental coverage if available to them.
          </p>

          <div className="mt-7 grid gap-4">
            {originalMedicarePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5"
              >
                <h3 className="font-bold text-[#16324f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526b80]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Option 2
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Medicare Advantage
          </h2>

          <p className="mt-5 leading-8 text-[#526b80]">
            Medicare Advantage plans are private Medicare-approved plans. They may
            include extra benefits, but they can also include provider networks,
            prior authorization, referrals, and plan-specific costs.
          </p>

          <div className="mt-7 grid gap-4">
            {medicareAdvantagePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5"
              >
                <h3 className="font-bold text-[#16324f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526b80]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section id="compare" className="border-y border-[#d6e3ee] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Side-by-side comparison
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            The difference is not just the name on the card.
          </h2>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d6e3ee]">
            <div className="grid bg-[#16324f] text-sm font-bold uppercase tracking-[0.18em] text-white md:grid-cols-[0.9fr_1fr_1fr]">
              <div className="p-5">Question</div>
              <div className="border-t border-white/10 p-5 md:border-l md:border-t-0">
                Original Medicare
              </div>
              <div className="border-t border-white/10 p-5 md:border-l md:border-t-0">
                Medicare Advantage
              </div>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid border-t border-[#d6e3ee] bg-white md:grid-cols-[0.9fr_1fr_1fr]"
              >
                <div className="bg-[#f8fbff] p-5 font-bold text-[#16324f]">
                  {row.label}
                </div>
                <div className="border-t border-[#d6e3ee] p-5 leading-7 text-[#526b80] md:border-l md:border-t-0">
                  {row.original}
                </div>
                <div className="border-t border-[#d6e3ee] p-5 leading-7 text-[#526b80] md:border-l md:border-t-0">
                  {row.advantage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#bfdbfe] bg-[#eef7ff] p-7 shadow-xl shadow-[#16324f]/5">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Common confusion
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16324f]">
              “You must choose a provider” is not the whole story.
            </h2>

            <p className="mt-5 leading-8 text-[#526b80]">
              People may use the word “provider” when they really mean “plan” or
              “insurance company.” But that wording can mislead seniors into thinking
              Original Medicare is not available. The better explanation is that Medicare
              beneficiaries may have choices — and those choices should be explained clearly.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Better wording
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16324f]">
              A clear explanation would be:
            </h2>

            <div className="mt-6 rounded-[1.5rem] bg-[#f8fbff] p-6">
              <p className="text-2xl font-bold leading-tight text-[#2563eb]">
                “You can stay with Original Medicare, or you may choose a Medicare
                Advantage plan from a private company if that option fits your needs.”
              </p>
            </div>

            <p className="mt-6 leading-8 text-[#526b80]">
              That statement gives people room to compare without making them feel forced
              into a private plan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf4fb]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Warning signs
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            Be careful when someone makes Medicare sound mandatory, rushed, or simple.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {warningSigns.map((sign) => (
              <div
                key={sign}
                className="rounded-2xl border border-[#cfe0ee] bg-white p-6 shadow-sm shadow-[#16324f]/5"
              >
                <p className="leading-7 text-[#526b80]">{sign}</p>
              </div>
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
            Before choosing any Medicare path, ask these questions.
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

      <section className="border-y border-[#d6e3ee] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Plain-language takeaway
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Medicare Advantage is a choice. Original Medicare is still Medicare.
          </h2>

          <p className="mt-6 leading-8 text-[#526b80]">
            Some people prefer Medicare Advantage because of extra benefits, drug coverage,
            lower premiums, or coordinated plan features. Other people prefer Original
            Medicare because they want broader provider access and the ability to add
            separate coverage. The important thing is that people should understand both
            paths before they switch.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/check-before-you-switch"
              className="rounded-full bg-[#2563eb] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
            >
              Check Before You Switch
            </Link>

            <a
              href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/your-coverage-options/compare-original-medicare-medicare-advantage"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-center text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]"
            >
              Compare on Medicare.gov
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