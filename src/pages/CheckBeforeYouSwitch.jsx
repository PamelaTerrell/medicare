import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const WORDS_TO_CHECK = [
  {
    id: "giveback",
    label: "Money back or Part B giveback",
    patterns: ["give back", "giveback", "part b reduction", "money back", "premium reduction"],
    concern:
      "This can sound like free money, but it may depend on your county, the plan, and whether you qualify.",
    questions: [
      "Is this available in my exact ZIP code and county?",
      "Will this lower what comes out of my Social Security check?",
      "What costs, rules, or provider limits come with this plan?",
    ],
  },
  {
    id: "allowance",
    label: "Allowance, flex card, grocery card, or spending card",
    patterns: ["allowance", "flex card", "spending card", "grocery card", "utility card", "otc card"],
    concern:
      "Cards and allowances often have rules. They may only work for certain items, stores, months, or people.",
    questions: [
      "What exactly can this card or allowance be used for?",
      "Is it monthly, quarterly, or yearly?",
      "Does unused money roll over or expire?",
      "Where can it be used?",
    ],
  },
  {
    id: "free",
    label: "Free, $0, or no-cost wording",
    patterns: ["free", "$0", "zero premium", "no cost", "no-cost"],
    concern:
      "$0 premium does not always mean $0 healthcare cost. There may still be copays, deductibles, networks, and out-of-pocket costs.",
    questions: [
      "What is the most I could pay out of pocket in a year?",
      "What will I pay for doctor visits, specialists, hospital stays, and prescriptions?",
      "Are my doctors and hospitals in the plan network?",
    ],
  },
  {
    id: "urgency",
    label: "Hurry-up wording",
    patterns: ["act now", "limited time", "urgent", "deadline", "do not miss", "call immediately", "last chance"],
    concern:
      "Pressure can cause people to make a healthcare decision before they fully understand it.",
    questions: [
      "Do I really need to decide today?",
      "What enrollment period applies to me right now?",
      "Can I read the plan documents first?",
    ],
  },
  {
    id: "eligibility",
    label: "You qualify or you may qualify",
    patterns: ["you qualify", "you may qualify", "eligible", "pre-approved", "approved"],
    concern:
      "This wording can be broad. You may still need to meet rules based on your location, income, Medicaid status, health condition, or plan.",
    questions: [
      "What exactly makes me eligible?",
      "Is this based on my county, income, Medicaid, health condition, or something else?",
      "Who is checking my eligibility?",
    ],
  },
  {
    id: "provider",
    label: "Keep your doctor or any doctor",
    patterns: ["keep your doctor", "your doctor is covered", "all doctors", "any doctor", "no network"],
    concern:
      "Doctor and hospital access should always be checked before switching. Network rules can change from plan to plan.",
    questions: [
      "Is my exact doctor in this exact plan for this exact year?",
      "Are my specialists, hospital, pharmacy, and labs also in network?",
      "Will I need referrals or prior authorization?",
    ],
  },
  {
    id: "prescriptions",
    label: "Prescription or medication wording",
    patterns: ["prescription", "drug coverage", "rx", "medications", "pharmacy"],
    concern:
      "Prescription costs depend on the plan’s drug list, tiers, pharmacy network, and rules.",
    questions: [
      "Are all of my medications covered?",
      "What tier is each medication on?",
      "Do any medications need approval first?",
      "Is my pharmacy in network?",
    ],
  },
  {
    id: "official",
    label: "Official-sounding Medicare wording",
    patterns: ["medicare department", "government benefit", "official medicare", "medicare office", "federal benefit"],
    concern:
      "Some ads can sound official even when they come from a private company, broker, agency, or lead company.",
    questions: [
      "Who exactly sent this message?",
      "Is this from Medicare.gov, a private insurance company, a broker, or a lead company?",
      "Can I check this information directly with Medicare.gov or the plan documents?",
    ],
  },
  {
    id: "personal-info",
    label: "Personal information request",
    patterns: [
      "medicare number",
      "social security number",
      "bank account",
      "credit card",
      "date of birth",
      "verify your identity",
      "confirm your information",
    ],
    concern:
      "Be careful when a message or caller asks for personal information, especially if they contacted you first.",
    questions: [
      "Who contacted me first?",
      "Why do they need this information?",
      "Can I call the official number on the plan website or Medicare.gov instead?",
      "Should I speak with SHIP or Medicare before sharing anything?",
    ],
  },
];

