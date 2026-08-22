import { Routes, Route, Link } from "react-router-dom";
import CheckBeforeYouSwitch from "./pages/CheckBeforeYouSwitch.jsx";
import SeniorGiveBackAllowance from "./pages/SeniorGiveBackAllowance.jsx";
import OriginalMedicareVsMedicareAdvantage from "./pages/OriginalMedicareVsMedicareAdvantage.jsx";
import HelpfulExtrasVsRealTradeoffs from "./pages/HelpfulExtrasVsRealTradeoffs.jsx";
import RetireeBenefitsWarning from "./pages/RetireeBenefitsWarning.jsx";
import AlreadySharedInformation from "./pages/AlreadySharedInformation.jsx";
import ReportInsuranceConcern from "./pages/ReportInsuranceConcern.jsx";
import PhoneSafetyCard from "./pages/PhoneSafetyCard.jsx";

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

const safetyTools = [
  {
    title: "I already gave them my information",
    text: "Use a calm step-by-step guide based on what was shared, including a Medicare number, Social Security number, bank details, or a password.",
    href: "/already-shared-information",
    linkText: "See what to do now",
  },
  {
    title: "Where should I report this?",
    text: "Find the appropriate official destination for a suspicious Medicare contact, deceptive insurance advertisement, or government impersonation.",
    href: "/report-an-insurance-concern",
    linkText: "Find the right reporting option",
  },
  {
    title: "Put this by the phone",
    text: "Print a large-type safety card with a simple pause-and-verify script, trusted numbers, and space for a family contact.",
    href: "/phone-safety-card",
    linkText: "Open the printable card",
  },
];

