const PptxGenJS = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

// Brand tokens
const BRAND = {
  RED: "E10514",
  PINK: "FEBCBD",
  NAVY: "1A2744",
  CREAM: "F5F0EB",
  WHITE: "FFFFFF",
  FONT: "Montserrat",
  FONT_HE: "Arial",
};

const OUT_DIR = path.resolve(__dirname, "../assets/templates/presentations");
fs.mkdirSync(OUT_DIR, { recursive: true });

// Helper: add title slide
function addTitleSlide(pres, opts) {
  const { title, subtitle, date, lang } = opts;
  const isHe = lang === "he";
  const slide = pres.addSlide();

  // Red background
  slide.background = { color: BRAND.RED };

  // Logo placeholder top-left
  slide.addText("PassportCard", {
    x: isHe ? 7.5 : 0.5,
    y: 0.3,
    w: 2,
    h: 0.4,
    fontSize: 12,
    color: BRAND.WHITE,
    fontFace: BRAND.FONT,
    bold: true,
    align: isHe ? "right" : "left",
  });

  // Title
  slide.addText(title, {
    x: 0.5,
    y: 2.0,
    w: 9,
    h: 1.5,
    fontSize: 36,
    color: BRAND.WHITE,
    fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
    bold: true,
    align: "center",
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 0.8,
    fontSize: 20,
    color: BRAND.PINK,
    fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
    align: "center",
  });

  // Date
  slide.addText(date || (isHe ? "מרץ 2026" : "March 2026"), {
    x: 0.5,
    y: 4.8,
    w: 9,
    h: 0.5,
    fontSize: 14,
    color: BRAND.WHITE,
    fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
    align: "center",
  });

  // Bottom accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 3,
    y: 4.5,
    w: 4,
    h: 0.05,
    fill: { color: BRAND.PINK },
  });
}

// Helper: content slide with navy header bar
function addContentSlide(pres, opts) {
  const { heading, bullets, lang, layout } = opts;
  const isHe = lang === "he";
  const slide = pres.addSlide();

  slide.background = { color: BRAND.WHITE };

  // Navy header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.9,
    fill: { color: BRAND.NAVY },
  });

  slide.addText(heading, {
    x: isHe ? 0.5 : 0.5,
    y: 0.15,
    w: 9,
    h: 0.6,
    fontSize: 24,
    color: BRAND.WHITE,
    fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
    bold: true,
    align: isHe ? "right" : "left",
  });

  // Red accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0.9,
    w: 10,
    h: 0.05,
    fill: { color: BRAND.RED },
  });

  if (bullets && bullets.length > 0) {
    const textItems = bullets.map((b) => ({
      text: b,
      options: {
        bullet: true,
        fontSize: 16,
        color: BRAND.NAVY,
        fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
        align: isHe ? "right" : "left",
        breakType: "none",
        spaceBefore: 8,
      },
    }));

    slide.addText(textItems, {
      x: isHe ? 0.5 : 0.8,
      y: 1.3,
      w: 8.5,
      h: 4.0,
      valign: "top",
    });
  }

  if (layout === "two-column") {
    addTwoColumnContent(slide, opts);
  }

  // Footer
  slide.addText("PassportCard | Confidential", {
    x: 0.5,
    y: 5.2,
    w: 9,
    h: 0.3,
    fontSize: 8,
    color: "999999",
    fontFace: BRAND.FONT,
    align: "center",
  });

  return slide;
}

function addTwoColumnContent(slide, opts) {
  const { leftTitle, leftBullets, rightTitle, rightBullets, lang } = opts;
  const isHe = lang === "he";
  const font = isHe ? BRAND.FONT_HE : BRAND.FONT;
  const pres = new PptxGenJS();

  // Left column header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.3,
    w: 4.2,
    h: 0.05,
    fill: { color: BRAND.RED },
  });

  if (leftTitle) {
    slide.addText(leftTitle, {
      x: 0.5,
      y: 1.4,
      w: 4.2,
      h: 0.5,
      fontSize: 16,
      bold: true,
      color: BRAND.NAVY,
      fontFace: font,
      align: isHe ? "right" : "left",
    });
  }

  if (leftBullets) {
    slide.addText(
      leftBullets.map((b) => ({
        text: b,
        options: {
          bullet: true,
          fontSize: 14,
          color: BRAND.NAVY,
          fontFace: font,
          align: isHe ? "right" : "left",
          spaceBefore: 6,
        },
      })),
      { x: 0.5, y: 1.9, w: 4.2, h: 3.0, valign: "top" }
    );
  }

  // Right column header
  slide.addShape(pres.ShapeType.rect, {
    x: 5.3,
    y: 1.3,
    w: 4.2,
    h: 0.05,
    fill: { color: BRAND.RED },
  });

  if (rightTitle) {
    slide.addText(rightTitle, {
      x: 5.3,
      y: 1.4,
      w: 4.2,
      h: 0.5,
      fontSize: 16,
      bold: true,
      color: BRAND.NAVY,
      fontFace: font,
      align: isHe ? "right" : "left",
    });
  }

  if (rightBullets) {
    slide.addText(
      rightBullets.map((b) => ({
        text: b,
        options: {
          bullet: true,
          fontSize: 14,
          color: BRAND.NAVY,
          fontFace: font,
          align: isHe ? "right" : "left",
          spaceBefore: 6,
        },
      })),
      { x: 5.3, y: 1.9, w: 4.2, h: 3.0, valign: "top" }
    );
  }
}

// Helper: table slide
function addTableSlide(pres, opts) {
  const { heading, headers, rows, lang } = opts;
  const isHe = lang === "he";
  const font = isHe ? BRAND.FONT_HE : BRAND.FONT;
  const slide = pres.addSlide();

  slide.background = { color: BRAND.WHITE };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.9,
    fill: { color: BRAND.NAVY },
  });

  slide.addText(heading, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.6,
    fontSize: 24,
    color: BRAND.WHITE,
    fontFace: font,
    bold: true,
    align: isHe ? "right" : "left",
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0.9,
    w: 10,
    h: 0.05,
    fill: { color: BRAND.RED },
  });

  const tableRows = [
    headers.map((h) => ({
      text: h,
      options: {
        bold: true,
        color: BRAND.WHITE,
        fill: { color: BRAND.NAVY },
        fontSize: 13,
        fontFace: font,
        align: "center",
      },
    })),
    ...rows.map((row) =>
      row.map((cell, i) => ({
        text: cell,
        options: {
          fontSize: 12,
          color: BRAND.NAVY,
          fill: { color: i % 2 === 0 ? BRAND.CREAM : BRAND.WHITE },
          fontFace: font,
          align: isHe ? "right" : "left",
        },
      }))
    ),
  ];

  slide.addTable(tableRows, {
    x: 0.5,
    y: 1.2,
    w: 9,
    colW: Array(headers.length).fill(9 / headers.length),
    border: { pt: 0.5, color: "CCCCCC" },
    rowH: 0.45,
  });

  slide.addText("PassportCard | Confidential", {
    x: 0.5,
    y: 5.2,
    w: 9,
    h: 0.3,
    fontSize: 8,
    color: "999999",
    fontFace: BRAND.FONT,
    align: "center",
  });

  return slide;
}

