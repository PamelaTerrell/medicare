import { Routes, Route, Link } from "react-router-dom";
import CheckBeforeYouSwitch from "./pages/CheckBeforeYouSwitch.jsx";
import SeniorGiveBackAllowance from "./pages/SeniorGiveBackAllowance.jsx";

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
    title: "Senior Give Back Allowances",
    text: "Understand what these advertised allowances may actually be, who may qualify, and why they should not be treated like free government cash.",
    href: "/senior-give-back-allowance",
  },
  {
    title: "Original Medicare vs. Medicare Advantage",
    text: "Learn the difference between receiving benefits through Original Medicare and receiving them through a private Medicare Advantage plan.",
  },
  {
    title: "Retiree Benefits Warning",
    text: "Before switching plans, seniors should confirm whether existing retiree, union, employer, military, or other benefits could be affected.",
  },
  {
    title: "Helpful Extras vs. Real Tradeoffs",
    text: "Dental, vision, hearing, transportation, OTC, and other benefits may help — but they should be weighed against networks, authorizations, and plan rules.",
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
          <a href="#questions" className="hover:text-[#16324f]">
            Questions
          </a>
          <a href="#topics" className="hover:text-[#16324f]">
            Topics
          </a>
          <a href="#disclaimer" className="hover:text-[#16324f]">
            Disclaimer
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

                {topic.href ? (
                  <Link
                    to={topic.href}
                    className="mt-6 inline-flex text-sm font-semibold text-[#2563eb] hover:underline"
                  >
                    Read this guide →
                  </Link>
                ) : (
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#64748b]">
                    Coming soon →
                  </span>
                )}
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
    </Routes>
  );
}