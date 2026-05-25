import { Link } from "react-router-dom";

const extras = [
  {
    title: "Dental benefits",
    text: "Dental benefits can be valuable, but check what is actually covered, annual limits, waiting periods, networks, and whether major services are included.",
  },
  {
    title: "Vision and hearing benefits",
    text: "These benefits may help with glasses, exams, hearing aids, or fittings. Check dollar limits, approved providers, and how often benefits reset.",
  },
  {
    title: "OTC or flex cards",
    text: "Over-the-counter, grocery, utility, or flex-card benefits may have rules about where they can be used, what they can buy, and whether unused amounts expire.",
  },
  {
    title: "Transportation benefits",
    text: "Transportation may help with rides to medical appointments, but check mileage limits, trip limits, scheduling rules, and service-area restrictions.",
  },
  {
    title: "Fitness benefits",
    text: "Fitness memberships may be helpful, but they should not outweigh access to doctors, hospitals, prescriptions, and care when you need it.",
  },
  {
    title: "Part B giveback benefits",
    text: "A giveback may reduce part of the Part B premium for some people, but the full plan still needs to be checked carefully.",
  },
];

const tradeoffs = [
  {
    title: "Provider networks",
    text: "Some plans may limit which doctors, hospitals, specialists, labs, or pharmacies you can use.",
  },
  {
    title: "Prior authorization",
    text: "A plan may require approval before covering certain services, supplies, medications, procedures, or care.",
  },
  {
    title: "Referrals",
    text: "Some plans may require referrals before seeing specialists or receiving certain types of care.",
  },
  {
    title: "Prescription drug rules",
    text: "A medication may be covered differently depending on the formulary, tier, pharmacy network, quantity limits, or approval rules.",
  },
  {
    title: "Out-of-pocket costs",
    text: "A low or $0 premium does not mean all care is free. Copays, coinsurance, deductibles, hospital costs, and the maximum out-of-pocket limit still matter.",
  },
  {
    title: "Travel and service area",
    text: "If someone travels often or spends time in another state, they should check how the plan works outside the local service area.",
  },
];

const questions = [
  "Are my doctors, specialists, hospitals, labs, pharmacies, and medications covered?",
  "Will I need referrals or prior authorization?",
  "What is the plan’s maximum out-of-pocket cost?",
  "What happens if I travel or need care outside the plan’s service area?",
  "Are the advertised benefits monthly, quarterly, yearly, or one-time?",
  "Do unused benefit amounts roll over or expire?",
  "Where can the card or allowance actually be used?",
  "Could switching affect retiree, union, employer, military, Medicaid, Extra Help, or other benefits?",
  "Can I review the Summary of Benefits, Evidence of Coverage, provider directory, and drug formulary before enrolling?",
];

const examples = [
  {
    title: "A dental benefit sounds generous",
    text: "But the person later learns only basic cleanings are covered, major services have limits, or the preferred dentist is not in network.",
  },
  {
    title: "A grocery card sounds helpful",
    text: "But the card may only work for certain items, certain stores, certain months, or only for people who meet extra eligibility rules.",
  },
  {
    title: "A $0 premium sounds safe",
    text: "But the person still needs to check hospital costs, specialist copays, prescription costs, prior authorization, and the maximum out-of-pocket limit.",
  },
  {
    title: "A transportation benefit sounds convenient",
    text: "But the plan may limit the number of trips, distance, scheduling, or the type of appointments covered.",
  },
];

export default function HelpfulExtrasVsRealTradeoffs() {
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
          <a href="#extras" className="hover:text-[#16324f]">
            Extras
          </a>
          <a href="#tradeoffs" className="hover:text-[#16324f]">
            Tradeoffs
          </a>
          <a href="#questions" className="hover:text-[#16324f]">
            Questions
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
            Helpful Extras vs. Real Tradeoffs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#eaf4fb]">
            Dental, vision, hearing, transportation, OTC cards, grocery benefits, and
            giveback offers can be helpful. But extra benefits should be compared with
            the full plan — including doctors, hospitals, prescriptions, networks, approvals,
            and out-of-pocket costs.
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/90 backdrop-blur">
            The question is not only, “What extra benefit do I get?” The question is also,
            “What rules, limits, costs, or provider changes come with this plan?”
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#tradeoffs"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#16324f] shadow-lg transition hover:bg-[#eef7ff]"
            >
              See the Tradeoffs
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
        <div className="rounded-[2rem] border border-[#bfdbfe] bg-[#eef7ff] p-8 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Simple explanation
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            Extra benefits may help — but they are not the whole Medicare decision.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#526b80]">
            Medicare Advantage plans may offer extra benefits that Original Medicare
            does not cover, such as dental, vision, hearing, and more. But Medicare
            Advantage plans are offered through private companies, and people may need
            to use network providers or get approval for certain services. Those details matter.
          </p>
        </div>
      </section>

      <section id="extras" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            The helpful side
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            These benefits can be useful when they truly fit the person’s needs.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {extras.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#d6e3ee] bg-[#f8fbff] p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#16324f]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#526b80]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tradeoffs" className="bg-[#eaf4fb]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            The tradeoff side
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            The extras should be weighed against the plan rules.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#526b80]">
            Medicare Advantage plans may require prior authorization before certain
            services or supplies are covered. In many cases, Original Medicare does not
            require prior authorization for covered services or supplies. That difference
            can matter when someone needs care.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tradeoffs.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#cfe0ee] bg-white p-6 shadow-sm shadow-[#16324f]/5"
              >
                <h3 className="text-xl font-bold text-[#16324f]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#526b80]">
                  {item.text}
                </p>
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
            Do not trade dependable care access for an extra benefit you have not verified.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#7f1d1d]">
            A dental benefit, grocery card, or giveback may sound helpful. But if a plan
            changes access to a trusted doctor, hospital, medication, or retiree benefit,
            the real cost may be larger than the advertised extra.
          </p>
        </div>
      </section>

      <section className="border-y border-[#d6e3ee] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Real-world examples
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            How an “extra” can become less helpful than it sounded.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {examples.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#d6e3ee] bg-[#f8fbff] p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#16324f]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#526b80]">
                  {item.text}
                </p>
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
            Before switching for extra benefits, ask these questions.
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
            A benefit is only helpful if the full plan still works for the person.
          </h2>

          <p className="mt-6 leading-8 text-[#526b80]">
            Extra benefits can be valuable. But a Medicare decision should be based on
            the whole plan: doctors, hospitals, medications, pharmacies, referrals,
            prior authorization, travel needs, existing benefits, and total yearly risk.
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