// Helper: timeline slide
function addTimelineSlide(pres, opts) {
  const { heading, milestones, lang } = opts;
  const isHe = lang === "he";
  const font = isHe ? BRAND.FONT_HE : BRAND.FONT;
  const slide = pres.addSlide();

  slide.background = { color: BRAND.WHITE };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.9,
    fill: { color: BRAND.NAVY },
  });

  slide.addText(heading, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.6,
    fontSize: 24,
    color: BRAND.WHITE,
    fontFace: font,
    bold: true,
    align: isHe ? "right" : "left",
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0.9,
    w: 10,
    h: 0.05,
    fill: { color: BRAND.RED },
  });

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8,
    y: 3.0,
    w: 8.4,
    h: 0.06,
    fill: { color: BRAND.RED },
  });

  // Milestones
  const count = milestones.length;
  const spacing = 8.4 / (count - 1 || 1);

  milestones.forEach((m, i) => {
    const xPos = 0.8 + i * spacing;

    // Circle marker
    slide.addShape(pres.ShapeType.ellipse, {
      x: xPos - 0.15,
      y: 2.85,
      w: 0.3,
      h: 0.3,
      fill: { color: i % 2 === 0 ? BRAND.RED : BRAND.NAVY },
    });

    // Label above
    slide.addText(m.label, {
      x: xPos - 0.8,
      y: i % 2 === 0 ? 1.8 : 2.2,
      w: 1.6,
      h: 0.6,
      fontSize: 11,
      bold: true,
      color: BRAND.NAVY,
      fontFace: font,
      align: "center",
    });

    // Description below
    slide.addText(m.desc, {
      x: xPos - 0.8,
      y: i % 2 === 0 ? 3.4 : 3.8,
      w: 1.6,
      h: 0.8,
      fontSize: 9,
      color: BRAND.NAVY,
      fontFace: font,
      align: "center",
    });
  });

  return slide;
}

// Helper: Q&A / Thank You slide
function addThankYouSlide(pres, opts) {
  const { lang } = opts;
  const isHe = lang === "he";
  const slide = pres.addSlide();

  slide.background = { color: BRAND.NAVY };

  slide.addText(isHe ? "תודה רבה" : "Thank You", {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1.5,
    fontSize: 44,
    color: BRAND.WHITE,
    fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
    bold: true,
    align: "center",
  });

  slide.addText(isHe ? "שאלות ותשובות" : "Questions & Discussion", {
    x: 0.5,
    y: 3.2,
    w: 9,
    h: 0.8,
    fontSize: 22,
    color: BRAND.PINK,
    fontFace: isHe ? BRAND.FONT_HE : BRAND.FONT,
    align: "center",
  });

  // Accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5,
    y: 3.1,
    w: 3,
    h: 0.04,
    fill: { color: BRAND.RED },
  });

  slide.addText("PassportCard", {
    x: 0.5,
    y: 4.5,
    w: 9,
    h: 0.5,
    fontSize: 14,
    color: BRAND.PINK,
    fontFace: BRAND.FONT,
    align: "center",
  });
}

// Helper: one-pager quadrant slide
function addQuadrantSlide(pres, opts) {
  const { heading, quadrants, lang } = opts;
  const isHe = lang === "he";
  const font = isHe ? BRAND.FONT_HE : BRAND.FONT;
  const slide = pres.addSlide();

  slide.background = { color: BRAND.WHITE };

  // Title bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.7,
    fill: { color: BRAND.RED },
  });

  slide.addText(heading, {
    x: 0.5,
    y: 0.1,
    w: 9,
    h: 0.5,
    fontSize: 22,
    color: BRAND.WHITE,
    fontFace: font,
    bold: true,
    align: "center",
  });

  // 4 quadrants
  const positions = [
    { x: 0.3, y: 0.9 },
    { x: 5.1, y: 0.9 },
    { x: 0.3, y: 3.1 },
    { x: 5.1, y: 3.1 },
  ];

  quadrants.forEach((q, i) => {
    const pos = positions[i];

    // Quadrant background
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x,
      y: pos.y,
      w: 4.6,
      h: 2.0,
      fill: { color: BRAND.CREAM },
      rectRadius: 0.1,
    });

    // Quadrant title
    slide.addShape(pres.ShapeType.rect, {
      x: pos.x,
      y: pos.y,
      w: 4.6,
      h: 0.4,
      fill: { color: BRAND.NAVY },
      rectRadius: 0.1,
    });

    slide.addText(q.title, {
      x: pos.x + 0.15,
      y: pos.y + 0.05,
      w: 4.3,
      h: 0.3,
      fontSize: 13,
      bold: true,
      color: BRAND.WHITE,
      fontFace: font,
      align: isHe ? "right" : "left",
    });

    // Quadrant bullets
    slide.addText(
      q.items.map((item) => ({
        text: item,
        options: {
          bullet: true,
          fontSize: 10,
          color: BRAND.NAVY,
          fontFace: font,
          align: isHe ? "right" : "left",
          spaceBefore: 4,
        },
      })),
      {
        x: pos.x + 0.15,
        y: pos.y + 0.5,
        w: 4.3,
        h: 1.4,
        valign: "top",
      }
    );
  });
}

// ==========================================
// TEMPLATE DEFINITIONS
// ==========================================

