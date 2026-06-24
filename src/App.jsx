import { Routes, Route, Link } from "react-router-dom";
import CheckBeforeYouSwitch from "./pages/CheckBeforeYouSwitch.jsx";
import SeniorGiveBackAllowance from "./pages/SeniorGiveBackAllowance.jsx";
import OriginalMedicareVsMedicareAdvantage from "./pages/OriginalMedicareVsMedicareAdvantage.jsx";
import HelpfulExtrasVsRealTradeoffs from "./pages/HelpfulExtrasVsRealTradeoffs.jsx";
import RetireeBenefitsWarning from "./pages/RetireeBenefitsWarning.jsx";

const questions = [
  "Are my doctors, specialists, hospitals, and medications covered?",
  "Will I need referrals or prior authorization for care?",
  "What happens if I travel or need care outside the network?",
  "Could this affect retiree, union, employer, military, or other benefits?",
  "What is the maximum out-of-pocket cost?",
  "Can I return to Original Medicare and get a Medigap plan later?",
];

const topics = [
  {
    title: "Original Medicare vs. Medicare Advantage",
    text: "Learn the difference between receiving benefits through Original Medicare and receiving them through a private Medicare Advantage plan.",
    href: "/original-medicare-vs-medicare-advantage",
  },
  {
    title: "Senior Give Back Allowances",
    text: "Understand what these advertised allowances may actually be, who may qualify, and why they should not be treated like free government cash.",
    href: "/senior-give-back-allowance",
  },
  {
    title: "Helpful Extras vs. Real Tradeoffs",
    text: "Dental, vision, hearing, transportation, OTC, and other benefits may help — but they should be weighed against networks, authorizations, and plan rules.",
    href: "/helpful-extras-vs-real-tradeoffs",
  },
  {
    title: "Retiree Benefits Warning",
    text: "Before switching plans, seniors should confirm whether existing retiree, union, employer, military, spouse, dependent, drug, or supplemental benefits could be affected.",
    href: "/retiree-benefits-warning",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-[#f5f9fc] text-[#1f2937]">
      {/* Top notice */}
      <div className="border-b border-[#d6e3ee] bg-[#eef7ff] px-5 py-3 text-center text-sm text-[#35556f]">
        Educational resource only. Not affiliated with Medicare, CMS, HHS, or any government agency.
      </div>

      {/* Header */}
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
          <Link to="/check-before-you-switch" className="hover:text-[#16324f]">
            Check Before You Switch
          </Link>

          <a href="#why" className="hover:text-[#16324f]">
            Why It Matters
          </a>

          <a href="#before-switching" className="hover:text-[#16324f]">
            Before Switching
          </a>

          <a href="#questions" className="hover:text-[#16324f]">
            Questions
          </a>

          <a href="#topics" className="hover:text-[#16324f]">
            Topics
          </a>

          <a href="#disclaimer" className="hover:text-[#16324f]">
            Disclaimer
          </a>

          <a href="#support" className="hover:text-[#16324f]">
            Support
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-24">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-sm font-semibold text-[#1d4ed8] shadow-sm">
            For seniors, families, and adult children helping loved ones
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#16324f] md:text-6xl">
            Before you switch Medicare plans, understand what you may be giving up.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526b80]">
            Commercials about “Senior Give Back Allowances,” flex cards, grocery benefits,
            dental benefits, and transportation benefits can sound helpful — and sometimes
            they are. But seniors deserve the full story before changing how their hospital
            and medical coverage is accessed.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#questions"
              className="rounded-full bg-[#2563eb] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
            >
              See Questions to Ask First
            </a>

            <Link
              to="/check-before-you-switch"
              className="rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-center text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]"
            >
              Check an Ad or Message
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#bfdbfe] via-[#f5f9fc] to-[#99f6e4] opacity-60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-white p-6 shadow-2xl shadow-[#16324f]/10">
            <div className="rounded-[1.5rem] bg-[#eef7ff] p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
                The question is not only
              </p>

              <p className="mt-4 text-4xl font-bold leading-tight text-[#16324f]">
                “What benefit do I get?”
              </p>

              <div className="my-6 h-px bg-[#cfe0ee]" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
                The question is also
              </p>

              <p className="mt-4 text-4xl font-bold leading-tight text-[#2563eb]">
                “What changes when I enroll?”
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-[#bfdbfe] bg-[#f8fbff] p-5 text-sm leading-6 text-[#526b80]">
              Medicare Advantage may include extra benefits, but it may also involve
              provider networks, plan rules, prior authorization, and different costs.
              Always compare the full plan — not just the advertised allowance.
            </div>
          </div>
        </div>
      </section>

      {/* Check Before You Switch CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#bfdbfe] bg-white p-8 shadow-xl shadow-[#16324f]/5 md:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#dbeafe]" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Simple tool
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
              Check a Medicare ad or message before you trust it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526b80]">
              Paste the words from a Medicare ad, mailer, text message, email, or phone script.
              This tool can help you notice words that may need a closer look before you change
              your coverage.
            </p>

            <Link
              to="/check-before-you-switch"
              className="mt-7 inline-flex rounded-full bg-[#2563eb] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
            >
              Check Before You Switch
            </Link>
          </div>
        </div>
      </section>

      {/* Support This Project */}
      <section id="support" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-white p-8 shadow-xl shadow-[#16324f]/5 md:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#ffedd5]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
                Support senior education
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
                Help keep this Medicare scam-awareness resource available.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#526b80]">
                Medicare Before You Switch is an independent educational project created
                to help seniors, families, and caregivers slow down, ask better questions,
                and recognize red flags before responding to Medicare ads, messages, or
                phone calls.
              </p>

              <p className="mt-5 text-base leading-7 text-[#526b80]">
                Contributions help support website hosting, research time, printable guides,
                accessibility improvements, and free plain-language educational resources.
              </p>

              <p className="mt-5 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-4 text-sm leading-6 text-[#92400e]">
                This project is not a nonprofit organization, and contributions are not
                tax-deductible charitable donations.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-7">
              <h3 className="text-2xl font-bold text-[#16324f]">
                Want to support the project?
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                Your support helps make it possible to create more free guides, checklists,
                and tools for older adults and the people helping them.
              </p>

              <a
                href="https://buy.stripe.com/eVq9AMdR04oG3bX99x2cg08"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#2563eb] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
              >
                Support This Project
              </a>

              <p className="mt-4 text-xs leading-5 text-[#64748b]">
                Please do not send personal Medicare information, Social Security numbers,
                or private health details through a support payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-[#d6e3ee] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-[#16324f]">Independent education</p>
            <p className="mt-2 text-sm leading-6 text-[#526b80]">
              This site is designed to help families understand Medicare choices before
              responding to advertisements.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-[#16324f]">Published by Stabile USA</p>
            <p className="mt-2 text-sm leading-6 text-[#526b80]">
              Stabile USA is presented here as a neutral educational publisher, not as
              Medicare, CMS, or a government agency.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-[#16324f]">No pressure to enroll</p>
            <p className="mt-2 text-sm leading-6 text-[#526b80]">
              The purpose is to slow the decision down and encourage careful review of
              doctors, hospitals, benefits, costs, and retiree coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-[#f5f9fc]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Why this site exists
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            The benefit may be real. The problem is when the tradeoff is hidden.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#526b80]">
            Some Medicare Advantage plans can be helpful for the right person. Dental,
            vision, hearing, transportation, prescription drug coverage, OTC benefits,
            and other extras can matter. But no senior should be rushed into changing
            coverage because a commercial made a serious healthcare decision sound like
            free money.
          </p>
        </div>
      </section>

      {/* Medicare Basics */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Medicare basics
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
              Before comparing plans, understand what Medicare and Medicaid mean.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526b80]">
              Many advertisements use words like Medicare, Medicaid, allowance, give-back,
              and benefits in ways that can confuse people. These programs are related to
              healthcare, but they are not the same thing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[1.5rem] border border-[#d6e3ee] bg-[#f8fbff] p-7 shadow-sm shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                What is Medicare?
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                Medicare is health insurance mainly for people 65 or older.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                Medicare is a federal health insurance program. Most people become eligible
                at age 65, but some people may qualify earlier because of a disability,
                End-Stage Renal Disease, or ALS.
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-[#526b80]">
                <li>• Part A helps cover hospital care.</li>
                <li>• Part B helps cover doctor and outpatient care.</li>
                <li>• Part C is Medicare Advantage through private insurance companies.</li>
                <li>• Part D helps cover prescription drugs.</li>
              </ul>
            </article>

            <article className="rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-7 shadow-sm shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Current Part B cost
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                The standard Part B premium is $202.90 per month in 2026.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                Most people pay the standard Part B premium. In 2026, the standard monthly
                Part B premium is $202.90, and the Part B deductible is $283 for the year.
              </p>

              <div className="mt-5 rounded-2xl border border-[#bfdbfe] bg-white p-5">
                <p className="text-sm font-bold text-[#16324f]">
                  Important to remember:
                </p>

                <p className="mt-2 text-sm leading-6 text-[#526b80]">
                  A Medicare Advantage plan may advertise a $0 plan premium, but the person
                  usually still pays the Part B premium unless a specific give-back benefit
                  reduces part of it.
                </p>
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-[#d6e3ee] bg-white p-7 shadow-sm shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                What is Medicaid?
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                Medicaid is different from Medicare.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                Medicaid provides health coverage for eligible people with limited income
                and resources. It is administered by states according to federal requirements
                and is funded jointly by states and the federal government.
              </p>

              <div className="mt-5 rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5">
                <p className="text-sm font-bold text-[#16324f]">
                  Why this matters:
                </p>

                <p className="mt-2 text-sm leading-6 text-[#526b80]">
                  Some people have both Medicare and Medicaid. Others have Medicare only.
                  Eligibility for Medicaid can affect which benefits, costs, and plan options
                  apply.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#fecdd3] bg-[#fff1f2] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9f1239]">
              Common confusion
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#881337]">
              Medicare and Medicaid are not interchangeable.
            </h3>

            <p className="mt-4 max-w-4xl leading-7 text-[#7f1d1d]">
              A Medicare ad may mention extra help, Medicaid, dual eligibility, grocery
              cards, give-back benefits, or special needs plans. Those details can depend on
              income, location, Medicaid status, health conditions, and the exact plan. Before
              switching coverage, seniors should confirm what they personally qualify for.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Switch Guide */}
      <section id="before-switching" className="bg-[#f5f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Before you switch
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
              Medicare Advantage may help some people — but the full decision matters.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526b80]">
              A Medicare Advantage plan is not automatically bad. Some people like their plan,
              their doctors are in network, their prescriptions are covered, and the extra benefits
              are useful. The concern is switching because of an advertisement without understanding
              the costs, rules, networks, and possible tradeoffs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#bfdbfe] bg-white p-7 shadow-xl shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Do not enroll until you verify
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#16324f]">
                Check the care you actually use.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                Before changing Medicare coverage, write these details down and compare them
                against the exact plan documents — not just the commercial or phone script.
              </p>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#35556f] sm:grid-cols-2">
                {[
                  "Current doctors and specialists",
                  "Preferred hospital",
                  "Current prescriptions and dosages",
                  "Preferred pharmacy",
                  "Retiree, union, employer, military, or spouse benefits",
                  "Current monthly premium",
                  "Current deductible",
                  "Expected copays or coinsurance",
                  "Maximum out-of-pocket cost",
                  "Travel or out-of-area care needs",
                  "Prior authorization rules",
                  "Referral requirements",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2563eb] bg-[#eef7ff] text-xs text-[#2563eb]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-7 shadow-xl shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9f1239]">
                Medigap caution
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#881337]">
                Leaving Original Medicare with Medigap can be a serious decision.
              </h3>

              <p className="mt-4 leading-7 text-[#7f1d1d]">
                If someone currently has Original Medicare with a Medigap policy, they should
                ask whether they can get that Medigap policy back later if they switch to Medicare
                Advantage and change their mind.
              </p>

              <div className="mt-6 rounded-2xl border border-[#fecdd3] bg-white p-5">
                <p className="text-sm font-bold text-[#881337]">
                  Important question:
                </p>

                <p className="mt-2 text-sm leading-6 text-[#7f1d1d]">
                  “If I leave this Medigap policy, will I have guaranteed rights to buy a Medigap
                  policy later, or could I have to answer health questions and go through medical
                  underwriting?”
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#7f1d1d]">
                Rules can depend on timing, state protections, and the person’s situation. This is
                one reason seniors should verify before switching.
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[1.5rem] border border-[#d6e3ee] bg-white p-7 shadow-sm shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Who to contact first
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                Do not rely only on the ad.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                Before switching, compare the offer with official or direct sources.
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-[#526b80]">
                <li>• Medicare.gov</li>
                <li>• 1-800-MEDICARE</li>
                <li>• The plan’s official documents</li>
                <li>• Your current doctors</li>
                <li>• Your preferred hospital</li>
                <li>• Your pharmacy</li>
                <li>• Your retiree, union, or employer benefits office</li>
                <li>• VA or TRICARE, if applicable</li>
                <li>• SHIP for local Medicare counseling</li>
              </ul>
            </article>

            <article className="rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-7 shadow-sm shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">
                Dual Eligible
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                Some people have both Medicare and Medicaid.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                People who have both Medicare and full Medicaid coverage are often called
                “dually eligible.” Medicare generally pays first for Medicare-covered services,
                and Medicaid pays after Medicare and any other insurance.
              </p>

              <div className="mt-5 rounded-2xl border border-[#bfdbfe] bg-white p-5">
                <p className="text-sm font-bold text-[#16324f]">
                  Why this matters:
                </p>

                <p className="mt-2 text-sm leading-6 text-[#526b80]">
                  Dual eligibility can affect costs, plan choices, Special Needs Plans, extra help,
                  and whether certain advertised benefits apply.
                </p>
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-[#d6e3ee] bg-white p-7 shadow-sm shadow-[#16324f]/5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Red flag phrases
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                These words deserve a closer look.
              </h3>

              <p className="mt-4 leading-7 text-[#526b80]">
                These phrases are not automatically scams, but they are reasons to slow down and verify.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "You may qualify",
                  "Call now",
                  "Free money",
                  "Government benefit",
                  "Get money back",
                  "Use it for groceries",
                  "You are missing out",
                  "Give us your Medicare number",
                  "No cost to you",
                  "Limited time",
                  "Pre-approved",
                  "Senior allowance",
                ].map((phrase) => (
                  <span
                    key={phrase}
                    className="rounded-full border border-[#cfe0ee] bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-[#35556f]"
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Medicare vs. Medicaid reminder
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#16324f]">
                  Similar names, different programs.
                </h3>

                <p className="mt-4 leading-7 text-[#526b80]">
                  Medicare and Medicaid can work together for some people, but they are not the
                  same program. That is why eligibility words in advertisements should be checked
                  carefully.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#bfdbfe] bg-[#eef7ff] p-5">
                  <p className="font-bold text-[#16324f]">Medicare</p>
                  <p className="mt-2 text-sm leading-6 text-[#526b80]">
                    Federal health insurance mainly for people 65 or older, and for some younger
                    people with disabilities, End-Stage Renal Disease, or ALS.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5">
                  <p className="font-bold text-[#16324f]">Medicaid</p>
                  <p className="mt-2 text-sm leading-6 text-[#526b80]">
                    Health coverage for eligible people with limited income and resources. It is
                    administered by states under federal rules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#fde68a] bg-[#fffbeb] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#92400e]">
              Bottom line
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#92400e]">
              The benefit may be real, but the decision is bigger than the benefit.
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-[#92400e]">
              Before switching coverage because of a grocery card, give-back allowance, dental
              benefit, or $0 premium message, seniors should compare the full plan: doctors,
              hospitals, prescriptions, prior authorization, referrals, out-of-pocket exposure,
              retiree benefits, and whether Medicaid or dual eligibility affects their options.
            </p>
          </div>
        </div>
      </section>

      {/* Example Comparison */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Example comparison
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
              Do not compare only the advertised benefit. Compare the costs behind the plan.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#526b80]">
              A grocery card, dental benefit, or give-back allowance may sound helpful.
              But before switching Medicare coverage, seniors should also compare hospital
              costs, doctor costs, drug coverage, network rules, prior authorization, and
              maximum out-of-pocket exposure.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-[#f8fbff] shadow-xl shadow-[#16324f]/5">
            <div className="grid bg-[#16324f] text-white md:grid-cols-3">
              <div className="p-5 md:col-span-1">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bfdbfe]">
                  What to compare
                </p>
              </div>

              <div className="border-t border-white/15 p-5 md:border-l md:border-t-0">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bfdbfe]">
                  Original Medicare example
                </p>
              </div>

              <div className="border-t border-white/15 p-5 md:border-l md:border-t-0">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bfdbfe]">
                  Medicare Advantage example
                </p>
              </div>
            </div>

            {[
              {
                item: "Monthly premium",
                original:
                  "Most people pay $0 for Part A if they or a spouse paid Medicare taxes long enough. Most people pay the standard Part B premium, which is $202.90 per month in 2026. A separate Part D plan and/or Medigap policy may have additional premiums.",
                advantage:
                  "Some Medicare Advantage plans advertise a $0 plan premium, but the person usually still pays the Part B premium. Some plans may reduce part of the Part B premium in certain counties.",
              },
              {
                item: "Hospital deductible or hospital copays",
                original:
                  "In 2026, Original Medicare Part A has a $1,736 hospital deductible per benefit period. Days 1–60 are $0 after that deductible.",
                advantage:
                  "A plan may charge a daily hospital copay, such as a set dollar amount per day for the first several days. The exact amount depends on the plan.",
              },
              {
                item: "Longer hospital stay",
                original:
                  "In 2026, Original Medicare charges $434 per day for hospital days 61–90 and $868 per lifetime reserve day for days 91–150.",
                advantage:
                  "A plan may have its own inpatient hospital copay schedule. The person should check how many days are charged and what happens after those days.",
              },
              {
                item: "Doctor and outpatient services",
                original:
                  "In 2026, the Part B deductible is $283. After that, the person usually pays 20% of the Medicare-approved amount for many covered services.",
                advantage:
                  "A plan may use copays, such as a primary care copay, specialist copay, lab copay, outpatient surgery copay, or coinsurance.",
              },
              {
                item: "Maximum out-of-pocket limit",
                original:
                  "Original Medicare does not have a yearly out-of-pocket maximum unless the person has other coverage, such as Medigap, Medicaid, or employer/retiree coverage.",
                advantage:
                  "Medicare Advantage plans have a yearly maximum out-of-pocket limit for covered Part A and Part B services. The exact limit varies by plan.",
              },
              {
                item: "Doctors, hospitals, and prior authorization",
                original:
                  "Original Medicare is widely accepted by providers who take Medicare. Some services may still have coverage rules.",
                advantage:
                  "A plan may have networks, referrals, prior authorization, and different rules for out-of-network care.",
              },
              {
                item: "Extra advertised benefits",
                original:
                  "Original Medicare does not usually include routine dental, vision, hearing, grocery cards, flex cards, or transportation benefits.",
                advantage:
                  "A plan may include extras such as dental, vision, hearing, OTC, transportation, grocery, or flex-card benefits, but these can have limits and rules.",
              },
            ].map((row) => (
              <div
                key={row.item}
                className="grid border-t border-[#d6e3ee] bg-white md:grid-cols-3"
              >
                <div className="bg-[#eef7ff] p-5">
                  <p className="font-bold text-[#16324f]">{row.item}</p>
                </div>

                <div className="border-t border-[#d6e3ee] p-5 md:border-l md:border-t-0">
                  <p className="text-sm leading-6 text-[#526b80]">{row.original}</p>
                </div>

                <div className="border-t border-[#d6e3ee] p-5 md:border-l md:border-t-0">
                  <p className="text-sm leading-6 text-[#526b80]">{row.advantage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                The takeaway
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#16324f]">
                A lower premium does not automatically mean lower total cost.
              </h3>

              <p className="mt-3 leading-7 text-[#526b80]">
                The real question is what the person may pay when they actually need care:
                hospital stays, specialists, outpatient procedures, prescriptions, ambulance
                services, and out-of-network care.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#fecdd3] bg-[#fff1f2] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9f1239]">
                Important reminder
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#881337]">
                Medicare Advantage costs are plan-specific.
              </h3>

              <p className="mt-3 leading-7 text-[#7f1d1d]">
                The Medicare Advantage column above is only an example of what to look for.
                Seniors should review the exact plan’s Evidence of Coverage, Summary of
                Benefits, provider directory, drug formulary, and maximum out-of-pocket cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section id="questions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Before anyone switches
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Ask these questions before responding to a Medicare commercial.
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

      {/* Caution Statement */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9f1239]">
            Important warning
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#881337]">
            No one should give up valuable retirement benefits just to chase an advertised allowance.
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-7 text-[#7f1d1d]">
            Before changing Medicare coverage, seniors should confirm whether the switch could
            affect employer, union, military, retiree, or other benefits they already have.
            A flex card or give-back benefit may sound helpful, but it should never replace a
            full review of the coverage they may be changing.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="bg-[#eaf4fb]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Plain-language Medicare education
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
              Learn the parts of the decision commercials often leave out.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[1.5rem] border border-[#cfe0ee] bg-white p-7 shadow-sm shadow-[#16324f]/5"
              >
                <h3 className="text-2xl font-bold text-[#16324f]">
                  {topic.title}
                </h3>

                <p className="mt-4 leading-7 text-[#526b80]">
                  {topic.text}
                </p>

                <Link
                  to={topic.href}
                  className="mt-6 inline-flex text-sm font-semibold text-[#2563eb] hover:underline"
                >
                  Read this guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-8 shadow-xl shadow-[#16324f]/5 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            A note from Pamela
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            I built this because seniors deserve better than half the story.
          </h2>

          <p className="mt-6 leading-8 text-[#526b80]">
            After spending around 15 years in the insurance industry, including
            experience with major insurance companies and selling Medicare Advantage
            plans during the pandemic, I understand how confusing these decisions can
            become. This site is here to slow the conversation down and help families
            ask better questions before a loved one changes coverage.
          </p>

          <p className="mt-5 leading-8 text-[#526b80]">
            This is not about saying every Medicare Advantage plan is bad. It is about
            making sure seniors understand the full decision — including doctors,
            hospitals, prescriptions, retiree benefits, networks, authorizations, and
            out-of-pocket costs — before they switch.
          </p>
        </div>
      </section>

      {/* Stabile USA publisher note */}
      <section className="border-y border-[#d6e3ee] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Published by Stabile USA
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16324f]">
            A neutral educational resource created to support clearer decisions.
          </h2>

          <p className="mt-5 leading-8 text-[#526b80]">
            Medicare Before You Switch is published by Stabile USA as an independent
            educational project. The goal is to provide plain-language information that
            helps seniors and families pause, compare, and ask better questions before
            changing Medicare coverage.
          </p>

          <p className="mt-5 leading-8 text-[#526b80]">
            Stabile USA is not affiliated with Medicare, CMS, HHS, or any government
            agency. This site does not represent itself as an official Medicare resource.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className="bg-[#f8fbff]">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-[#16324f]">
            Important disclaimer
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#526b80]">
            MedicareBeforeYouSwitch.com is an independent educational resource published
            by Stabile USA. It is not affiliated with Medicare, CMS, HHS, or any
            government agency. The information on this site is for general education only
            and should not be treated as legal, financial, medical, or personal insurance
            advice. Before changing Medicare coverage, beneficiaries should verify details
            with Medicare.gov, the plan’s official documents, their retiree benefits
            administrator, a SHIP counselor, or a properly licensed professional.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a
              href="https://www.medicare.gov/"
              target="_blank"
              rel="noreferrer"
              className="text-[#2563eb] hover:underline"
            >
              Visit Medicare.gov
            </a>

            <a
              href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/plan-marketing-rules"
              target="_blank"
              rel="noreferrer"
              className="text-[#2563eb] hover:underline"
            >
              Medicare Plan Marketing Rules
            </a>

            <a
              href="https://www.cms.gov/medicare/health-drug-plans/managed-care-marketing/medicare-guidelines"
              target="_blank"
              rel="noreferrer"
              className="text-[#2563eb] hover:underline"
            >
              CMS Marketing Guidelines
            </a>
          </div>
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/check-before-you-switch"
        element={<CheckBeforeYouSwitch />}
      />
      <Route
        path="/senior-give-back-allowance"
        element={<SeniorGiveBackAllowance />}
      />
      <Route
        path="/original-medicare-vs-medicare-advantage"
        element={<OriginalMedicareVsMedicareAdvantage />}
      />
      <Route
        path="/helpful-extras-vs-real-tradeoffs"
        element={<HelpfulExtrasVsRealTradeoffs />}
      />
      <Route
        path="/retiree-benefits-warning"
        element={<RetireeBenefitsWarning />}
      />
    </Routes>
  );
}