const SOURCE_OPTIONS = [
  "TV commercial",
  "Postcard or mailer",
  "Phone call",
  "Text message",
  "Email",
  "Website",
  "Social media ad",
  "Someone in person",
  "Not sure",
];

function cleanText(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function findWordsToCheck(text) {
  const cleaned = cleanText(text);

  return WORDS_TO_CHECK.map((item) => {
    const matchedWords = item.patterns.filter((pattern) =>
      cleaned.includes(pattern.toLowerCase())
    );

    return {
      ...item,
      matchedWords,
      matched: matchedWords.length > 0,
    };
  }).filter((item) => item.matched);
}

function getReviewLevel(count, osintCount, siteVerification) {
  const total = count + osintCount;

  if (siteVerification?.safeBrowsing?.status === "unsafe_match_found") {
    return {
      label: "Do not enter personal information",
      description:
        "Google flagged this website in Google’s website safety list. Do not enter personal information on that site. Verify through Medicare.gov, SHIP, or official plan documents instead.",
    };
  }

  if (total >= 7) {
    return {
      label: "Look very closely before switching",
      description:
        "Several items need checking. Do not rush. Verify the sender, website, phone number, doctors, drugs, costs, and plan documents before changing coverage.",
    };
  }

  if (total >= 4) {
    return {
      label: "Check carefully",
      description:
        "This message has several things worth checking before you rely on it or share personal information.",
    };
  }

  if (total >= 1) {
    return {
      label: "A few things to check",
      description:
        "Some wording or source details may need a closer look before making a decision.",
    };
  }

  return {
    label: "No common warning words found",
    description:
      "This tool did not find the common warning words it knows to look for. You should still check doctors, drugs, costs, networks, and plan rules before switching.",
  };
}

function normalizeUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function getDomain(url) {
  try {
    const parsed = new URL(normalizeUrl(url));
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function analyzeWebsite(url) {
  const results = [];
  const normalized = normalizeUrl(url);
  const domain = getDomain(url);

  if (!url.trim()) return results;

  if (!domain) {
    results.push({
      title: "Website format",
      text: "The website link does not look complete. Check that it was typed exactly as shown on the ad or message.",
    });
    return results;
  }

  if (!normalized.startsWith("https://")) {
    results.push({
      title: "Website security",
      text: "This link does not appear to use HTTPS. Be careful before entering personal information.",
    });
  }

  if (domain.includes("medicare") && !domain.endsWith("medicare.gov")) {
    results.push({
      title: "Website uses the word Medicare",
      text: "This website uses Medicare-related wording but does not appear to be Medicare.gov. Check who owns the site before trusting it.",
    });
  }

  if (domain.endsWith(".gov")) {
    results.push({
      title: "Government website ending",
      text: "This website ends in .gov, which is usually used by government agencies. Still make sure the page is really about the offer you received.",
    });
  }

  if (!domain.endsWith(".gov") && !domain.endsWith("medicare.gov")) {
    results.push({
      title: "Private website",
      text: "This appears to be a private website, not Medicare.gov. Look for the company name, privacy policy, disclaimer, and who will receive your information.",
    });
  }

  const benefitTerms = [
    "benefit",
    "benefits",
    "giveback",
    "allowance",
    "senior",
    "seniors",
    "card",
    "free",
  ];

  const termMatches = benefitTerms.filter((term) => domain.includes(term));

  if (termMatches.length > 0) {
    results.push({
      title: "Benefit-focused website name",
      text: "The website name uses benefit-style wording. That does not make it bad, but it is a reason to check who owns it and whether it is a lead form.",
    });
  }

  return results;
}

function analyzePhone(phone) {
  const results = [];
  const cleaned = phone.replace(/[^\d]/g, "");

  if (!phone.trim()) return results;

  if (cleaned.length < 10) {
    results.push({
      title: "Phone number",
      text: "This phone number looks incomplete. Check the number exactly as it appears on the ad, mailer, or caller ID.",
    });
  }

  if (cleaned.length >= 10) {
    results.push({
      title: "Phone number check",
      text: "Search this phone number online and compare it with the official company website. If it does not match, call the official number instead.",
    });
  }

  return results;
}

function analyzeSource({
  sourceType,
  companyName,
  website,
  contactedFirst,
  asksPersonalInfo,
  saysGovernment,
  hasDisclaimer,
}) {
  const results = [];

  if (sourceType === "Phone call" || sourceType === "Text message") {
    results.push({
      title: "Unexpected contact",
      text: "Phone calls and text messages should be checked carefully, especially if the person contacted you first.",
    });
  }

  if (!companyName.trim()) {
    results.push({
      title: "Missing company name",
      text: "If the ad or caller does not clearly say who they are, do not share personal information until you can identify the company.",
    });
  }

  if (contactedFirst === "yes") {
    results.push({
      title: "They contacted you first",
      text: "When someone contacts you first, slow down. Use an official website or Medicare.gov to verify before sharing information.",
    });
  }

  if (asksPersonalInfo === "yes") {
    results.push({
      title: "Personal information requested",
      text: "Be careful before giving a Medicare number, Social Security number, bank information, credit card, or date of birth to someone who contacted you.",
    });
  }

  if (saysGovernment === "yes" && website && !getDomain(website).endsWith(".gov")) {
    results.push({
      title: "Government-sounding message",
      text: "The message sounds government-related, but the website entered does not appear to be a .gov website. Check this carefully.",
    });
  }

  if (hasDisclaimer === "no") {
    results.push({
      title: "No clear government disclaimer",
      text: "Many private Medicare-related ads should clearly explain that they are not Medicare or a government agency. Look for that wording.",
    });
  }

  return results;
}

function buildOfficialSearchLinks(companyName, website, phone) {
  const company = encodeURIComponent(companyName.trim());
  const domain = encodeURIComponent(getDomain(website));
  const phoneSearch = encodeURIComponent(phone.trim());

  return [
    {
      label: "Medicare.gov",
      href: "https://www.medicare.gov/",
      help: "Use this for official Medicare information.",
    },
    {
      label: "Medicare marketing rules",
      href: "https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/plan-marketing-rules",
      help: "Review what Medicare plan representatives are and are not allowed to do.",
    },
    {
      label: "Find local SHIP help",
      href: "https://www.shiphelp.org/",
      help: "Find local Medicare counseling help.",
    },
    {
      label: "CMS Medicare marketing guidelines",
      href: "https://www.cms.gov/medicare/health-drug-plans/managed-care-marketing/medicare-guidelines",
      help: "Review CMS marketing guidance.",
    },
    ...(companyName.trim()
      ? [
          {
            label: "Search the company name",
            href: `https://www.google.com/search?q=${company}+Medicare+reviews+complaints+official+website`,
            help: "Look for the official website, complaints, and whether the name matches the ad.",
          },
        ]
      : []),
    ...(website.trim()
      ? [
          {
            label: "Search the website domain",
            href: `https://www.google.com/search?q=${domain}+Medicare+who+owns+this+website`,
            help: "Look for who owns or operates the website.",
          },
        ]
      : []),
    ...(phone.trim()
      ? [
          {
            label: "Search the phone number",
            href: `https://www.google.com/search?q=${phoneSearch}+Medicare`,
            help: "See whether the number appears on an official company website or only on ads.",
          },
        ]
      : []),
  ];
}

export default function CheckBeforeYouSwitch() {
  const resultsRef = useRef(null);

  const [input, setInput] = useState("");
  const [sourceType, setSourceType] = useState("Not sure");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [contactedFirst, setContactedFirst] = useState("not-sure");
  const [asksPersonalInfo, setAsksPersonalInfo] = useState("not-sure");
  const [saysGovernment, setSaysGovernment] = useState("not-sure");
  const [hasDisclaimer, setHasDisclaimer] = useState("not-sure");

  const [siteVerification, setSiteVerification] = useState(null);
  const [siteChecking, setSiteChecking] = useState(false);
  const [siteCheckError, setSiteCheckError] = useState("");

  const wordMatches = useMemo(() => findWordsToCheck(input), [input]);
  const websiteFindings = useMemo(() => analyzeWebsite(website), [website]);
  const phoneFindings = useMemo(() => analyzePhone(phone), [phone]);

  const sourceFindings = useMemo(
    () =>
      analyzeSource({
        sourceType,
        companyName,
        website,
        contactedFirst,
        asksPersonalInfo,
        saysGovernment,
        hasDisclaimer,
      }),
    [
      sourceType,
      companyName,
      website,
      contactedFirst,
      asksPersonalInfo,
      saysGovernment,
      hasDisclaimer,
    ]
  );

  const osintFindings = [...websiteFindings, ...phoneFindings, ...sourceFindings];

  const review = useMemo(
    () => getReviewLevel(wordMatches.length, osintFindings.length, siteVerification),
    [wordMatches.length, osintFindings.length, siteVerification]
  );

  const hasAnyInput =
    input.trim() ||
    companyName.trim() ||
    website.trim() ||
    phone.trim() ||
    sourceType !== "Not sure" ||
    contactedFirst !== "not-sure" ||
    asksPersonalInfo !== "not-sure" ||
    saysGovernment !== "not-sure" ||
    hasDisclaimer !== "not-sure" ||
    siteVerification;

  const totalItemsFound =
    wordMatches.length +
    osintFindings.length +
    (siteVerification?.simpleFindings?.length || 0) +
    (siteVerification ? 1 : 0);

  const allQuestions = useMemo(() => {
    const questions = wordMatches.flatMap((match) => match.questions);

    if (website.trim()) {
      questions.push("Who owns or operates this website?");
      questions.push("Does the website clearly say it is not Medicare or a government agency?");
      questions.push("Does this website collect my information before explaining who will contact me?");
    }

    if (phone.trim()) {
      questions.push("Does this phone number appear on the official company website?");
      questions.push("Can I call Medicare.gov, the plan, or SHIP instead of calling this number back?");
    }

    if (companyName.trim()) {
      questions.push("Does the company name match the website, mailer, phone number, and official plan documents?");
    }

    if (siteVerification?.safeBrowsing?.status === "unsafe_match_found") {
      questions.push("Should I avoid this website and verify through Medicare.gov or SHIP instead?");
    }

    return [...new Set(questions)];
  }, [wordMatches, website, phone, companyName, siteVerification]);

  const officialLinks = useMemo(
    () => buildOfficialSearchLinks(companyName, website, phone),
    [companyName, website, phone]
  );

  async function handleVerifyWebsite() {
    setSiteCheckError("");
    setSiteVerification(null);

    if (!website.trim()) {
      setSiteCheckError("Enter a website first.");
      return;
    }

    try {
      setSiteChecking(true);

      const response = await fetch("/api/verify-site", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ website }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Website check failed.");
      }

      setSiteVerification(data);
    } catch {
      setSiteCheckError(
        "The website check could not be completed. You can still review the message and use the public links below."
      );
    } finally {
      setSiteChecking(false);
    }
  }

  function handlePrint() {
    window.print();
  }

  function handleViewResults() {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleClear() {
    setInput("");
    setSourceType("Not sure");
    setCompanyName("");
    setWebsite("");
    setPhone("");
    setContactedFirst("not-sure");
    setAsksPersonalInfo("not-sure");
    setSaysGovernment("not-sure");
    setHasDisclaimer("not-sure");
    setSiteVerification(null);
    setSiteChecking(false);
    setSiteCheckError("");
  }

  return (
    <main className="min-h-screen bg-[#f5f9fc] text-[#1f2937]">
      <div className="border-b border-[#d6e3ee] bg-[#eef7ff] px-5 py-3 text-center text-sm text-[#35556f] print:hidden">
        Educational resource only. Not affiliated with Medicare, CMS, HHS, or any government agency.
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 print:hidden">
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
          <a href="#tool" className="hover:text-[#16324f]">
            Use the Tool
          </a>
          <a href="#results" className="hover:text-[#16324f]">
            Results
          </a>
          <a href="#public-checks" className="hover:text-[#16324f]">
            Public Checks
          </a>
          <a href="#disclaimer" className="hover:text-[#16324f]">
            Disclaimer
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden border-y border-[#d6e3ee] bg-gradient-to-br from-[#16324f] via-[#1e4f78] to-[#0f766e] text-white print:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
            Simple public-information review
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Check Before You Switch
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#eaf4fb]">
            Paste a Medicare ad, mailer, text message, email, website, or phone script.
            This tool helps you check the words, sender, website, and phone number before
            you trust the message or change your coverage.
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/90 backdrop-blur">
            This tool does not decide whether something is good or bad. It helps you slow
            down, notice details, and know what to check next using public information.
          </div>
        </div>
      </section>

      <div className="hidden print:block px-6 pt-6">
        <h1 className="text-2xl font-bold text-[#16324f]">
          Medicare Before You Switch — Results
        </h1>
        <p className="mt-2 text-sm text-[#526b80]">
          Educational resource only. Not affiliated with Medicare, CMS, HHS, or any government agency.
        </p>
      </div>

      <section
        id="tool"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] print:hidden"
      >
        <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-6 shadow-xl shadow-[#16324f]/5 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Step 1
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#16324f]">
            Paste the message
          </h2>

          <p className="mt-3 text-base leading-7 text-[#526b80]">
            Paste words from an ad, mailer, text, email, website, or phone call.
          </p>

          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="mt-5 min-h-[250px] w-full resize-y rounded-2xl border border-[#cfe0ee] bg-[#f8fbff] p-4 text-base leading-7 text-[#1f2937] outline-none transition placeholder:text-[#8aa1b4] focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#dbeafe]"
            placeholder="Example: You may qualify for a grocery allowance, dental benefits, and money back on your Part B premium. Call now..."
          />

          <div className="mt-8 border-t border-[#d6e3ee] pt-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Step 2
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#16324f]">
              Add what you know about the sender
            </h2>

            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="text-sm font-bold text-[#16324f]">
                  Where did you see or hear this?
                </span>
                <select
                  value={sourceType}
                  onChange={(event) => setSourceType(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0ee] bg-[#f8fbff] px-4 py-3 text-[#1f2937] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#dbeafe]"
                >
                  {SOURCE_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-[#16324f]">
                  Company or name shown
                </span>
                <input
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0ee] bg-[#f8fbff] px-4 py-3 text-[#1f2937] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#dbeafe]"
                  placeholder="Example: ABC Benefits Group"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-[#16324f]">
                  Website shown
                </span>

                <input
                  value={website}
                  onChange={(event) => {
                    setWebsite(event.target.value);
                    setSiteVerification(null);
                    setSiteCheckError("");
                  }}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0ee] bg-[#f8fbff] px-4 py-3 text-[#1f2937] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#dbeafe]"
                  placeholder="Example: benefits-example.com"
                />

                <button
                  type="button"
                  onClick={handleVerifyWebsite}
                  disabled={siteChecking}
                  className="mt-3 rounded-full bg-[#16324f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f253a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {siteChecking ? "Checking website..." : "Check Website"}
                </button>

                {siteCheckError && (
                  <p className="mt-3 text-sm font-semibold text-[#9f1239]">
                    {siteCheckError}
                  </p>
                )}

                {siteVerification && (
                  <p className="mt-3 text-sm font-semibold text-[#0f766e]">
                    Website check complete. See the Website verification section below.
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-bold text-[#16324f]">
                  Phone number shown
                </span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0ee] bg-[#f8fbff] px-4 py-3 text-[#1f2937] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#dbeafe]"
                  placeholder="Example: 1-800-000-0000"
                />
              </label>
            </div>
          </div>

          <div className="mt-8 border-t border-[#d6e3ee] pt-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Step 3
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#16324f]">
              Answer a few simple questions
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {[
                {
                  label: "Did they contact you first?",
                  value: contactedFirst,
                  setter: setContactedFirst,
                },
                {
                  label: "Did they ask for personal information?",
                  value: asksPersonalInfo,
                  setter: setAsksPersonalInfo,
                },
                {
                  label: "Did it sound like it came from Medicare or the government?",
                  value: saysGovernment,
                  setter: setSaysGovernment,
                },
                {
                  label: "Did it clearly say it is not Medicare or the government?",
                  value: hasDisclaimer,
                  setter: setHasDisclaimer,
                },
              ].map((item) => (
                <label key={item.label} className="block">
                  <span className="text-sm font-bold text-[#16324f]">
                    {item.label}
                  </span>
                  <select
                    value={item.value}
                    onChange={(event) => item.setter(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[#cfe0ee] bg-[#f8fbff] px-4 py-3 text-[#1f2937] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#dbeafe]"
                  >
                    <option value="not-sure">Not sure</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleViewResults}
              disabled={!hasAnyInput}
              className="rounded-full bg-[#2563eb] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-50"
            >
              View Results on Page
            </button>

            <button
              type="button"
              onClick={handlePrint}
              disabled={!hasAnyInput}
              className="rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Print Results
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="rounded-full border border-[#93c5fd] bg-white px-7 py-4 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]"
            >
              Clear
            </button>
          </div>

          {hasAnyInput && (
            <div className="mt-8 rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">
                Results are ready on this page
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#16324f]">
                {review.label}
              </h3>

              <p className="mt-3 leading-7 text-[#526b80]">
                {review.description}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-[#2563eb]">
                    {wordMatches.length}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#64748b]">
                    word checks
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-[#2563eb]">
                    {osintFindings.length}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#64748b]">
                    source checks
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-[#2563eb]">
                    {allQuestions.length}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#64748b]">
                    questions
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleViewResults}
                className="mt-5 rounded-full bg-[#16324f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f253a]"
              >
                Jump to Detailed Results
              </button>
            </div>
          )}
        </div>

        <aside className="rounded-[2rem] border border-[#d6e3ee] bg-white p-6 shadow-xl shadow-[#16324f]/5 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
            Your review
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#16324f]">
            {hasAnyInput ? review.label : "Ready when you are"}
          </h2>

          <p className="mt-3 leading-7 text-[#526b80]">
            {hasAnyInput
              ? review.description
              : "Paste a Medicare message and add the sender details to see what needs checking."}
          </p>

          {hasAnyInput && (
            <div className="mt-6 rounded-2xl border border-[#bfdbfe] bg-[#f8fbff] p-5">
              <p className="text-sm font-bold text-[#16324f]">
                On-page results found:
              </p>
              <p className="mt-2 text-4xl font-bold text-[#2563eb]">
                {totalItemsFound}
              </p>
              <p className="mt-1 text-sm leading-6 text-[#526b80]">
                Scroll down or select “View Results on Page” to read the details.
              </p>
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-[#bfdbfe] bg-[#eef7ff] p-5">
            <p className="font-bold text-[#16324f]">
              Always check these before switching:
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#526b80]">
              <li>• Your doctors and specialists</li>
              <li>• Your hospitals and pharmacy</li>
              <li>• Your prescriptions and drug costs</li>
              <li>• Referrals and prior authorization</li>
              <li>• Your maximum out-of-pocket cost</li>
              <li>• Any retiree, union, employer, or military benefits</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5">
            <p className="font-bold text-[#92400e]">Do not share too quickly</p>
            <p className="mt-2 text-sm leading-6 text-[#92400e]">
              Do not rush to give your Medicare number, Social Security number,
              banking details, or credit card information to someone who contacted you first.
            </p>
          </div>
        </aside>
      </section>

      <section id="results" ref={resultsRef} className="mx-auto max-w-7xl px-6 pb-16 print:px-6 print:py-6">
        <div className="rounded-[2rem] border border-[#d6e3ee] bg-white p-6 shadow-xl shadow-[#16324f]/5 sm:p-8 print:shadow-none">
          <div className="border-b border-[#d6e3ee] pb-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Results
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16324f]">
              Things to look at
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-[#526b80]">
              These results are shown directly on the page. Printing is optional.
              These are not accusations. They are reminders to slow down and check
              the details before making a coverage decision.
            </p>

            {hasAnyInput && (
              <div className="mt-5 flex flex-col gap-3 sm:flex-row print:hidden">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
                >
                  Print These Results
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded-full border border-[#93c5fd] bg-white px-6 py-3 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#eff6ff]"
                >
                  Check Different Wording
                </button>
              </div>
            )}
          </div>

          {!hasAnyInput && (
            <div className="py-10 text-[#526b80] print:hidden">
              Fill in the tool above to begin.
            </div>
          )}

          {hasAnyInput && (
            <div className="py-8">
              <div className="rounded-[1.5rem] border border-[#bfdbfe] bg-[#eef7ff] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Review summary
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#16324f]">
                  {review.label}
                </h3>

                <p className="mt-3 leading-7 text-[#526b80]">
                  {review.description}
                </p>
              </div>
            </div>
          )}

          {hasAnyInput && input.trim() && (
            <div className="border-t border-[#d6e3ee] py-8">
              <h3 className="text-2xl font-bold text-[#16324f]">
                Message reviewed
              </h3>

              <div className="mt-5 rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5">
                <p className="whitespace-pre-wrap text-sm leading-7 text-[#526b80]">
                  {input}
                </p>
              </div>
            </div>
          )}

          {hasAnyInput && wordMatches.length === 0 && osintFindings.length === 0 && !siteVerification && (
            <div className="py-10">
              <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-5">
                <h3 className="font-bold text-[#14532d]">
                  No common warning words found
                </h3>
                <p className="mt-2 leading-7 text-[#166534]">
                  This does not automatically mean the offer is right for you.
                  Before switching, still check your doctors, hospitals, prescriptions,
                  costs, network rules, and retiree benefits.
                </p>
              </div>
            </div>
          )}

          {wordMatches.length > 0 && (
            <div className="border-t border-[#d6e3ee] py-8">
              <h3 className="text-2xl font-bold text-[#16324f]">
                Words to check
              </h3>

              <div className="mt-5 grid gap-5">
                {wordMatches.map((match) => (
                  <article
                    key={match.id}
                    className="rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5 print:break-inside-avoid"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-[#16324f]">
                          {match.label}
                        </h4>
                        <p className="mt-2 leading-7 text-[#526b80]">
                          {match.concern}
                        </p>
                      </div>

                      <div className="rounded-full bg-[#dbeafe] px-4 py-2 text-xs font-bold text-[#1d4ed8]">
                        Found: {match.matchedWords.join(", ")}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-[#526b80]">
                      {match.questions.map((question) => (
                        <li key={question}>• {question}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          )}

          {osintFindings.length > 0 && (
            <div className="border-t border-[#d6e3ee] py-8">
              <h3 className="text-2xl font-bold text-[#16324f]">
                Sender, website, and phone checks
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {osintFindings.map((finding, index) => (
                  <article
                    key={`${finding.title}-${index}`}
                    className="rounded-2xl border border-[#d6e3ee] bg-white p-5 shadow-sm print:break-inside-avoid"
                  >
                    <h4 className="text-lg font-bold text-[#16324f]">
                      {finding.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#526b80]">
                      {finding.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {siteVerification && (
            <div className="border-t border-[#d6e3ee] py-8">
              <h3 className="text-2xl font-bold text-[#16324f]">
                Website verification
              </h3>

              <div className="mt-5 rounded-2xl border border-[#d6e3ee] bg-[#f8fbff] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Website checked
                </p>

                <p className="mt-2 text-lg font-bold text-[#16324f]">
                  {siteVerification.website?.domain || "Website entered"}
                </p>

                <p className="mt-2 break-words text-sm leading-6 text-[#526b80]">
                  {siteVerification.website?.normalizedUrl}
                </p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {siteVerification.simpleFindings?.map((finding, index) => (
                  <article
                    key={`${finding.title}-${index}`}
                    className="rounded-2xl border border-[#d6e3ee] bg-white p-5 shadow-sm print:break-inside-avoid"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                      {finding.level}
                    </p>

                    <h4 className="mt-2 text-lg font-bold text-[#16324f]">
                      {finding.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#526b80]">
                      {finding.message}
                    </p>
                  </article>
                ))}

                <article
                  className={`rounded-2xl border p-5 shadow-sm print:break-inside-avoid ${
                    siteVerification.safeBrowsing?.status === "unsafe_match_found"
                      ? "border-[#fecdd3] bg-[#fff1f2]"
                      : "border-[#d6e3ee] bg-white"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                    Website safety check
                  </p>

                  <h4 className="mt-2 text-lg font-bold text-[#16324f]">
                    Google website safety check
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#526b80]">
                    {siteVerification.safeBrowsing?.message}
                  </p>
                </article>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#526b80]">
                {siteVerification.reminder}
              </p>
            </div>
          )}
        </div>
      </section>

      {hasAnyInput && (
        <section id="public-checks" className="mx-auto max-w-7xl px-6 pb-16 print:hidden">
          <div className="rounded-[2rem] border border-[#bfdbfe] bg-[#eef7ff] p-6 shadow-xl shadow-[#16324f]/5 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Public checks
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16324f]">
              Where to check next
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-[#526b80]">
              Use public sources to compare what the ad says with official information.
              These links open in a new tab.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {officialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#cfe0ee] bg-white p-5 transition hover:border-[#93c5fd] hover:bg-[#f8fbff]"
                >
                  <p className="font-bold text-[#2563eb]">{link.label} →</p>
                  <p className="mt-2 text-sm leading-6 text-[#526b80]">
                    {link.help}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasAnyInput && allQuestions.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-20 print:px-6 print:pb-8">
          <div className="rounded-[2rem] border border-[#bfdbfe] bg-white p-6 shadow-xl shadow-[#16324f]/5 sm:p-8 print:shadow-none">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0f766e]">
              Simple checklist
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16324f]">
              Ask these before you switch
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-[#35556f]">
              {allQuestions.map((question) => (
                <li key={question} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2563eb] bg-white text-xs text-[#2563eb]">
                    ✓
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="disclaimer" className="border-t border-[#d6e3ee] bg-[#f8fbff] print:bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 print:py-6">
          <h2 className="text-2xl font-bold text-[#16324f]">
            Important disclaimer
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#526b80]">
            This tool is for general education only. It does not decide whether a plan,
            advertisement, company, broker, website, phone number, or message is good or bad.
            It does not provide legal, medical, financial, or personal insurance advice.
            Before changing Medicare coverage, beneficiaries should verify details with
            Medicare.gov, the plan’s official documents, their retiree benefits administrator,
            a SHIP counselor, or a properly licensed professional.
          </p>
        </div>
      </section>

      <footer className="bg-[#16324f] px-6 py-10 text-center text-sm text-white print:hidden">
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