const TEMPLATES = {
  "strategy-deck": {
    en: (pres) => {
      addTitleSlide(pres, {
        title: "Strategic Direction 2026",
        subtitle: "PassportCard International Insurance",
        lang: "en",
      });

      addContentSlide(pres, {
        heading: "Executive Summary",
        bullets: [
          "Digital-first insurance penetration grew 23% YoY across European markets",
          "Customer acquisition cost reduced by 18% through AI-driven underwriting",
          "Net Promoter Score increased from 42 to 61 following claims process redesign",
          "Recommendation: Accelerate expansion into Nordic markets by Q3 2026",
        ],
        lang: "en",
      });

      addContentSlide(pres, {
        heading: "Market Data & Analysis",
        bullets: [
          "[Chart Placeholder: Travel Insurance Market Size 2022-2028]",
          "Global travel insurance market projected at $35.2B by 2028 (CAGR 15.4%)",
          "Digital distribution channels account for 47% of new policies",
          "Key insight: Post-pandemic travelers prioritize comprehensive medical coverage",
        ],
        lang: "en",
      });

      const compSlide = addContentSlide(pres, {
        heading: "Competitive Landscape",
        lang: "en",
        layout: "two-column",
        leftTitle: "Our Strengths",
        leftBullets: [
          "Real-time claims processing",
          "Multi-language digital platform",
          "Direct-to-consumer model",
          "AI-powered risk assessment",
        ],
        rightTitle: "Market Challenges",
        rightBullets: [
          "Increasing regulatory complexity",
          "Price pressure from aggregators",
          "Rising medical cost inflation",
          "Embedded insurance competition",
        ],
      });

      addTimelineSlide(pres, {
        heading: "Strategic Roadmap",
        milestones: [
          { label: "Q1 2026", desc: "Platform v3 launch" },
          { label: "Q2 2026", desc: "Nordic market entry" },
          { label: "Q3 2026", desc: "AI claims automation" },
          { label: "Q4 2026", desc: "Embedded partnerships" },
          { label: "Q1 2027", desc: "Asia-Pacific pilot" },
        ],
        lang: "en",
      });

      addContentSlide(pres, {
        heading: "Recommendations",
        bullets: [
          "Option A: Aggressive expansion — Enter 3 new markets simultaneously (High risk, High reward)",
          "Option B: Phased approach — Sequential market entry with validation gates (Moderate risk)",
          "Option C: Partnership-led — Enter via local insurance partnerships (Lower risk, shared upside)",
          "Recommended: Option B with accelerated timeline if Q1 KPIs met",
        ],
        lang: "en",
      });

      addTableSlide(pres, {
        heading: "Next Steps & Owners",
        headers: ["Action Item", "Owner", "Deadline", "Status"],
        rows: [
          ["Finalize Nordic market analysis", "Strategy Team", "April 15", "In Progress"],
          ["Platform v3 UAT completion", "Product & Engineering", "March 30", "On Track"],
          ["Regulatory filing — Sweden", "Legal & Compliance", "May 1", "Not Started"],
          ["Partner outreach — Nordics", "BD Team", "April 30", "In Progress"],
          ["Board approval for budget allocation", "CFO", "April Board Meeting", "Pending"],
        ],
        lang: "en",
      });

      addThankYouSlide(pres, { lang: "en" });
    },

    he: (pres) => {
      addTitleSlide(pres, {
        title: "כיוון אסטרטגי 2026",
        subtitle: "פספורטכארד — ביטוח בינלאומי",
        lang: "he",
      });

      addContentSlide(pres, {
        heading: "תקציר מנהלים",
        bullets: [
          "חדירת ביטוח דיגיטלי עלתה ב-23% בשווקים האירופיים",
          "עלות גיוס לקוח ירדה ב-18% באמצעות חיתום מבוסס בינה מלאכותית",
          "ציון NPS עלה מ-42 ל-61 בעקבות שיפוץ תהליך התביעות",
          "המלצה: האצת התרחבות לשווקים הנורדיים עד רבעון 3, 2026",
        ],
        lang: "he",
      });

      addContentSlide(pres, {
        heading: "נתוני שוק וניתוח",
        bullets: [
          "[מציין מיקום לתרשים: גודל שוק ביטוח נסיעות 2022-2028]",
          "שוק ביטוח הנסיעות הגלובלי צפוי להגיע ל-35.2 מיליארד דולר עד 2028",
          "ערוצי הפצה דיגיטליים מהווים 47% מהפוליסות החדשות",
          "תובנה מרכזית: נוסעים לאחר הקורונה מעדיפים כיסוי רפואי מקיף",
        ],
        lang: "he",
      });

      addContentSlide(pres, {
        heading: "נוף תחרותי",
        lang: "he",
        layout: "two-column",
        leftTitle: "החוזקות שלנו",
        leftBullets: [
          "עיבוד תביעות בזמן אמת",
          "פלטפורמה דיגיטלית רב-לשונית",
          "מודל ישיר לצרכן",
          "הערכת סיכונים מבוססת AI",
        ],
        rightTitle: "אתגרי שוק",
        rightBullets: [
          "מורכבות רגולטורית גוברת",
          "לחץ מחירים מאגרגטורים",
          "אינפלציה בעלויות רפואיות",
          "תחרות מביטוח משובץ",
        ],
      });

      addTimelineSlide(pres, {
        heading: "מפת דרכים אסטרטגית",
        milestones: [
          { label: "רבעון 1", desc: "השקת פלטפורמה v3" },
          { label: "רבעון 2", desc: "כניסה לשוק הנורדי" },
          { label: "רבעון 3", desc: "אוטומציית תביעות AI" },
          { label: "רבעון 4", desc: "שותפויות משובצות" },
          { label: "רבעון 1 2027", desc: "פיילוט אסיה-פסיפיק" },
        ],
        lang: "he",
      });

      addContentSlide(pres, {
        heading: "המלצות",
        bullets: [
          "אפשרות א׳: התרחבות אגרסיבית — כניסה ל-3 שווקים בו-זמנית (סיכון גבוה, תשואה גבוהה)",
          "אפשרות ב׳: גישה מדורגת — כניסה עוקבת עם שערי אימות (סיכון מתון)",
          "אפשרות ג׳: מונחית שותפויות — כניסה דרך שותפויות ביטוח מקומיות (סיכון נמוך)",
          "המלצה: אפשרות ב׳ עם לוח זמנים מואץ אם יעדי רבעון 1 יושגו",
        ],
        lang: "he",
      });

      addTableSlide(pres, {
        heading: "צעדים הבאים ואחראים",
        headers: ["פעולה", "אחראי", "יעד", "סטטוס"],
        rows: [
          ["סיום ניתוח שוק נורדי", "צוות אסטרטגיה", "15 באפריל", "בתהליך"],
          ["השלמת UAT לפלטפורמה v3", "מוצר והנדסה", "30 במרץ", "בזמן"],
          ["הגשה רגולטורית — שוודיה", "משפטי וציות", "1 במאי", "טרם התחיל"],
          ["יצירת קשר עם שותפים", "צוות פיתוח עסקי", "30 באפריל", "בתהליך"],
          ["אישור דירקטוריון להקצאת תקציב", "סמנכ״ל כספים", "ישיבת דירקטוריון", "ממתין"],
        ],
        lang: "he",
      });

      addThankYouSlide(pres, { lang: "he" });
    },
  },

  "market-analysis": {
    en: (pres) => {
      addTitleSlide(pres, { title: "Market Analysis Report", subtitle: "Travel Insurance — European Markets 2026", lang: "en" });
      addContentSlide(pres, { heading: "Market Overview", bullets: ["Global travel insurance market valued at $21.3B in 2025", "European market represents 34% of global premium volume", "Post-pandemic recovery driving 15-18% annual growth", "Digital-first insurers capturing increasing market share"], lang: "en" });
      addContentSlide(pres, { heading: "TAM / SAM / SOM", bullets: ["Total Addressable Market (TAM): $7.2B European travel insurance", "Serviceable Addressable Market (SAM): $2.1B digital-first segment", "Serviceable Obtainable Market (SOM): $340M within 3-year horizon", "Key assumption: 12% annual digital adoption acceleration"], lang: "en" });
      addTableSlide(pres, { heading: "Competitive Landscape", headers: ["Competitor", "Market Share", "Strength", "Weakness"], rows: [
        ["Allianz Partners", "18%", "Brand recognition", "Legacy systems"],
        ["AXA Assistance", "14%", "Distribution network", "Digital experience"],
        ["Zurich Insurance", "11%", "Corporate segment", "Consumer engagement"],
        ["World Nomads", "6%", "Digital native", "Limited markets"],
        ["PassportCard", "4%", "Tech-forward claims", "Brand awareness"],
      ], lang: "en" });
      addContentSlide(pres, { heading: "Key Trends", bullets: ["Embedded insurance at point of travel booking (+340% in 3 years)", "AI-powered instant claims settlement becoming table stakes", "Telemedicine integration expected by 78% of premium travelers", "Parametric insurance products gaining traction for flight delays"], lang: "en" });
      addContentSlide(pres, { heading: "Opportunities", bullets: ["Nordic expansion: Underserved digital insurance market ($480M TAM)", "Embedded partnerships with OTAs and airlines", "Premium medical evacuation product for high-net-worth travelers", "B2B2C corporate travel insurance platform"], lang: "en" });
      addContentSlide(pres, { heading: "Risk Assessment", bullets: ["Regulatory divergence across EU member states", "Currency volatility impacting cross-border operations", "Catastrophic event concentration risk (climate-related)", "Technology dependency on third-party medical networks"], lang: "en" });
      addContentSlide(pres, { heading: "Recommendations", bullets: ["Prioritize Nordic market entry based on competitive whitespace", "Invest in embedded distribution partnerships", "Develop parametric product line for automated payouts", "Strengthen telemedicine network across top 10 destination countries"], lang: "en" });
    },
    he: (pres) => {
      addTitleSlide(pres, { title: "דוח ניתוח שוק", subtitle: "ביטוח נסיעות — שווקים אירופיים 2026", lang: "he" });
      addContentSlide(pres, { heading: "סקירת שוק", bullets: ["שוק ביטוח הנסיעות הגלובלי מוערך ב-21.3 מיליארד דולר ב-2025", "השוק האירופי מייצג 34% מנפח הפרמיות הגלובלי", "התאוששות פוסט-קורונה מניעה צמיחה שנתית של 15-18%", "מבטחים דיגיטליים תופסים נתח שוק גדל"], lang: "he" });
      addContentSlide(pres, { heading: "TAM / SAM / SOM", bullets: ["שוק כולל (TAM): 7.2 מיליארד דולר ביטוח נסיעות אירופי", "שוק נגיש (SAM): 2.1 מיליארד דולר סגמנט דיגיטלי", "שוק בר-השגה (SOM): 340 מיליון דולר באופק 3 שנים", "הנחה מרכזית: האצת אימוץ דיגיטלי של 12% בשנה"], lang: "he" });
      addTableSlide(pres, { heading: "נוף תחרותי", headers: ["מתחרה", "נתח שוק", "חוזקה", "חולשה"], rows: [
        ["Allianz Partners", "18%", "מוכרות מותג", "מערכות ישנות"],
        ["AXA Assistance", "14%", "רשת הפצה", "חוויה דיגיטלית"],
        ["Zurich Insurance", "11%", "סגמנט עסקי", "מעורבות צרכנים"],
        ["World Nomads", "6%", "דיגיטלי מלידה", "שווקים מוגבלים"],
        ["PassportCard", "4%", "תביעות טכנולוגיות", "מודעות מותג"],
      ], lang: "he" });
      addContentSlide(pres, { heading: "מגמות מרכזיות", bullets: ["ביטוח משובץ בנקודת הזמנת נסיעה (+340% ב-3 שנים)", "הסדר תביעות מיידי מבוסס AI הופך לסטנדרט", "שילוב טלרפואה צפוי על ידי 78% מנוסעי פרמיום", "מוצרי ביטוח פרמטריים צוברים תאוצה לעיכובי טיסות"], lang: "he" });
      addContentSlide(pres, { heading: "הזדמנויות", bullets: ["התרחבות נורדית: שוק ביטוח דיגיטלי לא מנוצל (TAM של 480 מיליון דולר)", "שותפויות משובצות עם OTAs וחברות תעופה", "מוצר פינוי רפואי פרמיום למטיילים בעלי הון גבוה", "פלטפורמת ביטוח נסיעות עסקיות B2B2C"], lang: "he" });
      addContentSlide(pres, { heading: "הערכת סיכונים", bullets: ["שונות רגולטורית בין מדינות האיחוד האירופי", "תנודתיות מטבע המשפיעה על פעילות חוצת גבולות", "סיכון ריכוז אירועים קטסטרופליים (קשורי אקלים)", "תלות טכנולוגית ברשתות רפואיות צד שלישי"], lang: "he" });
      addContentSlide(pres, { heading: "המלצות", bullets: ["לתעדף כניסה לשוק הנורדי על בסיס חלל תחרותי", "להשקיע בשותפויות הפצה משובצות", "לפתח קו מוצרי ביטוח פרמטרי לתשלומים אוטומטיים", "לחזק רשת טלרפואה ב-10 יעדי הנסיעה המובילים"], lang: "he" });
    },
  },

  "project-proposal": {
    en: (pres) => {
      addTitleSlide(pres, { title: "Project Proposal", subtitle: "AI-Powered Claims Automation Platform", lang: "en" });
      addContentSlide(pres, { heading: "Problem Statement", bullets: ["Average claims processing takes 5.2 business days", "Manual review creates bottleneck at 10,000+ claims/month", "Customer satisfaction drops 15 points during peak travel season", "Operational cost per claim: $47 vs. industry benchmark of $28"], lang: "en" });
      addContentSlide(pres, { heading: "Proposed Solution", bullets: ["AI-first claims triage and auto-adjudication engine", "Automated document verification via computer vision", "Real-time fraud detection reducing false positives by 60%", "Self-service claims portal with instant decision for low-complexity cases"], lang: "en" });
      addContentSlide(pres, { heading: "Scope & Deliverables", bullets: ["Phase 1: AI triage model training and validation (8 weeks)", "Phase 2: Integration with existing claims management system (6 weeks)", "Phase 3: Self-service portal development and UAT (8 weeks)", "Phase 4: Rollout with A/B testing and monitoring (4 weeks)"], lang: "en" });
      addTimelineSlide(pres, { heading: "Timeline", milestones: [
        { label: "Apr 2026", desc: "Kickoff & data prep" },
        { label: "Jun 2026", desc: "Model validation" },
        { label: "Aug 2026", desc: "System integration" },
        { label: "Oct 2026", desc: "Portal UAT" },
        { label: "Nov 2026", desc: "Production launch" },
      ], lang: "en" });
      addTableSlide(pres, { heading: "Budget", headers: ["Category", "Estimate", "Notes"], rows: [
        ["AI/ML Development", "$280,000", "Model training + infrastructure"],
        ["Integration Engineering", "$150,000", "API development + testing"],
        ["Portal Development", "$120,000", "Frontend + UX design"],
        ["Project Management", "$80,000", "PM + QA resources"],
        ["Contingency (15%)", "$94,500", "Risk buffer"],
        ["Total", "$724,500", "26-week timeline"],
      ], lang: "en" });
      addContentSlide(pres, { heading: "Team & Resources", bullets: ["Project Lead: VP Claims Operations", "Technical Lead: Head of AI Engineering", "2x ML Engineers, 3x Full-stack Developers, 1x UX Designer", "External: Claims domain consultant (part-time)"], lang: "en" });
      addContentSlide(pres, { heading: "The Ask", bullets: ["Budget approval for $724,500 over 6 months", "Dedicated team allocation starting April 2026", "Access to 24 months of historical claims data for model training", "Executive sponsorship from COO for cross-departmental coordination"], lang: "en" });
    },
    he: (pres) => {
      addTitleSlide(pres, { title: "הצעת פרויקט", subtitle: "פלטפורמת אוטומציית תביעות מבוססת AI", lang: "he" });
      addContentSlide(pres, { heading: "הגדרת הבעיה", bullets: ["עיבוד תביעות ממוצע אורך 5.2 ימי עסקים", "סקירה ידנית יוצרת צוואר בקבוק ב-10,000+ תביעות בחודש", "שביעות רצון לקוחות יורדת ב-15 נקודות בעונת השיא", "עלות תפעולית לתביעה: $47 לעומת אמת מידה של $28"], lang: "he" });
      addContentSlide(pres, { heading: "הפתרון המוצע", bullets: ["מנוע מיון ואישור אוטומטי של תביעות מבוסס AI", "אימות מסמכים אוטומטי באמצעות ראייה ממוחשבת", "זיהוי הונאות בזמן אמת המפחית חיובי שווא ב-60%", "פורטל תביעות בשירות עצמי עם החלטה מיידית למקרים פשוטים"], lang: "he" });
      addContentSlide(pres, { heading: "היקף ותוצרים", bullets: ["שלב 1: אימון ואימות מודל AI למיון (8 שבועות)", "שלב 2: אינטגרציה עם מערכת ניהול תביעות קיימת (6 שבועות)", "שלב 3: פיתוח פורטל שירות עצמי ו-UAT (8 שבועות)", "שלב 4: השקה עם בדיקות A/B וניטור (4 שבועות)"], lang: "he" });
      addTimelineSlide(pres, { heading: "לוח זמנים", milestones: [
        { label: "אפריל 2026", desc: "התנעה והכנת נתונים" },
        { label: "יוני 2026", desc: "אימות מודל" },
        { label: "אוגוסט 2026", desc: "אינטגרציית מערכות" },
        { label: "אוקטובר 2026", desc: "UAT פורטל" },
        { label: "נובמבר 2026", desc: "השקה לייצור" },
      ], lang: "he" });
      addTableSlide(pres, { heading: "תקציב", headers: ["קטגוריה", "הערכה", "הערות"], rows: [
        ["פיתוח AI/ML", "$280,000", "אימון מודל + תשתית"],
        ["הנדסת אינטגרציה", "$150,000", "פיתוח API + בדיקות"],
        ["פיתוח פורטל", "$120,000", "צד לקוח + עיצוב UX"],
        ["ניהול פרויקט", "$80,000", "PM + QA"],
        ["עתודה (15%)", "$94,500", "חוצץ סיכון"],
        ["סה״כ", "$724,500", "לוח זמנים של 26 שבועות"],
      ], lang: "he" });
      addContentSlide(pres, { heading: "צוות ומשאבים", bullets: ["מוביל פרויקט: סמנכ״ל תפעול תביעות", "מוביל טכני: ראש הנדסת AI", "2 מהנדסי ML, 3 מפתחי Full-stack, מעצב UX אחד", "חיצוני: יועץ תחום תביעות (חלקי)"], lang: "he" });
      addContentSlide(pres, { heading: "הבקשה", bullets: ["אישור תקציב של $724,500 על פני 6 חודשים", "הקצאת צוות ייעודי החל מאפריל 2026", "גישה ל-24 חודשי נתוני תביעות היסטוריים לאימון מודל", "חסות מנהלית מה-COO לתיאום בין-מחלקתי"], lang: "he" });
    },
  },

  "board-update": {
    en: (pres) => {
      addTitleSlide(pres, { title: "Q1 2026 Board Update", subtitle: "PassportCard International Insurance", lang: "en" });
      addContentSlide(pres, { heading: "Agenda", bullets: ["Q1 Performance Highlights", "KPI Dashboard Review", "Key Challenges & Mitigation", "Financial Summary", "Strategic Decisions Required", "Q2 Focus Areas"], lang: "en" });
      addTableSlide(pres, { heading: "KPI Dashboard", headers: ["KPI", "Target", "Actual", "Status"], rows: [
        ["Gross Written Premium", "$48M", "$51.2M", "Above Target"],
        ["Loss Ratio", "62%", "59.3%", "On Track"],
        ["Customer Acquisition", "12,000", "11,400", "Slightly Below"],
        ["Claims Processing Time", "3 days", "3.8 days", "Below Target"],
        ["NPS Score", "55", "61", "Above Target"],
        ["Digital Policy Sales", "45%", "52%", "Above Target"],
      ], lang: "en" });
      addContentSlide(pres, { heading: "Q1 Highlights", bullets: ["Launched in 2 new European markets (Portugal, Czech Republic)", "Digital sales exceeded 50% of total for the first time", "Telemedicine service availability expanded to 15 countries", "Strategic partnership signed with major European airline"], lang: "en" });
      addContentSlide(pres, { heading: "Challenges & Mitigation", bullets: ["Claims processing SLA missed due to surge in winter travel claims", "Customer acquisition below target — reallocating budget to digital channels", "Regulatory approval delayed in Switzerland — engaging local counsel", "IT infrastructure cost overrun (+8%) — negotiating cloud provider terms"], lang: "en" });
      addTableSlide(pres, { heading: "Financial Summary", headers: ["Metric", "Q1 Budget", "Q1 Actual", "Variance"], rows: [
        ["Revenue", "$48.0M", "$51.2M", "+6.7%"],
        ["Operating Expenses", "$32.0M", "$33.4M", "+4.4%"],
        ["Claims Paid", "$29.8M", "$30.3M", "+1.7%"],
        ["EBITDA", "$8.2M", "$9.5M", "+15.9%"],
        ["Net Income", "$5.1M", "$6.2M", "+21.6%"],
      ], lang: "en" });
      addContentSlide(pres, { heading: "Strategic Decisions Needed", bullets: ["Approve $3.2M investment for AI claims automation (expected 40% ROI in 18 months)", "Authorize Nordic market entry — Sweden and Denmark targeted for Q3 launch", "Decision on embedded insurance partnership terms with TravelCo", "Headcount approval: 15 additional FTEs across Engineering and Operations"], lang: "en" });
      addContentSlide(pres, { heading: "Q2 Focus Areas", bullets: ["Accelerate claims processing improvement — target 3-day SLA", "Launch Nordic market regulatory filings", "Complete AI pilot for fraud detection", "Expand telemedicine network to 20 countries"], lang: "en" });
    },
    he: (pres) => {
      addTitleSlide(pres, { title: "עדכון דירקטוריון — רבעון 1 2026", subtitle: "פספורטכארד — ביטוח בינלאומי", lang: "he" });
      addContentSlide(pres, { heading: "סדר יום", bullets: ["דגשי ביצועי רבעון 1", "סקירת לוח מחוונים KPI", "אתגרים מרכזיים ומיטיגציה", "סיכום פיננסי", "החלטות אסטרטגיות נדרשות", "תחומי מיקוד רבעון 2"], lang: "he" });
      addTableSlide(pres, { heading: "לוח מחוונים KPI", headers: ["מדד", "יעד", "בפועל", "סטטוס"], rows: [
        ["פרמיה ברוטו", "$48M", "$51.2M", "מעל היעד"],
        ["יחס הפסד", "62%", "59.3%", "בזמן"],
        ["גיוס לקוחות", "12,000", "11,400", "מעט מתחת"],
        ["זמן עיבוד תביעות", "3 ימים", "3.8 ימים", "מתחת ליעד"],
        ["ציון NPS", "55", "61", "מעל היעד"],
        ["מכירות פוליסות דיגיטליות", "45%", "52%", "מעל היעד"],
      ], lang: "he" });
      addContentSlide(pres, { heading: "דגשי רבעון 1", bullets: ["השקה ב-2 שווקים אירופיים חדשים (פורטוגל, צ׳כיה)", "מכירות דיגיטליות חצו 50% מהסך לראשונה", "שירות טלרפואה הורחב ל-15 מדינות", "חתימת שותפות אסטרטגית עם חברת תעופה אירופית מובילה"], lang: "he" });
      addContentSlide(pres, { heading: "אתגרים ומיטיגציה", bullets: ["SLA עיבוד תביעות לא עמד ביעד עקב גל תביעות חורף", "גיוס לקוחות מתחת ליעד — הקצאת תקציב מחדש לערוצים דיגיטליים", "עיכוב אישור רגולטורי בשווייץ — שיתוף עורכי דין מקומיים", "חריגת עלויות תשתית IT (+8%) — משא ומתן עם ספק ענן"], lang: "he" });
      addTableSlide(pres, { heading: "סיכום פיננסי", headers: ["מדד", "תקציב רבעון 1", "בפועל רבעון 1", "סטייה"], rows: [
        ["הכנסות", "$48.0M", "$51.2M", "+6.7%"],
        ["הוצאות תפעול", "$32.0M", "$33.4M", "+4.4%"],
        ["תביעות ששולמו", "$29.8M", "$30.3M", "+1.7%"],
        ["EBITDA", "$8.2M", "$9.5M", "+15.9%"],
        ["רווח נקי", "$5.1M", "$6.2M", "+21.6%"],
      ], lang: "he" });
      addContentSlide(pres, { heading: "החלטות אסטרטגיות נדרשות", bullets: ["אישור השקעה של $3.2M באוטומציית תביעות AI (ROI צפוי של 40% ב-18 חודשים)", "הרשאה לכניסה לשוק הנורדי — שוודיה ודנמרק מיועדות להשקה ברבעון 3", "החלטה על תנאי שותפות ביטוח משובץ עם TravelCo", "אישור כ״א: 15 משרות נוספות בהנדסה ותפעול"], lang: "he" });
      addContentSlide(pres, { heading: "תחומי מיקוד רבעון 2", bullets: ["האצת שיפור עיבוד תביעות — יעד SLA של 3 ימים", "השקת הגשות רגולטוריות בשוק הנורדי", "השלמת פיילוט AI לזיהוי הונאות", "הרחבת רשת טלרפואה ל-20 מדינות"], lang: "he" });
    },
  },

  "team-briefing": {
    en: (pres) => {
      addTitleSlide(pres, { title: "Team Briefing", subtitle: "Claims Process Transformation Update", lang: "en" });
      addContentSlide(pres, { heading: "Context", bullets: ["PassportCard is transforming claims processing as part of the 2026 Digital Strategy", "This directly impacts all claims operations, customer service, and IT teams", "Goal: Reduce average claims processing from 5 days to under 3 days", "Board approved budget and timeline in Q1 board meeting"], lang: "en" });
      addContentSlide(pres, { heading: "What Changed", bullets: ["New AI triage system will auto-classify 70% of incoming claims", "Self-service portal launching for simple claims (lost luggage, flight delays)", "Revised SLA targets effective Q3: 24h for simple claims, 72h for complex", "New roles being created: Claims Automation Specialist, AI Operations Analyst"], lang: "en" });
      addContentSlide(pres, { heading: "Impact on Your Team", bullets: ["Claims handlers: Shift from data entry to complex case management", "Customer service: New portal reduces call volume by estimated 30%", "IT: Integration sprints scheduled April-June, dedicated squad assigned", "All teams: Training program starts May, mandatory completion by July"], lang: "en" });
      addTableSlide(pres, { heading: "Action Items", headers: ["Action", "Team", "Deadline"], rows: [
        ["Complete skills assessment survey", "All Staff", "March 25"],
        ["Nominate training champions", "Team Leads", "March 30"],
        ["Review updated process documentation", "Claims Ops", "April 5"],
        ["Prepare integration environment", "IT", "April 10"],
        ["Customer communication plan", "Marketing", "April 15"],
      ], lang: "en" });
      addTimelineSlide(pres, { heading: "Timeline", milestones: [
        { label: "Mar", desc: "Announcement & prep" },
        { label: "Apr", desc: "Training begins" },
        { label: "Jun", desc: "Portal beta" },
        { label: "Aug", desc: "Full rollout" },
      ], lang: "en" });
      addThankYouSlide(pres, { lang: "en" });
    },
    he: (pres) => {
      addTitleSlide(pres, { title: "תדריך צוות", subtitle: "עדכון טרנספורמציית תהליך תביעות", lang: "he" });
      addContentSlide(pres, { heading: "הקשר", bullets: ["פספורטכארד מבצעת טרנספורמציה בעיבוד תביעות כחלק מאסטרטגיה דיגיטלית 2026", "זה משפיע ישירות על כל צוותי תפעול תביעות, שירות לקוחות ו-IT", "מטרה: צמצום עיבוד תביעות ממוצע מ-5 ימים לפחות מ-3", "הדירקטוריון אישר תקציב ולוח זמנים בישיבת רבעון 1"], lang: "he" });
      addContentSlide(pres, { heading: "מה השתנה", bullets: ["מערכת מיון AI חדשה תסווג אוטומטית 70% מהתביעות הנכנסות", "פורטל שירות עצמי מושק לתביעות פשוטות (מזוודות אבודות, עיכובי טיסות)", "יעדי SLA מתוקנים בתוקף מרבעון 3: 24 שעות לפשוטות, 72 שעות למורכבות", "תפקידים חדשים: מומחה אוטומציית תביעות, אנליסט תפעול AI"], lang: "he" });
      addContentSlide(pres, { heading: "השפעה על הצוות שלכם", bullets: ["מטפלי תביעות: מעבר מהזנת נתונים לניהול מקרים מורכבים", "שירות לקוחות: הפורטל החדש צפוי להפחית נפח שיחות ב-30%", "IT: ספרינטים לאינטגרציה מתוכננים אפריל-יוני, צוות ייעודי", "כל הצוותים: תוכנית הכשרה מתחילה במאי, השלמה חובה עד יולי"], lang: "he" });
      addTableSlide(pres, { heading: "פעולות נדרשות", headers: ["פעולה", "צוות", "יעד"], rows: [
        ["השלמת סקר הערכת מיומנויות", "כל העובדים", "25 במרץ"],
        ["מינוי אלופי הכשרה", "מנהלי צוותות", "30 במרץ"],
        ["סקירת תיעוד תהליכים מעודכן", "תפעול תביעות", "5 באפריל"],
        ["הכנת סביבת אינטגרציה", "IT", "10 באפריל"],
        ["תוכנית תקשורת ללקוחות", "שיווק", "15 באפריל"],
      ], lang: "he" });
      addTimelineSlide(pres, { heading: "לוח זמנים", milestones: [
        { label: "מרץ", desc: "הכרזה והכנה" },
        { label: "אפריל", desc: "תחילת הכשרה" },
        { label: "יוני", desc: "בטא לפורטל" },
        { label: "אוגוסט", desc: "השקה מלאה" },
      ], lang: "he" });
      addThankYouSlide(pres, { lang: "he" });
    },
  },

  "product-brief": {
    en: (pres) => {
      addTitleSlide(pres, { title: "Product Brief", subtitle: "PassportCard Instant Claims Mobile App", lang: "en" });
      addContentSlide(pres, { heading: "Problem", bullets: ["73% of travel insurance claims are filed after returning home", "Average claim submission takes 45 minutes of form-filling", "Document collection (receipts, medical records) delays 65% of claims", "Mobile-native competitors offer claim filing in under 5 minutes"], lang: "en" });
      addContentSlide(pres, { heading: "Target Users", bullets: ["Primary: Frequent leisure travelers (3+ trips/year), ages 28-55", "Secondary: Business travelers with corporate PassportCard policies", "Tertiary: Family travelers managing claims for dependents", "Key persona: Tech-savvy traveler who expects instant digital services"], lang: "en" });
      addContentSlide(pres, { heading: "Proposed Solution", bullets: ["Mobile-first claims app with photo-based document capture", "AI-powered auto-fill from uploaded documents", "Real-time claim status tracking with push notifications", "In-app telemedicine consultation for medical claims"], lang: "en" });
      addContentSlide(pres, { heading: "Key Features (MVP)", bullets: ["Snap & Submit: Photo capture of receipts and medical documents", "Smart Auto-Fill: OCR + AI extraction of claim details from photos", "Live Tracking: Real-time status updates on claim progress", "Quick Claim: Pre-approved instant payout for claims under $500"], lang: "en" });
      addTableSlide(pres, { heading: "Success Metrics", headers: ["Metric", "Current", "Target", "Timeline"], rows: [
        ["Claim submission time", "45 min", "< 5 min", "Launch"],
        ["Mobile claim rate", "12%", "40%", "6 months"],
        ["First-contact resolution", "34%", "65%", "12 months"],
        ["Customer satisfaction (CSAT)", "3.2/5", "4.5/5", "12 months"],
        ["Claims cost per file", "$47", "$28", "18 months"],
      ], lang: "en" });
      addContentSlide(pres, { heading: "Risks & Mitigations", bullets: ["Risk: Low adoption among older demographics — Mitigation: Hybrid option with phone support", "Risk: AI extraction errors — Mitigation: Human review fallback for flagged cases", "Risk: Fraud increase with instant payouts — Mitigation: ML fraud model with velocity checks", "Risk: Regulatory compliance across markets — Mitigation: Phased rollout by jurisdiction"], lang: "en" });
      addContentSlide(pres, { heading: "Next Steps", bullets: ["Week 1-2: User research interviews with 20 policyholders", "Week 3-4: UX wireframes and prototype", "Week 5-6: Technical feasibility assessment", "Week 7-8: Business case presentation to product committee"], lang: "en" });
    },
    he: (pres) => {
      addTitleSlide(pres, { title: "תקציר מוצר", subtitle: "אפליקציית תביעות מיידיות PassportCard", lang: "he" });
      addContentSlide(pres, { heading: "בעיה", bullets: ["73% מתביעות ביטוח הנסיעות מוגשות לאחר החזרה הביתה", "הגשת תביעה ממוצעת אורכת 45 דקות של מילוי טפסים", "איסוף מסמכים (קבלות, רשומות רפואיות) מעכב 65% מהתביעות", "מתחרים מובייל-נייטיב מציעים הגשת תביעה בפחות מ-5 דקות"], lang: "he" });
      addContentSlide(pres, { heading: "משתמשי יעד", bullets: ["ראשי: מטיילים תכופים (3+ נסיעות בשנה), גילאי 28-55", "משני: מטיילי עסקים עם פוליסות פספורטכארד ארגוניות", "שלישוני: משפחות המנהלות תביעות עבור ילדים", "פרסונה מרכזית: מטייל טכנולוגי המצפה לשירותים דיגיטליים מיידיים"], lang: "he" });
      addContentSlide(pres, { heading: "פתרון מוצע", bullets: ["אפליקציית תביעות מובייל-פירסט עם לכידת מסמכים בצילום", "מילוי אוטומטי מבוסס AI ממסמכים שהועלו", "מעקב סטטוס תביעה בזמן אמת עם התראות push", "ייעוץ טלרפואה באפליקציה לתביעות רפואיות"], lang: "he" });
      addContentSlide(pres, { heading: "פיצ׳רים מרכזיים (MVP)", bullets: ["צלם ושלח: לכידת קבלות ומסמכים רפואיים בצילום", "מילוי חכם: חילוץ OCR + AI של פרטי תביעה מתמונות", "מעקב חי: עדכוני סטטוס בזמן אמת על התקדמות התביעה", "תביעה מהירה: תשלום מיידי מאושר מראש לתביעות מתחת ל-$500"], lang: "he" });
      addTableSlide(pres, { heading: "מדדי הצלחה", headers: ["מדד", "נוכחי", "יעד", "לוח זמנים"], rows: [
        ["זמן הגשת תביעה", "45 דק׳", "< 5 דק׳", "השקה"],
        ["שיעור תביעות מובייל", "12%", "40%", "6 חודשים"],
        ["פתרון במגע ראשון", "34%", "65%", "12 חודשים"],
        ["שביעות רצון (CSAT)", "3.2/5", "4.5/5", "12 חודשים"],
        ["עלות תביעה לתיק", "$47", "$28", "18 חודשים"],
      ], lang: "he" });
      addContentSlide(pres, { heading: "סיכונים ומיטיגציות", bullets: ["סיכון: אימוץ נמוך בדמוגרפיות מבוגרות — מיטיגציה: אפשרות היברידית עם תמיכה טלפונית", "סיכון: שגיאות חילוץ AI — מיטיגציה: סקירה אנושית למקרים מסומנים", "סיכון: עלייה בהונאות עם תשלומים מיידיים — מיטיגציה: מודל ML עם בדיקות מהירות", "סיכון: ציות רגולטורי בין שווקים — מיטיגציה: השקה מדורגת לפי תחום שיפוט"], lang: "he" });
      addContentSlide(pres, { heading: "צעדים הבאים", bullets: ["שבועות 1-2: ראיונות מחקר משתמשים עם 20 מבוטחים", "שבועות 3-4: וויירפריימים ופרוטוטייפ UX", "שבועות 5-6: הערכת היתכנות טכנית", "שבועות 7-8: הצגת תיק עסקי לוועדת מוצר"], lang: "he" });
    },
  },

  "compliance-report": {
    en: (pres) => {
      addTitleSlide(pres, { title: "Compliance Report", subtitle: "Regulatory Compliance Assessment — Q1 2026", lang: "en" });
      addContentSlide(pres, { heading: "Scope", bullets: ["GDPR compliance across all European operations", "Insurance Distribution Directive (IDD) alignment", "Anti-Money Laundering (AML) and KYC procedures", "Data residency requirements per market", "Solvency II reporting obligations"], lang: "en" });
      addContentSlide(pres, { heading: "Regulatory Framework", bullets: ["EU General Data Protection Regulation (GDPR) — applicable to all personal data processing", "Insurance Distribution Directive (EU) 2016/97 — distribution and sales practices", "5th Anti-Money Laundering Directive — customer due diligence requirements", "National insurance regulations per operating market (12 jurisdictions)", "Upcoming: Digital Operational Resilience Act (DORA) — effective January 2025"], lang: "en" });
      addTableSlide(pres, { heading: "Current Compliance Status", headers: ["Area", "Status", "Risk Level", "Last Audit"], rows: [
        ["GDPR — Data Processing", "Compliant", "Low", "Jan 2026"],
        ["IDD — Sales Practices", "Compliant", "Low", "Dec 2025"],
        ["AML / KYC", "Partial Gap", "Medium", "Feb 2026"],
        ["Data Residency", "Under Review", "Medium", "In Progress"],
        ["Solvency II Reporting", "Compliant", "Low", "Mar 2026"],
        ["DORA Readiness", "Gap Identified", "High", "Feb 2026"],
      ], lang: "en" });
      addContentSlide(pres, { heading: "Identified Gaps", bullets: ["AML: Enhanced due diligence procedures not yet implemented for high-risk jurisdictions", "Data Residency: Cloud infrastructure in 3 markets requires data localization review", "DORA: ICT risk management framework needs formalization and board approval", "Third-party vendor assessments: 8 of 23 critical vendors pending security review"], lang: "en" });
      addTableSlide(pres, { heading: "Remediation Plan", headers: ["Gap", "Action", "Owner", "Target Date"], rows: [
        ["AML EDD", "Implement enhanced due diligence workflows", "Compliance", "Apr 30"],
        ["Data Residency", "Cloud migration to local data centers", "IT", "Jun 15"],
        ["DORA Framework", "Draft and approve ICT risk framework", "CISO", "May 30"],
        ["Vendor Reviews", "Complete critical vendor assessments", "Procurement", "Apr 30"],
      ], lang: "en" });
      addTimelineSlide(pres, { heading: "Remediation Timeline", milestones: [
        { label: "Apr 2026", desc: "AML & vendor reviews" },
        { label: "May 2026", desc: "DORA framework" },
        { label: "Jun 2026", desc: "Data residency" },
        { label: "Jul 2026", desc: "Full compliance" },
      ], lang: "en" });
      addContentSlide(pres, { heading: "Risk Assessment Summary", bullets: ["Overall compliance posture: MODERATE — trending positive", "Highest priority: DORA readiness (regulatory deadline approaching)", "Financial exposure: Potential fines up to 2% annual turnover for GDPR non-compliance", "Recommendation: Allocate additional resources to close DORA and AML gaps by Q2 end"], lang: "en" });
    },
    he: (pres) => {
      addTitleSlide(pres, { title: "דוח ציות", subtitle: "הערכת ציות רגולטורי — רבעון 1 2026", lang: "he" });
      addContentSlide(pres, { heading: "היקף", bullets: ["ציות GDPR בכל הפעילויות האירופיות", "התאמה להנחיית הפצת ביטוח (IDD)", "נהלי איסור הלבנת הון (AML) ו-KYC", "דרישות אחסון נתונים לפי שוק", "חובות דיווח Solvency II"], lang: "he" });
      addContentSlide(pres, { heading: "מסגרת רגולטורית", bullets: ["GDPR של האיחוד האירופי — חל על כל עיבוד נתונים אישיים", "הנחיית הפצת ביטוח (EU) 2016/97 — פרקטיקות הפצה ומכירות", "הנחיית איסור הלבנת הון חמישית — דרישות בדיקת נאותות לקוח", "רגולציית ביטוח לאומית לפי שוק פעילות (12 תחומי שיפוט)", "בקרוב: חוק חוסן תפעולי דיגיטלי (DORA)"], lang: "he" });
      addTableSlide(pres, { heading: "מצב ציות נוכחי", headers: ["תחום", "סטטוס", "רמת סיכון", "ביקורת אחרונה"], rows: [
        ["GDPR — עיבוד נתונים", "תואם", "נמוכה", "ינואר 2026"],
        ["IDD — פרקטיקות מכירה", "תואם", "נמוכה", "דצמבר 2025"],
        ["AML / KYC", "פער חלקי", "בינונית", "פברואר 2026"],
        ["אחסון נתונים", "בבדיקה", "בינונית", "בתהליך"],
        ["דיווח Solvency II", "תואם", "נמוכה", "מרץ 2026"],
        ["מוכנות DORA", "פער זוהה", "גבוהה", "פברואר 2026"],
      ], lang: "he" });
      addContentSlide(pres, { heading: "פערים שזוהו", bullets: ["AML: נהלי בדיקת נאותות מוגברת טרם יושמו לתחומי שיפוט בסיכון גבוה", "אחסון נתונים: תשתית ענן ב-3 שווקים דורשת סקירת לוקליזציה", "DORA: מסגרת ניהול סיכוני ICT דורשת פורמליזציה ואישור דירקטוריון", "הערכות ספקים: 8 מתוך 23 ספקים קריטיים ממתינים לסקירת אבטחה"], lang: "he" });
      addTableSlide(pres, { heading: "תוכנית תיקון", headers: ["פער", "פעולה", "אחראי", "יעד"], rows: [
        ["AML EDD", "הטמעת תהליכי בדיקת נאותות מוגברת", "ציות", "30 באפריל"],
        ["אחסון נתונים", "מיגרציית ענן למרכזי נתונים מקומיים", "IT", "15 ביוני"],
        ["מסגרת DORA", "ניסוח ואישור מסגרת סיכוני ICT", "CISO", "30 במאי"],
        ["סקירות ספקים", "השלמת הערכות ספקים קריטיים", "רכש", "30 באפריל"],
      ], lang: "he" });
      addTimelineSlide(pres, { heading: "לוח זמנים לתיקון", milestones: [
        { label: "אפריל 2026", desc: "AML וסקירות ספקים" },
        { label: "מאי 2026", desc: "מסגרת DORA" },
        { label: "יוני 2026", desc: "אחסון נתונים" },
        { label: "יולי 2026", desc: "ציות מלא" },
      ], lang: "he" });
      addContentSlide(pres, { heading: "סיכום הערכת סיכונים", bullets: ["מצב ציות כולל: בינוני — מגמה חיובית", "עדיפות גבוהה ביותר: מוכנות DORA (מועד רגולטורי מתקרב)", "חשיפה פיננסית: קנסות פוטנציאליים עד 2% מהמחזור השנתי עבור אי-ציות GDPR", "המלצה: הקצאת משאבים נוספים לסגירת פערי DORA ו-AML עד סוף רבעון 2"], lang: "he" });
    },
  },

  "one-pager": {
    en: (pres) => {
      addQuadrantSlide(pres, {
        heading: "Executive Summary — Digital Claims Transformation",
        quadrants: [
          {
            title: "Problem",
            items: [
              "Claims processing takes 5+ days on average",
              "Manual review creates operational bottleneck",
              "Customer satisfaction declining during peak seasons",
              "Cost per claim 68% above industry benchmark",
            ],
          },
          {
            title: "Solution",
            items: [
              "AI-powered claims triage and auto-adjudication",
              "Self-service portal for low-complexity claims",
              "Real-time fraud detection system",
              "Mobile-first claims submission experience",
            ],
          },
          {
            title: "Impact",
            items: [
              "Processing time reduced to under 3 days",
              "40% reduction in operational costs",
              "NPS improvement of 15+ points projected",
              "Annual savings of $2.8M by Year 2",
            ],
          },
          {
            title: "The Ask",
            items: [
              "$724K investment over 6 months",
              "15 FTE allocation (Engineering + Ops)",
              "Executive sponsorship from COO",
              "Board approval by April board meeting",
            ],
          },
        ],
        lang: "en",
      });
    },
    he: (pres) => {
      addQuadrantSlide(pres, {
        heading: "תקציר מנהלים — טרנספורמציה דיגיטלית של תביעות",
        quadrants: [
          {
            title: "בעיה",
            items: [
              "עיבוד תביעות אורך 5+ ימים בממוצע",
              "סקירה ידנית יוצרת צוואר בקבוק תפעולי",
              "שביעות רצון לקוחות יורדת בעונות שיא",
              "עלות לתביעה גבוהה ב-68% מאמת המידה",
            ],
          },
          {
            title: "פתרון",
            items: [
              "מיון ואישור תביעות אוטומטי מבוסס AI",
              "פורטל שירות עצמי לתביעות פשוטות",
              "מערכת זיהוי הונאות בזמן אמת",
              "חוויית הגשת תביעות מובייל-פירסט",
            ],
          },
          {
            title: "השפעה",
            items: [
              "זמן עיבוד מצטמצם לפחות מ-3 ימים",
              "הפחתה של 40% בעלויות תפעוליות",
              "שיפור NPS צפוי של 15+ נקודות",
              "חיסכון שנתי של $2.8M עד שנה 2",
            ],
          },
          {
            title: "הבקשה",
            items: [
              "השקעה של $724K על פני 6 חודשים",
              "הקצאת 15 משרות (הנדסה + תפעול)",
              "חסות מנהלית מסמנכ״ל התפעול",
              "אישור דירקטוריון עד ישיבת אפריל",
            ],
          },
        ],
        lang: "he",
      });
    },
  },
};

// ==========================================
// GENERATE ALL PPTX FILES
// ==========================================

async function generateAll() {
  const results = [];

  for (const [templateName, langDefs] of Object.entries(TEMPLATES)) {
    for (const [lang, buildFn] of Object.entries(langDefs)) {
      const pres = new PptxGenJS();
      pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 ... actually let's use standard
      pres.defineLayout({ name: "STANDARD", width: 10, height: 5.625 });
      pres.layout = "STANDARD";

      pres.author = "PassportCard SparkKit";
      pres.company = "PassportCard";
      pres.subject = templateName;

      buildFn(pres);

      const filename = `${templateName}-${lang}.pptx`;
      const filepath = path.join(OUT_DIR, filename);

      await pres.writeFile({ fileName: filepath });
      const stats = fs.statSync(filepath);
      results.push({ file: filename, size: (stats.size / 1024).toFixed(1) + " KB" });
      console.log(`Created: ${filename} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  }

  return results;
}

generateAll()
  .then((results) => {
    console.log("\n=== PPTX Generation Complete ===");
    console.log(`Total files: ${results.length}`);
    results.forEach((r) => console.log(`  ${r.file}: ${r.size}`));
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
