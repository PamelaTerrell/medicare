import { Link } from "react-router-dom";

const retireeCoverageTypes = [
  {
    title: "Former employer coverage",
    text: "Some retirees have coverage from a former employer that works with Medicare. The rules can vary by employer.",
  },
  {
    title: "Union retiree benefits",
    text: "Union benefits may have special rules. Some require retirees to use specific plans or follow specific enrollment steps.",
  },
  {
    title: "Military or federal retiree benefits",
    text: "TRICARE, FEHB, VA-related care, and other government or military benefits may have their own rules. Always check before changing Medicare coverage.",
  },
  {
    title: "Spouse or dependent coverage",
    text: "A Medicare decision may affect more than the person enrolling. A spouse or dependent could also lose coverage if retiree benefits are changed or dropped.",
  },
];

const risks = [
  {
    title: "You may lose retiree coverage",
    text: "In some cases, joining a Medicare Advantage plan that your employer or union does not offer may cause you to lose employer or union retiree coverage.",
  },
  {
    title: "Your spouse or dependents may be affected",
    text: "If you lose employer or union coverage, your spouse or dependents may lose coverage too. This should be checked before enrolling.",
  },
  {
    title: "You may not be able to get it back",
    text: "Some retiree benefits are difficult or impossible to restore after they are dropped. Do not assume you can simply reverse the decision later.",
  },
  {
    title: "Drug coverage may change",
    text: "Retiree plans may include prescription coverage. Enrolling in another plan could affect how medications are covered.",
  },
  {
    title: "Premiums and bills may change",
    text: "The new Medicare plan may have different premiums, copays, deductibles, and out-of-pocket costs than the retiree coverage you already have.",
  },
  {
    title: "Networks may change",
    text: "A new plan may change which doctors, hospitals, specialists, pharmacies, and labs are considered in network.",
  },
];

const questions = [
  "Will I lose any retiree, union, employer, military, or other benefits if I join this plan?",
  "Will my spouse or dependents lose coverage if I change my Medicare coverage?",
  "Can I get my retiree coverage back if I change my mind later?",
  "Is this Medicare Advantage plan offered or approved by my employer, union, or benefits administrator?",
  "Does my retiree coverage already include drug coverage, dental, vision, hearing, or supplemental benefits?",
  "Will this change how my prescriptions are covered?",
  "Will my doctors, specialists, hospitals, pharmacy, and medications still be covered?",
  "What will my total yearly cost risk be, including premiums, copays, hospital costs, and maximum out-of-pocket costs?",
  "Can I get the answer in writing from my benefits administrator before enrolling?",
];

const whoToCall = [
  {
    title: "Employer benefits administrator",
    text: "Ask how your retiree coverage works with Medicare and whether joining another plan could affect your benefits.",
  },
  {
    title: "Union benefits office",
    text: "If your coverage comes through a union, ask the union benefits office before enrolling in any outside plan.",
  },
  {
    title: "Military or federal benefits office",
    text: "If you have military, federal, VA, or TRICARE-related benefits, verify the rules with the appropriate benefits office.",
  },
  {
    title: "SHIP counselor",
    text: "A SHIP counselor can help you review Medicare choices without sales pressure.",
  },
];

const warningSigns = [
  "Someone tells you the retiree coverage does not matter.",
  "Someone says you can always get your old coverage back without checking.",
  "Someone focuses only on a flex card, giveback, dental benefit, or grocery card.",
  "Someone says you must enroll today before you can talk to your benefits office.",
  "Someone cannot clearly explain whether your employer, union, spouse, or dependents will be affected.",
  "Someone asks for your Medicare number before answering basic coverage questions.",
];