const styles = {
  page: "min-h-screen bg-[#f5f9fc] text-[#1f2937]",
  independenceNotice: "border-b border-[#d6e3ee] bg-[#eef7ff] px-5 py-3 text-center text-sm text-[#35556f]",
  siteHeader: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6",
  brandLink: "tracking-tight",
  siteName: "block text-xl font-bold text-[#16324f]",
  sitePurpose: "mt-1 block text-sm font-semibold text-[#0f766e]",
  publisherLabel: "mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-[#64748b]",
  desktopNavigation: "hidden items-center gap-7 text-sm font-medium text-[#526b80] md:flex",
  navigationLink: "hover:text-[#16324f]",
  heroSection: "mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-24",
  audienceBadge: "mb-5 inline-flex rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-sm font-semibold text-[#1d4ed8] shadow-sm",
  heroHeading: "max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#16324f] md:text-6xl",
  heroDescription: "mt-6 max-w-2xl text-lg leading-8 text-[#526b80]",
  heroActions: "mt-8 flex flex-col gap-4 sm:flex-row",
  primaryAction: "rounded-full bg-[#2563eb] px-7 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]",
  secondaryAction: "rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-center text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]",
  heroVisual: "relative",
  heroBackdrop: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#bfdbfe] via-[#f5f9fc] to-[#99f6e4] opacity-60 blur-2xl",
  heroDecisionCard: "relative overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-white p-6 shadow-2xl shadow-[#16324f]/10",
  heroQuestionPanel: "rounded-[1.5rem] bg-[#eef7ff] p-7",
  sectionEyebrow: "text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]",
  standardSectionHeading: "mt-4 text-4xl font-bold leading-tight text-[#16324f]",
  questionDivider: "my-6 h-px bg-[#cfe0ee]",
  informationSectionHeading: "mt-4 text-4xl font-bold leading-tight text-[#2563eb]",
  informationSupportingText: "mt-5 rounded-2xl border border-[#bfdbfe] bg-[#f8fbff] p-5 text-sm leading-6 text-[#526b80]",
  sectionWithBottomSpacing: "mx-auto max-w-7xl px-6 pb-20",
  safetyContentCard: "rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-8 shadow-xl shadow-[#881337]/5 md:p-10",
  readingColumn: "max-w-3xl",
  safetyEyebrow: "text-sm font-bold uppercase tracking-[0.22em] text-[#9f1239]",
  safetySectionHeading: "mt-4 text-4xl font-bold tracking-tight text-[#881337]",
  safetyIntroduction: "mt-5 text-lg leading-8 text-[#7f1d1d]",
  threeColumnLayout: "mt-8 grid gap-5 lg:grid-cols-3",
  safetyToolCard: "rounded-[1.5rem] border border-[#fecdd3] bg-white p-6 shadow-sm",
  standardCardHeading: "text-2xl font-bold text-[#16324f]",
  standardSupportingText: "mt-4 text-sm leading-6 text-[#526b80]",
  cardAction: "mt-6 inline-flex text-sm font-semibold text-[#2563eb] hover:underline",
  informationContentCard: "relative overflow-hidden rounded-[2rem] border border-[#bfdbfe] bg-white p-8 shadow-xl shadow-[#16324f]/5 md:p-10",
  decorativeAccent: "absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#dbeafe]",
  positionedContent: "relative max-w-3xl",
  sectionHeading: "mt-4 text-4xl font-bold tracking-tight text-[#16324f]",
  sectionIntroduction: "mt-5 text-lg leading-8 text-[#526b80]",
  informationEmphasis: "mt-7 inline-flex rounded-full bg-[#2563eb] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]",
  standardContentCard: "relative overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-white p-8 shadow-xl shadow-[#16324f]/5 md:p-10",
  supportCardAccent: "absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#ffedd5]",
  responsiveContentGrid: "relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center",
  standardBodyText: "mt-5 text-base leading-7 text-[#526b80]",
  cautionSupportingText: "mt-5 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-4 text-sm leading-6 text-[#92400e]",
  supportCallout: "rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-7",
  bodyText: "mt-4 leading-7 text-[#526b80]",
  supportButton: "mt-6 inline-flex rounded-full bg-[#2563eb] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]",
  standardFinePrint: "mt-4 text-xs leading-5 text-[#64748b]",
  dividedSection: "border-y border-[#d6e3ee] bg-white",
  credibilityItems: "mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3",
  detailLabel: "text-sm font-bold text-[#16324f]",
  cardDescription: "mt-2 text-sm leading-6 text-[#526b80]",
  alternateSection: "bg-[#f5f9fc]",
  centeredStatement: "mx-auto max-w-5xl px-6 py-16 text-center",
  standardIntroduction: "mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#526b80]",
  plainSection: "bg-white",
  sectionContent: "mx-auto max-w-7xl px-6 py-20",
  twoColumnLayout: "mt-10 grid gap-6 lg:grid-cols-2",
  cautionContentCard: "rounded-[2rem] border border-[#fde68a] bg-[#fffbeb] p-7 shadow-xl shadow-[#16324f]/5",
  cautionEyebrow: "text-sm font-bold uppercase tracking-[0.18em] text-[#92400e]",
  cautionFeatureTitle: "mt-3 text-3xl font-bold tracking-tight text-[#78350f]",
  cautionBodyText: "mt-4 leading-7 text-[#78350f]",
  cautionChecklist: "mt-5 space-y-3 text-sm leading-6 text-[#78350f]",
  directQuestionBox: "mt-6 rounded-2xl border border-[#fde68a] bg-white p-5",
  cautionEmphasis: "text-sm font-bold text-[#78350f]",
  directQuestionText: "mt-2 text-sm leading-6 text-[#78350f]",
  majorSafetyWarningCard: "rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-7 shadow-xl shadow-[#16324f]/5",
  safetyCardEyebrow: "text-sm font-bold uppercase tracking-[0.18em] text-[#9f1239]",
  safetyFeatureTitle: "mt-3 text-3xl font-bold tracking-tight text-[#881337]",
  safetyBodyText: "mt-4 leading-7 text-[#7f1d1d]",
  safetySupportingText: "mt-5 space-y-3 text-sm leading-6 text-[#7f1d1d]",
  safetyReminderBox: "mt-6 rounded-2xl border border-[#fecdd3] bg-white p-5",
  safetyEmphasis: "text-sm font-bold text-[#881337]",
  safetyReminderText: "mt-2 text-sm leading-6 text-[#7f1d1d]",
  centralTruthPanel: "mt-8 overflow-hidden rounded-[2rem] border border-[#9f1239] bg-[#881337] text-white shadow-2xl shadow-[#881337]/15",
  centralTruthIntroduction: "px-7 py-8 text-center md:px-10 md:py-10",
  centralTruthEyebrow: "text-sm font-bold uppercase tracking-[0.22em] text-[#fecdd3]",
  standardFeatureHeading: "mt-4 text-4xl font-bold tracking-tight md:text-5xl",
  inverseIntroduction: "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#ffe4e6]",
  commercialRealityComparison: "grid border-t border-white/20 bg-white text-[#1f2937] md:grid-cols-2",
  commercialClaimsColumn: "bg-[#fff1f2] p-7 md:p-8",
  commercialClaimsList: "mt-5 space-y-4 leading-7 text-[#7f1d1d]",
  policyRealityColumn: "border-t border-[#fecdd3] bg-white p-7 md:border-l md:border-t-0 md:p-8",
  standardEyebrow: "text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]",
  policyRealityList: "mt-5 space-y-4 leading-7 text-[#35556f]",
  lifeInsuranceGraphic: "mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-[#16324f] shadow-2xl shadow-[#16324f]/15",
  lifeInsuranceImage: "h-auto w-full",
  lifeInsuranceCaption: "px-6 py-4 text-center text-sm leading-6 text-[#cfe0ee]",
  policyEvaluationGrid: "mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",
  policyCostCard: "rounded-[1.5rem] border border-[#d6e3ee] bg-[#f8fbff] p-7",
  cardHeading: "mt-3 text-2xl font-bold text-[#16324f]",
  policyQuestionsCard: "rounded-[1.5rem] border border-[#fde68a] bg-[#fffbeb] p-7",
  categoryReminder: "mt-6 rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-6",
  informationEyebrow: "text-sm font-bold uppercase tracking-[0.18em] text-[#1d4ed8]",
  wideBodyText: "mt-3 max-w-4xl leading-7 text-[#526b80]",
  medicareBasicsGrid: "mt-10 grid gap-6 lg:grid-cols-3",
  medicareBasicsCard: "rounded-[1.5rem] border border-[#d6e3ee] bg-[#f8fbff] p-7 shadow-sm shadow-[#16324f]/5",
  officialResourceList: "mt-5 space-y-2 text-sm leading-6 text-[#526b80]",
  dualEligibilityCard: "rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-7 shadow-sm shadow-[#16324f]/5",
  dualEligibilityExplanation: "mt-5 rounded-2xl border border-[#bfdbfe] bg-white p-5",
  verificationCard: "rounded-[1.5rem] border border-[#d6e3ee] bg-white p-7 shadow-sm shadow-[#16324f]/5",
  eligibilityExplanation: "mt-5 rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5",
  commonConfusionCard: "mt-8 rounded-[1.5rem] border border-[#fecdd3] bg-[#fff1f2] p-7",
  safetyCardHeading: "mt-3 text-2xl font-bold text-[#881337]",
  commonConfusionText: "mt-4 max-w-4xl leading-7 text-[#7f1d1d]",
  careVerificationCard: "rounded-[2rem] border border-[#bfdbfe] bg-white p-7 shadow-xl shadow-[#16324f]/5",
  standardFeatureTitle: "mt-3 text-3xl font-bold tracking-tight text-[#16324f]",
  careVerificationList: "mt-6 grid gap-3 text-sm leading-6 text-[#35556f] sm:grid-cols-2",
  verificationListItem: "flex gap-3",
  verificationCheckmark: "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2563eb] bg-[#eef7ff] text-xs text-[#2563eb]",
  medigapCautionNote: "mt-5 text-sm leading-6 text-[#7f1d1d]",
  guidanceCardGrid: "mt-6 grid gap-6 lg:grid-cols-3",
  redFlagPhraseList: "mt-5 flex flex-wrap gap-2",
  redFlagPhrase: "rounded-full border border-[#cfe0ee] bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-[#35556f]",
  programComparisonCard: "mt-6 rounded-[2rem] border border-[#d6e3ee] bg-white p-7 shadow-xl shadow-[#16324f]/5",
  programComparisonLayout: "grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start",
  programSummaryGrid: "grid gap-4 md:grid-cols-2",
  medicareSummary: "rounded-2xl border border-[#bfdbfe] bg-[#eef7ff] p-5",
  standardEmphasis: "font-bold text-[#16324f]",
  medicaidSummary: "rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5",
  bottomLineCard: "mt-6 rounded-[1.5rem] border border-[#fde68a] bg-[#fffbeb] p-6",
  cautionCardHeading: "mt-3 text-2xl font-bold text-[#92400e]",
  bottomLineText: "mt-3 max-w-4xl leading-7 text-[#92400e]",
  comparisonTable: "mt-10 overflow-hidden rounded-[2rem] border border-[#d6e3ee] bg-[#f8fbff] shadow-xl shadow-[#16324f]/5",
  comparisonTableHeader: "grid bg-[#16324f] text-white md:grid-cols-3",
  comparisonTopicHeader: "p-5 md:col-span-1",
  comparisonHeaderText: "text-sm font-bold uppercase tracking-[0.18em] text-[#bfdbfe]",
  comparisonPlanHeader: "border-t border-white/15 p-5 md:border-l md:border-t-0",
  comparisonTableRow: "grid border-t border-[#d6e3ee] bg-white md:grid-cols-3",
  comparisonTopicCell: "bg-[#eef7ff] p-5",
  comparisonDetailCell: "border-t border-[#d6e3ee] p-5 md:border-l md:border-t-0",
  supportingText: "text-sm leading-6 text-[#526b80]",
  comparisonTakeawayGrid: "mt-8 grid gap-6 md:grid-cols-2",
  costTakeawayCard: "rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-6",
  costTakeawayText: "mt-3 leading-7 text-[#526b80]",
  planSpecificWarningCard: "rounded-[1.5rem] border border-[#fecdd3] bg-[#fff1f2] p-6",
  planSpecificWarningText: "mt-3 leading-7 text-[#7f1d1d]",
  questionsGrid: "mt-10 grid gap-4 md:grid-cols-2",
  questionCard: "rounded-2xl border border-[#d6e3ee] bg-white p-6 shadow-sm shadow-[#16324f]/5",
  questionText: "text-lg font-semibold leading-7 text-[#16324f]",
  retireeWarningCard: "rounded-[2rem] border border-[#fecdd3] bg-[#fff1f2] p-8 shadow-sm",
  retireeWarningHeading: "mt-4 text-3xl font-bold tracking-tight text-[#881337]",
  retireeWarningText: "mt-5 max-w-4xl text-base leading-7 text-[#7f1d1d]",
  topicsSection: "bg-[#eaf4fb]",
  topicGrid: "mt-10 grid gap-6 md:grid-cols-2",
  inverseContentCard: "rounded-[1.5rem] border border-[#cfe0ee] bg-white p-7 shadow-sm shadow-[#16324f]/5",
  narrowSectionContent: "mx-auto max-w-5xl px-6 py-20",
  personalNoteCard: "rounded-[2rem] border border-[#d6e3ee] bg-white p-8 shadow-xl shadow-[#16324f]/5 md:p-10",
  personalNoteOpening: "mt-6 leading-8 text-[#526b80]",
  supportingParagraph: "mt-5 leading-8 text-[#526b80]",
  compactSectionContent: "mx-auto max-w-5xl px-6 py-12",
  publisherHeading: "mt-4 text-3xl font-bold tracking-tight text-[#16324f]",
  softSection: "bg-[#f8fbff]",
  disclaimerText: "mt-4 text-sm leading-7 text-[#526b80]",
  disclaimerLinks: "mt-6 flex flex-wrap gap-4 text-sm font-semibold",
  textLink: "text-[#2563eb] hover:underline",
  siteFooter: "bg-[#16324f] px-6 py-10 text-center text-sm text-white",
  footerSiteName: "text-xl font-bold",
  footerPurpose: "mt-3 text-[#cfe0ee]",
  footerPublisher: "mt-5 text-xs text-[#bfd4e5]",
  footerCopyright: "mt-3 text-xs text-[#9fb8cc]",
};

