function normalizeUrl(value) {
  const trimmed = String(value || "").trim();

  if (!trimmed) return "";

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function getDomain(value) {
  try {
    const url = new URL(normalizeUrl(value));
    return url.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getSimpleWebsiteChecks(inputUrl) {
  const findings = [];
  const normalizedUrl = normalizeUrl(inputUrl);
  const domain = getDomain(inputUrl);

  if (!domain) {
    findings.push({
      level: "caution",
      title: "Website link could not be read",
      message:
        "The website does not look complete. Check that it was typed exactly as shown on the ad, mailer, text, or email.",
    });

    return { normalizedUrl, domain, findings };
  }

  if (!normalizedUrl.startsWith("https://")) {
    findings.push({
      level: "caution",
      title: "Website does not appear to use HTTPS",
      message:
        "Be careful before entering personal information on a website that does not use HTTPS.",
    });
  }

  if (domain.includes("medicare") && domain !== "medicare.gov" && !domain.endsWith(".medicare.gov")) {
    findings.push({
      level: "review",
      title: "Website uses the word Medicare",
      message:
        "This website uses Medicare-related wording but does not appear to be Medicare.gov. Check who owns the site before trusting it.",
    });
  }

  if (domain.endsWith(".gov")) {
    findings.push({
      level: "info",
      title: "Government website ending",
      message:
        "This website ends in .gov, which is generally used by government agencies. Still make sure the page matches the offer you received.",
    });
  } else {
    findings.push({
      level: "review",
      title: "Private website",
      message:
        "This appears to be a private website, not Medicare.gov. Look for the company name, privacy policy, disclaimer, and who receives your information.",
    });
  }

  const benefitWords = [
    "benefit",
    "benefits",
    "giveback",
    "allowance",
    "senior",
    "seniors",
    "card",
    "free",
    "flex",
  ];

  const matchedWords = benefitWords.filter((word) => domain.includes(word));

  if (matchedWords.length > 0) {
    findings.push({
      level: "review",
      title: "Benefit-style website name",
      message:
        "The website name uses benefit-style wording. That does not mean it is bad, but it is a reason to check who owns it and whether it is a lead form.",
    });
  }

  return { normalizedUrl, domain, findings };
}

async function checkSafeBrowsing(url) {
  const apiKey = process.env.GOOGLE_SAFE_BROWSING_API_KEY;

  if (!apiKey) {
    return {
      checked: false,
      status: "not_configured",
      message:
        "Google Safe Browsing is not connected yet. The site was not checked against Google’s unsafe-site lists.",
    };
  }

  const endpoint = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client: {
        clientId: "medicare-before-you-switch",
        clientVersion: "1.0.0",
      },
      threatInfo: {
        threatTypes: [
          "MALWARE",
          "SOCIAL_ENGINEERING",
          "UNWANTED_SOFTWARE",
          "POTENTIALLY_HARMFUL_APPLICATION",
        ],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url }],
      },
    }),
  });

  if (!response.ok) {
    return {
      checked: false,
      status: "error",
      message:
        "The website safety check could not be completed right now. Try again later or verify the website another way.",
    };
  }

  const data = await response.json();

  if (data.matches && data.matches.length > 0) {
    return {
      checked: true,
      status: "unsafe_match_found",
      message:
        "This website matched a public unsafe-site list. Do not enter personal information on this site.",
      matches: data.matches,
    };
  }

  return {
    checked: true,
    status: "no_match_found",
    message:
      "This website was not found on the unsafe-site list checked. This does not guarantee the website is safe.",
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  try {
    const { website } = req.body || {};

    if (!website || !String(website).trim()) {
      return res.status(400).json({
        ok: false,
        error: "Website is required.",
      });
    }

    const simple = getSimpleWebsiteChecks(website);
    const safeBrowsing = await checkSafeBrowsing(simple.normalizedUrl);

    return res.status(200).json({
      ok: true,
      website: {
        input: website,
        normalizedUrl: simple.normalizedUrl,
        domain: simple.domain,
      },
      simpleFindings: simple.findings,
      safeBrowsing,
      reminder:
        "This tool provides public-information checks only. It does not prove whether a company, plan, ad, or website is good or bad.",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Verification failed.",
    });
  }
}