export default function RetireeBenefitsWarning() {
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
          <a href="#risks" className="hover:text-[#16324f]">
            Risks
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
            Retiree Benefits Warning
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#eaf4fb]">
            Before switching Medicare coverage, check whether you could lose retiree,
            union, employer, military, or other benefits. A new Medicare plan may sound
            helpful, but it should never be chosen before you understand what could happen
            to the coverage you already have.
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/90 backdrop-blur">
            The most important question is not only, “What does the new plan offer?”
            It is also, “What could I lose if I enroll?”
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#questions"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-[#16324f] shadow-lg transition hover:bg-[#eef7ff]"
            >
              Questions to Ask First
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
            Important warning
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#881337]">
            Do not enroll in a new Medicare plan until you know what happens to your existing benefits.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#7f1d1d]">
            If you have retiree, union, employer, military, or other coverage, ask the
            benefits administrator whether joining a new Medicare Advantage or drug plan
            could cause you or your family members to lose coverage.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[2rem] border border-[#bfdbfe] bg-[#eef7ff] p-7 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Simple explanation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16324f]">
            Retiree coverage may work with Medicare in a special way.
          </h2>

          <p className="mt-5 leading-8 text-[#526b80]">
            Some retiree plans are designed to work with Medicare. Some employers or
            unions offer specific Medicare-related options. Some may have strict rules
            about what happens if you join an outside plan.
          </p>

          <div className="mt-6 rounded-2xl border border-[#cfe0ee] bg-white p-5">
            <p className="font-bold text-[#16324f]">Plain-language rule:</p>
            <p className="mt-2 text-sm leading-6 text-[#526b80]">
              Never assume a new plan can be added without affecting the benefits you
              already have. Ask first, and get the answer in writing if possible.
            </p>
          </div>
        </aside>

        <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Coverage that needs checking
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#16324f]">
            These benefits may have rules before you switch.
          </h2>

          <div className="mt-8 grid gap-4">
            {retireeCoverageTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5"
              >
                <h3 className="font-bold text-[#16324f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526b80]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="risks" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            What could go wrong
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            The risk is not just choosing the wrong plan. The risk is losing coverage you already had.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((item) => (
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

      <section className="bg-[#eaf4fb]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Who to contact
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#16324f]">
            Before enrolling, call the people who control or understand your existing benefits.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whoToCall.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#cfe0ee] bg-white p-6 shadow-sm shadow-[#16324f]/5"
              >
                <h3 className="text-xl font-bold text-[#16324f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#526b80]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-8 shadow-xl shadow-[#16324f]/5">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
                Better wording
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#16324f]">
                Instead of asking, “Does this plan have better benefits?”
              </h2>

              <p className="mt-5 leading-8 text-[#526b80]">
                Ask a more complete question that protects the person from losing existing
                coverage.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#f8fbff] p-6">
              <p className="text-2xl font-bold leading-tight text-[#2563eb]">
                “If I join this plan, will I lose or change any retiree, union,
                employer, military, spouse, dependent, drug, or supplemental benefits
                I already have?”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff1f2]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9f1239]">
            Warning signs
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#881337]">
            Be careful when someone downplays your existing benefits.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {warningSigns.map((sign) => (
              <div
                key={sign}
                className="rounded-2xl border border-[#fecdd3] bg-white p-6 shadow-sm"
              >
                <p className="leading-7 text-[#7f1d1d]">{sign}</p>
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
            Before changing Medicare coverage, ask these questions.
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
            Check the coverage you already have before chasing a benefit in a commercial.
          </h2>

          <p className="mt-6 leading-8 text-[#526b80]">
            A new Medicare plan may offer useful extras. But if it causes the person to
            lose retiree coverage, union coverage, employer coverage, spouse coverage,
            dependent coverage, drug coverage, or supplemental benefits, the decision may
            be far more serious than the advertisement made it sound.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/check-before-you-switch"
              className="rounded-full bg-[#2563eb] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
            >
              Check Before You Switch
            </Link>

            <a
              href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65/retiree-insurance"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-center text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]"
            >
              Read about retiree insurance on Medicare.gov
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