function Home() {
  return (
    <main className={styles.page}>
      {/* Top notice */}
      <div className={styles.independenceNotice}>
        Educational resource only. Not affiliated with Medicare, CMS, HHS, or any government agency.
      </div>

      {/* Header */}
      <header className={styles.siteHeader}>
        <Link to="/" className={styles.brandLink}>
          <span className={styles.siteName}>
            Medicare Before You Switch
          </span>
          <span className={styles.sitePurpose}>
            Medicare guidance &amp; senior consumer safety
          </span>
          <span className={styles.publisherLabel}>
            A Stabile USA educational resource
          </span>
        </Link>

        <nav className={styles.desktopNavigation}>
          <Link to="/check-before-you-switch" className={styles.navigationLink}>
            Check Before You Switch
          </Link>

          <a href="#safety-help" className={styles.navigationLink}>
            Get Help Now
          </a>

          <a href="#why" className={styles.navigationLink}>
            Why It Matters
          </a>

          <a href="#advertising-warnings" className={styles.navigationLink}>
            Senior Safety
          </a>

          <a href="#before-switching" className={styles.navigationLink}>
            Before Switching
          </a>

          <a href="#questions" className={styles.navigationLink}>
            Questions
          </a>

          <a href="#topics" className={styles.navigationLink}>
            Topics
          </a>

          <a href="#disclaimer" className={styles.navigationLink}>
            Disclaimer
          </a>

          <a href="#support" className={styles.navigationLink}>
            Support
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className={styles.heroSection}>
        <div>
          <div className={styles.audienceBadge}>
            For seniors, families, and adult children helping loved ones
          </div>

          <h1 className={styles.heroHeading}>
            Before you switch Medicare plans, understand what you may be giving up.
          </h1>

          <p className={styles.heroDescription}>
            Commercials about “Senior Give Back Allowances,” flex cards, grocery benefits,
            dental benefits, and transportation benefits can sound helpful — and sometimes
            they are. But seniors deserve the full story before changing how their hospital
            and medical coverage is accessed. This site also helps older adults recognize
            deceptive insurance advertising, government-like sales tactics, and unsafe calls.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#questions"
              className={styles.primaryAction}
            >
              See Questions to Ask First
            </a>

            <Link
              to="/check-before-you-switch"
              className={styles.secondaryAction}
            >
              Check an Ad or Message
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroBackdrop} />

          <div className={styles.heroDecisionCard}>
            <div className={styles.heroQuestionPanel}>
              <p className={styles.sectionEyebrow}>
                The question is not only
              </p>

              <p className={styles.standardSectionHeading}>
                “What benefit do I get?”
              </p>

              <div className={styles.questionDivider} />

              <p className={styles.sectionEyebrow}>
                The question is also
              </p>

              <p className={styles.informationSectionHeading}>
                “What changes when I enroll?”
              </p>
            </div>

            <div className={styles.informationSupportingText}>
              Medicare Advantage may include extra benefits, but it may also involve
              provider networks, plan rules, prior authorization, and different costs.
              Always compare the full plan — not just the advertised allowance.
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Safety Help */}
      <section id="safety-help" className={styles.sectionWithBottomSpacing}>
        <div className={styles.safetyContentCard}>
          <div className={styles.readingColumn}>
            <p className={styles.safetyEyebrow}>
              Get help now
            </p>

            <h2 className={styles.safetySectionHeading}>
              If something already happened, start here without embarrassment or blame.
            </h2>

            <p className={styles.safetyIntroduction}>
              Deceptive advertising and high-pressure calls are designed to create confusion.
              These tools help seniors, families, and caregivers take the next safe step.
            </p>
          </div>

          <div className={styles.threeColumnLayout}>
            {safetyTools.map((tool) => (
              <article
                key={tool.title}
                className={styles.safetyToolCard}
              >
                <h3 className={styles.standardCardHeading}>{tool.title}</h3>
                <p className={styles.standardSupportingText}>{tool.text}</p>
                <Link
                  to={tool.href}
                  className={styles.cardAction}
                >
                  {tool.linkText} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Check Before You Switch CTA */}
      <section className={styles.sectionWithBottomSpacing}>
        <div className={styles.informationContentCard}>
          <div className={styles.decorativeAccent} />

          <div className={styles.positionedContent}>
            <p className={styles.sectionEyebrow}>
              Simple tool
            </p>

            <h2 className={styles.sectionHeading}>
              Check a Medicare ad or message before you trust it.
            </h2>

            <p className={styles.sectionIntroduction}>
              Paste the words from a Medicare ad, mailer, text message, email, or phone script.
              This tool can help you notice words that may need a closer look before you change
              your coverage.
            </p>

            <Link
              to="/check-before-you-switch"
              className={styles.informationEmphasis}
            >
              Check Before You Switch
            </Link>
          </div>
        </div>
      </section>

      {/* Support This Project */}
      <section id="support" className={styles.sectionWithBottomSpacing}>
        <div className={styles.standardContentCard}>
          <div className={styles.supportCardAccent} />

          <div className={styles.responsiveContentGrid}>
            <div>
              <p className={styles.sectionEyebrow}>
                Support senior education
              </p>

              <h2 className={styles.sectionHeading}>
                Help keep this Medicare scam-awareness resource available.
              </h2>

              <p className={styles.sectionIntroduction}>
                Medicare Before You Switch is an independent educational project created
                to help seniors, families, and caregivers slow down, ask better questions,
                and recognize red flags before responding to Medicare ads, messages, or
                phone calls.
              </p>

              <p className={styles.standardBodyText}>
                Contributions help support website hosting, research time, printable guides,
                accessibility improvements, and free plain-language educational resources.
              </p>

              <p className={styles.cautionSupportingText}>
                This project is not a nonprofit organization, and contributions are not
                tax-deductible charitable donations.
              </p>
            </div>

            <div className={styles.supportCallout}>
              <h3 className={styles.standardCardHeading}>
                Want to support the project?
              </h3>

              <p className={styles.bodyText}>
                Your support helps make it possible to create more free guides, checklists,
                and tools for older adults and the people helping them.
              </p>

              <a
                href="https://buy.stripe.com/eVq9AMdR04oG3bX99x2cg08"
                target="_blank"
                rel="noreferrer"
                className={styles.supportButton}
              >
                Support This Project
              </a>

              <p className={styles.standardFinePrint}>
                Please do not send personal Medicare information, Social Security numbers,
                or private health details through a support payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className={styles.dividedSection}>
        <div className={styles.credibilityItems}>
          <div>
            <p className={styles.detailLabel}>Independent education</p>
            <p className={styles.cardDescription}>
              This site is designed to help families understand Medicare choices before
              responding to advertisements.
            </p>
          </div>

          <div>
            <p className={styles.detailLabel}>Published by Stabile USA</p>
            <p className={styles.cardDescription}>
              Stabile USA is presented here as a neutral educational publisher, not as
              Medicare, CMS, or a government agency.
            </p>
          </div>

          <div>
            <p className={styles.detailLabel}>No pressure to enroll</p>
            <p className={styles.cardDescription}>
              The purpose is to slow the decision down and encourage careful review of
              doctors, hospitals, benefits, costs, and retiree coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className={styles.alternateSection}>
        <div className={styles.centeredStatement}>
          <p className={styles.sectionEyebrow}>
            Why this site exists
          </p>

          <h2 className={styles.sectionHeading}>
            The benefit may be real. The problem is when the tradeoff is hidden.
          </h2>

          <p className={styles.standardIntroduction}>
            Some Medicare Advantage plans can be helpful for the right person. Dental,
            vision, hearing, transportation, prescription drug coverage, OTC benefits,
            and other extras can matter. But no senior should be rushed into changing
            coverage because a commercial made a serious healthcare decision sound like
            free money.
          </p>
        </div>
      </section>

      {/* Senior Consumer Safety */}
      <section id="advertising-warnings" className={styles.plainSection}>
        <div className={styles.sectionContent}>
          <div className={styles.readingColumn}>
            <p className={styles.sectionEyebrow}>
              Senior consumer safety
            </p>

            <h2 className={styles.sectionHeading}>
              Recognize what an advertisement, sales call, or official-looking message may leave out.
            </h2>

            <p className={styles.sectionIntroduction}>
              Consumer safety does not stop with Medicare. Some commercials shown to older
              adults are selling private life insurance, auto insurance, or another product
              while using government-like settings, official-sounding language, words such as
              “state-approved benefit,” urgent weekly deadlines, or cheerful scenes of
              families receiving money after someone dies. Slow down and identify exactly
              what is being sold before calling or sharing personal information.
            </p>
          </div>

          <div className={styles.twoColumnLayout}>
            <article className={styles.cautionContentCard}>
              <p className={styles.cautionEyebrow}>
                “State-approved benefit — call by Friday”
              </p>

              <h3 className={styles.cautionFeatureTitle}>
                State approval is not the same as a state-funded benefit.
              </h3>

              <p className={styles.cautionBodyText}>
                A private insurance policy may be regulated or approved for sale by a
                state. That does not mean the state is giving residents money, recommending
                the policy, or paying for the coverage.
              </p>

              <ul className={styles.cautionChecklist}>
                <li>• A deadline that returns every Friday may be a sales-pressure tactic.</li>
                <li>• The advertised “benefit” may require monthly life-insurance premiums.</li>
                <li>• The telephone number may lead to a marketing center rather than a government agency.</li>
                <li>• Ask for the legal name of the agency, insurer, policy, premiums, exclusions, and waiting period.</li>
              </ul>

              <div className={styles.directQuestionBox}>
                <p className={styles.cautionEmphasis}>Ask this directly:</p>
                <p className={styles.directQuestionText}>
                  “Is this money provided by the government, or are you selling me an insurance policy?”
                </p>
              </div>
            </article>

            <article className={styles.majorSafetyWarningCard}>
              <p className={styles.safetyCardEyebrow}>
                “$25,000 right here!”
              </p>

              <h3 className={styles.safetyFeatureTitle}>
                A life-insurance payment is not a prize.
              </h3>

              <p className={styles.safetyBodyText}>
                Some commercials show beneficiaries celebrating a large check after a
                loved one dies. That presentation can make the payment look like easy or
                free money while minimizing the loss, the premiums paid, and the policy’s
                restrictions.
              </p>

              <ul className={styles.safetySupportingText}>
                <li>• The death benefit is generally paid only after the insured person dies.</li>
                <li>• The insured person may have paid premiums for years.</li>
                <li>• Some policies limit benefits during an initial waiting period.</li>
                <li>• The advertised amount may not be available to every applicant.</li>
                <li>• Families may need the proceeds for funeral costs, debts, or immediate expenses.</li>
              </ul>

              <div className={styles.safetyReminderBox}>
                <p className={styles.safetyEmphasis}>Remember:</p>
                <p className={styles.safetyReminderText}>
                  A death benefit is a contractual payment following someone’s death—not
                  a cash giveaway, prize, or automatic senior benefit.
                </p>
              </div>
            </article>
          </div>

          <div className={styles.centralTruthPanel}>
            <div className={styles.centralTruthIntroduction}>
              <p className={styles.centralTruthEyebrow}>
                The central truth
              </p>

              <h3 className={styles.standardFeatureHeading}>
                Life insurance is not a prize.
              </h3>

              <p className={styles.inverseIntroduction}>
                The payment exists because someone died. It is a contractual death
                benefit—not free money, a government giveaway, or a contest reward.
              </p>
            </div>

            <div className={styles.commercialRealityComparison}>
              <div className={styles.commercialClaimsColumn}>
                <p className={styles.safetyCardEyebrow}>
                  What the commercial shows
                </p>

                <ul className={styles.commercialClaimsList}>
                  <li>• Someone excitedly holding a $25,000 check</li>
                  <li>• A beneficiary shouting, “Money right here!”</li>
                  <li>• Smiling people treating the payment like a windfall</li>
                  <li>• A large benefit amount filling the screen</li>
                  <li>• A fast and uncomplicated approval story</li>
                </ul>
              </div>

              <div className={styles.policyRealityColumn}>
                <p className={styles.standardEyebrow}>
                  What it actually means
                </p>

                <ul className={styles.policyRealityList}>
                  <li>• A loved one has died</li>
                  <li>• A claim under a private insurance contract was approved</li>
                  <li>• The insured person may have paid premiums for years</li>
                  <li>• The family may need the proceeds for funeral costs and debts</li>
                  <li>• Waiting periods, exclusions, and reduced early benefits may apply</li>
                </ul>
              </div>
            </div>
          </div>

          <figure className={styles.lifeInsuranceGraphic}>
            <img
              src="/life-insurance-not-a-prize.png"
              alt="A comparison between an exaggerated commercial celebrating a $25,000 life-insurance approval and the reality that a death benefit is paid only after someone dies. Life insurance is protection, not a prize."
              width="1254"
              height="1254"
              loading="lazy"
              decoding="async"
              className={styles.lifeInsuranceImage}
            />

            <figcaption className={styles.lifeInsuranceCaption}>
              A death benefit is financial protection following a loss—not an award,
              honor, government giveaway, or prize.
            </figcaption>
          </figure>

          <div className={styles.policyEvaluationGrid}>
            <div className={styles.policyCostCard}>
              <p className={styles.standardEyebrow}>
                Do not judge the policy by the check
              </p>

              <h3 className={styles.cardHeading}>
                Judge it by what the policy promises and what it costs.
              </h3>

              <p className={styles.bodyText}>
                The check displayed in a commercial does not tell viewers what the insured
                paid, whether premiums can increase, how long coverage must be in force, or
                what happens if the insured dies during an initial waiting period.
              </p>
            </div>

            <div className={styles.policyQuestionsCard}>
              <p className={styles.cautionEyebrow}>
                Questions to ask before buying
              </p>

              <ul className={styles.cautionChecklist}>
                <li>• What is the exact monthly premium, and can it increase?</li>
                <li>• What is the exact death benefit for this applicant?</li>
                <li>• Is there a graded benefit or waiting period?</li>
                <li>• If the insured dies during the first two years, exactly what will the beneficiary receive?</li>
                <li>• What exclusions or circumstances could reduce or prevent payment?</li>
                <li>• How much could be paid in total premiums if the policy is kept for 5, 10, or 20 years?</li>
              </ul>
            </div>
          </div>

          <div className={styles.categoryReminder}>
            <p className={styles.informationEyebrow}>
              Keep the categories separate
            </p>

            <h3 className={styles.cardHeading}>
              Life insurance is not Medicare.
            </h3>

            <p className={styles.wideBodyText}>
              A commercial aimed at seniors may appear during the same programs as Medicare
              advertisements and may use similar words such as “benefit” or “approved.” That
              does not make the offer part of Medicare, Medicaid, Social Security, or another
              government program.
            </p>
          </div>
        </div>
      </section>

      {/* Medicare Basics */}
      <section className={styles.plainSection}>
        <div className={styles.sectionContent}>
          <div className={styles.readingColumn}>
            <p className={styles.sectionEyebrow}>
              Medicare basics
            </p>

            <h2 className={styles.sectionHeading}>
              Before comparing plans, understand what Medicare and Medicaid mean.
            </h2>

            <p className={styles.sectionIntroduction}>
              Many advertisements use words like Medicare, Medicaid, allowance, give-back,
              and benefits in ways that can confuse people. These programs are related to
              healthcare, but they are not the same thing.
            </p>
          </div>

          <div className={styles.medicareBasicsGrid}>
            <article className={styles.medicareBasicsCard}>
              <p className={styles.standardEyebrow}>
                What is Medicare?
              </p>

              <h3 className={styles.cardHeading}>
                Medicare is health insurance mainly for people 65 or older.
              </h3>

              <p className={styles.bodyText}>
                Medicare is a federal health insurance program. Most people become eligible
                at age 65, but some people may qualify earlier because of a disability,
                End-Stage Renal Disease, or ALS.
              </p>

              <ul className={styles.officialResourceList}>
                <li>• Part A helps cover hospital care.</li>
                <li>• Part B helps cover doctor and outpatient care.</li>
                <li>• Part C is Medicare Advantage through private insurance companies.</li>
                <li>• Part D helps cover prescription drugs.</li>
              </ul>
            </article>

            <article className={styles.dualEligibilityCard}>
              <p className={styles.informationEyebrow}>
                Current Part B cost
              </p>

              <h3 className={styles.cardHeading}>
                The standard Part B premium is $202.90 per month in 2026.
              </h3>

              <p className={styles.bodyText}>
                Most people pay the standard Part B premium. In 2026, the standard monthly
                Part B premium is $202.90, and the Part B deductible is $283 for the year.
              </p>

              <div className={styles.dualEligibilityExplanation}>
                <p className={styles.detailLabel}>
                  Important to remember:
                </p>

                <p className={styles.cardDescription}>
                  A Medicare Advantage plan may advertise a $0 plan premium, but the person
                  usually still pays the Part B premium unless a specific give-back benefit
                  reduces part of it.
                </p>
              </div>
            </article>

            <article className={styles.verificationCard}>
              <p className={styles.standardEyebrow}>
                What is Medicaid?
              </p>

              <h3 className={styles.cardHeading}>
                Medicaid is different from Medicare.
              </h3>

              <p className={styles.bodyText}>
                Medicaid provides health coverage for eligible people with limited income
                and resources. It is administered by states according to federal requirements
                and is funded jointly by states and the federal government.
              </p>

              <div className={styles.eligibilityExplanation}>
                <p className={styles.detailLabel}>
                  Why this matters:
                </p>

                <p className={styles.cardDescription}>
                  Some people have both Medicare and Medicaid. Others have Medicare only.
                  Eligibility for Medicaid can affect which benefits, costs, and plan options
                  apply.
                </p>
              </div>
            </article>
          </div>

          <div className={styles.commonConfusionCard}>
            <p className={styles.safetyCardEyebrow}>
              Common confusion
            </p>

            <h3 className={styles.safetyCardHeading}>
              Medicare and Medicaid are not interchangeable.
            </h3>

            <p className={styles.commonConfusionText}>
              A Medicare ad may mention extra help, Medicaid, dual eligibility, grocery
              cards, give-back benefits, or special needs plans. Those details can depend on
              income, location, Medicaid status, health conditions, and the exact plan. Before
              switching coverage, seniors should confirm what they personally qualify for.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Switch Guide */}
      <section id="before-switching" className={styles.alternateSection}>
        <div className={styles.sectionContent}>
          <div className={styles.readingColumn}>
            <p className={styles.sectionEyebrow}>
              Before you switch
            </p>

            <h2 className={styles.sectionHeading}>
              Medicare Advantage may help some people — but the full decision matters.
            </h2>

            <p className={styles.sectionIntroduction}>
              A Medicare Advantage plan is not automatically bad. Some people like their plan,
              their doctors are in network, their prescriptions are covered, and the extra benefits
              are useful. The concern is switching because of an advertisement without understanding
              the costs, rules, networks, and possible tradeoffs.
            </p>
          </div>

          <div className={styles.twoColumnLayout}>
            <article className={styles.careVerificationCard}>
              <p className={styles.standardEyebrow}>
                Do not enroll until you verify
              </p>

              <h3 className={styles.standardFeatureTitle}>
                Check the care you actually use.
              </h3>

              <p className={styles.bodyText}>
                Before changing Medicare coverage, write these details down and compare them
                against the exact plan documents — not just the commercial or phone script.
              </p>

              <ul className={styles.careVerificationList}>
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
                  <li key={item} className={styles.verificationListItem}>
                    <span className={styles.verificationCheckmark}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.majorSafetyWarningCard}>
              <p className={styles.safetyCardEyebrow}>
                Medigap caution
              </p>

              <h3 className={styles.safetyFeatureTitle}>
                Leaving Original Medicare with Medigap can be a serious decision.
              </h3>

              <p className={styles.safetyBodyText}>
                If someone currently has Original Medicare with a Medigap policy, they should
                ask whether they can get that Medigap policy back later if they switch to Medicare
                Advantage and change their mind.
              </p>

              <div className={styles.safetyReminderBox}>
                <p className={styles.safetyEmphasis}>
                  Important question:
                </p>

                <p className={styles.safetyReminderText}>
                  “If I leave this Medigap policy, will I have guaranteed rights to buy a Medigap
                  policy later, or could I have to answer health questions and go through medical
                  underwriting?”
                </p>
              </div>

              <p className={styles.medigapCautionNote}>
                Rules can depend on timing, state protections, and the person’s situation. This is
                one reason seniors should verify before switching.
              </p>
            </article>
          </div>

          <div className={styles.guidanceCardGrid}>
            <article className={styles.verificationCard}>
              <p className={styles.standardEyebrow}>
                Who to contact first
              </p>

              <h3 className={styles.cardHeading}>
                Do not rely only on the ad.
              </h3>

              <p className={styles.bodyText}>
                Before switching, compare the offer with official or direct sources.
              </p>

              <ul className={styles.officialResourceList}>
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

            <article className={styles.dualEligibilityCard}>
              <p className={styles.informationEyebrow}>
                Dual Eligible
              </p>

              <h3 className={styles.cardHeading}>
                Some people have both Medicare and Medicaid.
              </h3>

              <p className={styles.bodyText}>
                People who have both Medicare and full Medicaid coverage are often called
                “dually eligible.” Medicare generally pays first for Medicare-covered services,
                and Medicaid pays after Medicare and any other insurance.
              </p>

              <div className={styles.dualEligibilityExplanation}>
                <p className={styles.detailLabel}>
                  Why this matters:
                </p>

                <p className={styles.cardDescription}>
                  Dual eligibility can affect costs, plan choices, Special Needs Plans, extra help,
                  and whether certain advertised benefits apply.
                </p>
              </div>
            </article>

            <article className={styles.verificationCard}>
              <p className={styles.standardEyebrow}>
                Red flag phrases
              </p>

              <h3 className={styles.cardHeading}>
                These words deserve a closer look.
              </h3>

              <p className={styles.bodyText}>
                These phrases are not automatically scams, but they are reasons to slow down and verify.
              </p>

              <div className={styles.redFlagPhraseList}>
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
                    className={styles.redFlagPhrase}
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className={styles.programComparisonCard}>
            <div className={styles.programComparisonLayout}>
              <div>
                <p className={styles.standardEyebrow}>
                  Medicare vs. Medicaid reminder
                </p>

                <h3 className={styles.standardFeatureTitle}>
                  Similar names, different programs.
                </h3>

                <p className={styles.bodyText}>
                  Medicare and Medicaid can work together for some people, but they are not the
                  same program. That is why eligibility words in advertisements should be checked
                  carefully.
                </p>
              </div>

              <div className={styles.programSummaryGrid}>
                <div className={styles.medicareSummary}>
                  <p className={styles.standardEmphasis}>Medicare</p>
                  <p className={styles.cardDescription}>
                    Federal health insurance mainly for people 65 or older, and for some younger
                    people with disabilities, End-Stage Renal Disease, or ALS.
                  </p>
                </div>

                <div className={styles.medicaidSummary}>
                  <p className={styles.standardEmphasis}>Medicaid</p>
                  <p className={styles.cardDescription}>
                    Health coverage for eligible people with limited income and resources. It is
                    administered by states under federal rules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomLineCard}>
            <p className={styles.cautionEyebrow}>
              Bottom line
            </p>

            <h3 className={styles.cautionCardHeading}>
              The benefit may be real, but the decision is bigger than the benefit.
            </h3>

            <p className={styles.bottomLineText}>
              Before switching coverage because of a grocery card, give-back allowance, dental
              benefit, or $0 premium message, seniors should compare the full plan: doctors,
              hospitals, prescriptions, prior authorization, referrals, out-of-pocket exposure,
              retiree benefits, and whether Medicaid or dual eligibility affects their options.
            </p>
          </div>
        </div>
      </section>

      {/* Example Comparison */}
      <section className={styles.plainSection}>
        <div className={styles.sectionContent}>
          <div className={styles.readingColumn}>
            <p className={styles.sectionEyebrow}>
              Example comparison
            </p>

            <h2 className={styles.sectionHeading}>
              Do not compare only the advertised benefit. Compare the costs behind the plan.
            </h2>

            <p className={styles.sectionIntroduction}>
              A grocery card, dental benefit, or give-back allowance may sound helpful.
              But before switching Medicare coverage, seniors should also compare hospital
              costs, doctor costs, drug coverage, network rules, prior authorization, and
              maximum out-of-pocket exposure.
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={styles.comparisonTableHeader}>
              <div className={styles.comparisonTopicHeader}>
                <p className={styles.comparisonHeaderText}>
                  What to compare
                </p>
              </div>

              <div className={styles.comparisonPlanHeader}>
                <p className={styles.comparisonHeaderText}>
                  Original Medicare example
                </p>
              </div>

              <div className={styles.comparisonPlanHeader}>
                <p className={styles.comparisonHeaderText}>
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
                className={styles.comparisonTableRow}
              >
                <div className={styles.comparisonTopicCell}>
                  <p className={styles.standardEmphasis}>{row.item}</p>
                </div>

                <div className={styles.comparisonDetailCell}>
                  <p className={styles.supportingText}>{row.original}</p>
                </div>

                <div className={styles.comparisonDetailCell}>
                  <p className={styles.supportingText}>{row.advantage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.comparisonTakeawayGrid}>
            <div className={styles.costTakeawayCard}>
              <p className={styles.standardEyebrow}>
                The takeaway
              </p>

              <h3 className={styles.cardHeading}>
                A lower premium does not automatically mean lower total cost.
              </h3>

              <p className={styles.costTakeawayText}>
                The real question is what the person may pay when they actually need care:
                hospital stays, specialists, outpatient procedures, prescriptions, ambulance
                services, and out-of-network care.
              </p>
            </div>

            <div className={styles.planSpecificWarningCard}>
              <p className={styles.safetyCardEyebrow}>
                Important reminder
              </p>

              <h3 className={styles.safetyCardHeading}>
                Medicare Advantage costs are plan-specific.
              </h3>

              <p className={styles.planSpecificWarningText}>
                The Medicare Advantage column above is only an example of what to look for.
                Seniors should review the exact plan’s Evidence of Coverage, Summary of
                Benefits, provider directory, drug formulary, and maximum out-of-pocket cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section id="questions" className={styles.sectionContent}>
        <div className={styles.readingColumn}>
          <p className={styles.sectionEyebrow}>
            Before anyone switches
          </p>

          <h2 className={styles.sectionHeading}>
            Ask these questions before responding to a Medicare commercial.
          </h2>
        </div>

        <div className={styles.questionsGrid}>
          {questions.map((question) => (
            <div
              key={question}
              className={styles.questionCard}
            >
              <p className={styles.questionText}>
                {question}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Caution Statement */}
      <section className={styles.sectionWithBottomSpacing}>
        <div className={styles.retireeWarningCard}>
          <p className={styles.safetyEyebrow}>
            Important warning
          </p>

          <h2 className={styles.retireeWarningHeading}>
            No one should give up valuable retirement benefits just to chase an advertised allowance.
          </h2>

          <p className={styles.retireeWarningText}>
            Before changing Medicare coverage, seniors should confirm whether the switch could
            affect employer, union, military, retiree, or other benefits they already have.
            A flex card or give-back benefit may sound helpful, but it should never replace a
            full review of the coverage they may be changing.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className={styles.topicsSection}>
        <div className={styles.sectionContent}>
          <div className={styles.readingColumn}>
            <p className={styles.sectionEyebrow}>
              Plain-language Medicare education
            </p>

            <h2 className={styles.sectionHeading}>
              Learn the parts of the decision commercials often leave out.
            </h2>
          </div>

          <div className={styles.topicGrid}>
            {topics.map((topic) => (
              <article
                key={topic.title}
                className={styles.inverseContentCard}
              >
                <h3 className={styles.standardCardHeading}>
                  {topic.title}
                </h3>

                <p className={styles.bodyText}>
                  {topic.text}
                </p>

                <Link
                  to={topic.href}
                  className={styles.cardAction}
                >
                  Read this guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className={styles.narrowSectionContent}>
        <div className={styles.personalNoteCard}>
          <p className={styles.sectionEyebrow}>
            A note from Pamela
          </p>

          <h2 className={styles.sectionHeading}>
            I built this because seniors deserve better than half the story.
          </h2>

          <p className={styles.personalNoteOpening}>
            After spending around 15 years in the insurance industry, including
            experience with major insurance companies and selling Medicare Advantage
            plans during the pandemic, I understand how confusing these decisions can
            become. This site is here to slow the conversation down and help families
            ask better questions before a loved one changes coverage.
          </p>

          <p className={styles.supportingParagraph}>
            This is not about saying every Medicare Advantage plan is bad. It is about
            making sure seniors understand the full decision — including doctors,
            hospitals, prescriptions, retiree benefits, networks, authorizations, and
            out-of-pocket costs — before they switch.
          </p>
        </div>
      </section>

      {/* Stabile USA publisher note */}
      <section className={styles.dividedSection}>
        <div className={styles.compactSectionContent}>
          <p className={styles.sectionEyebrow}>
            Published by Stabile USA
          </p>

          <h2 className={styles.publisherHeading}>
            A neutral educational resource created to support clearer decisions.
          </h2>

          <p className={styles.supportingParagraph}>
            Medicare Before You Switch is published by Stabile USA as an independent
            educational project. The goal is to provide plain-language information that
            helps seniors and families pause, compare, and ask better questions before
            changing Medicare coverage.
          </p>

          <p className={styles.supportingParagraph}>
            Stabile USA is not affiliated with Medicare, CMS, HHS, or any government
            agency. This site does not represent itself as an official Medicare resource.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className={styles.softSection}>
        <div className={styles.compactSectionContent}>
          <h2 className={styles.standardCardHeading}>
            Important disclaimer
          </h2>

          <p className={styles.disclaimerText}>
            MedicareBeforeYouSwitch.com is an independent educational resource published
            by Stabile USA. It is not affiliated with Medicare, CMS, HHS, or any
            government agency. The information on this site is for general education only
            and should not be treated as legal, financial, medical, or personal insurance
            advice. Before changing Medicare coverage, beneficiaries should verify details
            with Medicare.gov, the plan’s official documents, their retiree benefits
            administrator, a SHIP counselor, or a properly licensed professional.
          </p>

          <div className={styles.disclaimerLinks}>
            <a
              href="https://www.medicare.gov/"
              target="_blank"
              rel="noreferrer"
              className={styles.textLink}
            >
              Visit Medicare.gov
            </a>

            <a
              href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/plan-marketing-rules"
              target="_blank"
              rel="noreferrer"
              className={styles.textLink}
            >
              Medicare Plan Marketing Rules
            </a>

            <a
              href="https://www.cms.gov/medicare/health-drug-plans/managed-care-marketing/medicare-guidelines"
              target="_blank"
              rel="noreferrer"
              className={styles.textLink}
            >
              CMS Marketing Guidelines
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.siteFooter}>
        <p className={styles.footerSiteName}>Medicare Before You Switch</p>

        <p className={styles.footerPurpose}>
          Understand the full Medicare decision — not just the allowance in the commercial.
        </p>

        <p className={styles.footerPublisher}>
          Published by Stabile USA, an independent educational media brand created by Pamela J. Terrell.
        </p>

        <p className={styles.footerCopyright}>
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
      <Route
        path="/already-shared-information"
        element={<AlreadySharedInformation />}
      />
      <Route
        path="/report-an-insurance-concern"
        element={<ReportInsuranceConcern />}
      />
      <Route path="/phone-safety-card" element={<PhoneSafetyCard />} />
    </Routes>
  );
}