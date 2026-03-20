const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  TableOfContents,
  Tab,
  TabStopType,
  TabStopPosition,
  convertInchesToTwip,
} = require("docx");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "../assets/templates/documents");
fs.mkdirSync(OUT_DIR, { recursive: true });

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

// Helper functions
function brandHeading(text, opts = {}) {
  const { level = HeadingLevel.HEADING_1, isHe = false } = opts;
  return new Paragraph({
    heading: level,
    alignment: isHe ? AlignmentType.RIGHT : AlignmentType.LEFT,
    spacing: { before: 240, after: 120 },
    children: [
      new TextRun({
        text,
        font: isHe ? BRAND.FONT_HE : BRAND.FONT,
        color: BRAND.NAVY,
        bold: true,
        size: level === HeadingLevel.HEADING_1 ? 36 : level === HeadingLevel.HEADING_2 ? 28 : 24,
      }),
    ],
  });
}

function brandParagraph(text, opts = {}) {
  const { isHe = false, bold = false, color = BRAND.NAVY, size = 22, spacing = {} } = opts;
  return new Paragraph({
    alignment: isHe ? AlignmentType.RIGHT : AlignmentType.LEFT,
    spacing: { after: 120, ...spacing },
    children: [
      new TextRun({
        text,
        font: isHe ? BRAND.FONT_HE : BRAND.FONT,
        color,
        bold,
        size,
      }),
    ],
  });
}

function brandBullet(text, opts = {}) {
  const { isHe = false, level = 0 } = opts;
  return new Paragraph({
    alignment: isHe ? AlignmentType.RIGHT : AlignmentType.LEFT,
    bullet: { level },
    spacing: { after: 60 },
    children: [
      new TextRun({
        text,
        font: isHe ? BRAND.FONT_HE : BRAND.FONT,
        color: BRAND.NAVY,
        size: 22,
      }),
    ],
  });
}

function brandTable(headers, rows, opts = {}) {
  const { isHe = false } = opts;
  const font = isHe ? BRAND.FONT_HE : BRAND.FONT;

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map(
      (h) =>
        new TableCell({
          shading: { fill: BRAND.NAVY, type: ShadingType.CLEAR },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: h,
                  font,
                  color: BRAND.WHITE,
                  bold: true,
                  size: 20,
                }),
              ],
            }),
          ],
        })
    ),
  });

  const dataRows = rows.map(
    (row, rowIdx) =>
      new TableRow({
        children: row.map(
          (cell) =>
            new TableCell({
              shading: {
                fill: rowIdx % 2 === 0 ? BRAND.CREAM : BRAND.WHITE,
                type: ShadingType.CLEAR,
              },
              children: [
                new Paragraph({
                  alignment: isHe ? AlignmentType.RIGHT : AlignmentType.LEFT,
                  children: [
                    new TextRun({
                      text: cell,
                      font,
                      color: BRAND.NAVY,
                      size: 20,
                    }),
                  ],
                }),
              ],
            })
        ),
      })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, ...dataRows],
  });
}

function dividerLine() {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 2, color: BRAND.RED },
    },
    children: [],
  });
}

function createHeader(isHe) {
  return new Header({
    children: [
      new Paragraph({
        alignment: isHe ? AlignmentType.RIGHT : AlignmentType.LEFT,
        children: [
          new TextRun({
            text: "PassportCard",
            font: BRAND.FONT,
            color: BRAND.RED,
            bold: true,
            size: 18,
          }),
          new TextRun({
            text: "  |  Confidential",
            font: BRAND.FONT,
            color: "999999",
            size: 16,
          }),
        ],
      }),
    ],
  });
}

function createFooter(isHe) {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "PassportCard International Insurance  |  Page ",
            font: BRAND.FONT,
            color: "999999",
            size: 16,
          }),
          new TextRun({
            children: [PageNumber.CURRENT],
            font: BRAND.FONT,
            color: "999999",
            size: 16,
          }),
        ],
      }),
    ],
  });
}

function createDocStyles() {
  return {
    default: {
      document: {
        run: {
          font: BRAND.FONT,
          color: BRAND.NAVY,
          size: 22,
        },
        paragraph: {
          spacing: { after: 120 },
        },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        run: {
          font: BRAND.FONT,
          color: BRAND.NAVY,
          size: 36,
          bold: true,
        },
        paragraph: {
          spacing: { before: 360, after: 120 },
        },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        run: {
          font: BRAND.FONT,
          color: BRAND.NAVY,
          size: 28,
          bold: true,
        },
        paragraph: {
          spacing: { before: 240, after: 120 },
        },
      },
    ],
  };
}

// ==========================================
// TEMPLATE DEFINITIONS
// ==========================================

const TEMPLATES = {
  "executive-memo": {
    en: () => {
      const isHe = false;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("EXECUTIVE MEMORANDUM", { bold: true, size: 16, color: "999999" }),
              brandParagraph("Date: March 2026", { size: 20, color: "999999" }),
              brandParagraph("Classification: Confidential", { size: 20, color: BRAND.RED }),
              dividerLine(),
              brandHeading("Subject: Digital Claims Transformation — Investment Decision"),
              dividerLine(),
              brandHeading("Recommendation", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("We recommend approving a $724,500 investment over six months to implement an AI-powered claims automation platform. This investment will reduce average claims processing time from 5.2 days to under 3 days, decrease cost per claim by 40%, and improve customer satisfaction by an estimated 15 NPS points."),
              brandHeading("Background", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("PassportCard processes over 120,000 travel insurance claims annually across 12 European markets. Current processing relies heavily on manual review, creating bottlenecks during peak travel season (June-September) and resulting in customer satisfaction scores below industry benchmarks."),
              brandParagraph("The competitive landscape is shifting rapidly, with digital-first insurers offering instant claim resolution for simple cases. Our current 5.2-day average processing time is significantly above the emerging industry standard of 2-3 days."),
              brandHeading("Analysis", { level: HeadingLevel.HEADING_2 }),
              brandBullet("70% of incoming claims are low-complexity cases suitable for AI auto-adjudication"),
              brandBullet("Manual review costs $47 per claim vs. projected $28 with AI triage"),
              brandBullet("Peak season claims volume increased 34% YoY, outpacing staff growth"),
              brandBullet("Customer complaints related to claims processing rose 22% in Q4 2025"),
              brandHeading("Options", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Option", "Investment", "Timeline", "Risk", "Expected ROI"],
                [
                  ["A: Full automation", "$724,500", "6 months", "Medium", "40% in 18 months"],
                  ["B: Partial automation", "$420,000", "4 months", "Low", "25% in 18 months"],
                  ["C: Outsource processing", "$890,000/yr", "2 months", "High", "15% ongoing savings"],
                ],
                { isHe }
              ),
              brandHeading("Recommendation Detail", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("Option A is recommended based on the strongest long-term ROI and alignment with our digital strategy. The phased implementation approach mitigates execution risk, with each phase validated before proceeding. The AI model will be trained on 24 months of historical claims data, achieving an estimated 85% accuracy on auto-adjudication within the first quarter of deployment."),
              brandHeading("Next Steps", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Board approval of $724,500 budget allocation — Target: April board meeting"),
              brandBullet("Project team assignment and kickoff — Target: April 15, 2026"),
              brandBullet("Historical data extraction and preparation — Target: April 30, 2026"),
              brandBullet("Phase 1 milestone review — Target: June 15, 2026"),
              dividerLine(),
              brandParagraph("Prepared by: Strategy & Operations Division", { size: 18, color: "999999" }),
              brandParagraph("For questions: strategy@passportcard.com", { size: 18, color: "999999" }),
            ],
          },
        ],
      };
    },
    he: () => {
      const isHe = true;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("מזכר מנהלים", { bold: true, size: 16, color: "999999", isHe }),
              brandParagraph("תאריך: מרץ 2026", { size: 20, color: "999999", isHe }),
              brandParagraph("סיווג: סודי", { size: 20, color: BRAND.RED, isHe }),
              dividerLine(),
              brandHeading("נושא: טרנספורמציה דיגיטלית של תביעות — החלטת השקעה", { isHe }),
              dividerLine(),
              brandHeading("המלצה", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("אנו ממליצים לאשר השקעה של $724,500 על פני שישה חודשים להטמעת פלטפורמת אוטומציית תביעות מבוססת AI. השקעה זו תצמצם את זמן עיבוד התביעות הממוצע מ-5.2 ימים לפחות מ-3 ימים, תפחית את העלות לתביעה ב-40%, ותשפר את שביעות רצון הלקוחות ב-15 נקודות NPS.", { isHe }),
              brandHeading("רקע", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("פספורטכארד מעבדת מעל 120,000 תביעות ביטוח נסיעות מדי שנה ב-12 שווקים אירופיים. העיבוד הנוכחי מסתמך במידה רבה על סקירה ידנית, מה שיוצר צווארי בקבוק בעונת נסיעות השיא (יוני-ספטמבר) ומוביל לציוני שביעות רצון לקוחות מתחת לאמות המידה בתעשייה.", { isHe }),
              brandParagraph("הנוף התחרותי משתנה במהירות, כאשר מבטחים דיגיטליים מציעים פתרון תביעות מיידי למקרים פשוטים. זמן העיבוד הממוצע שלנו של 5.2 ימים גבוה משמעותית מהסטנדרט המתהווה בתעשייה של 2-3 ימים.", { isHe }),
              brandHeading("ניתוח", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("70% מהתביעות הנכנסות הן מקרים בסיבוכיות נמוכה המתאימים לאישור אוטומטי", { isHe }),
              brandBullet("סקירה ידנית עולה $47 לתביעה לעומת $28 עם מיון AI", { isHe }),
              brandBullet("נפח תביעות בעונת שיא עלה ב-34% שנה אחר שנה, מהר יותר מגידול כ״א", { isHe }),
              brandBullet("תלונות לקוחות הקשורות לעיבוד תביעות עלו ב-22% ברבעון 4 2025", { isHe }),
              brandHeading("אפשרויות", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["אפשרות", "השקעה", "לוח זמנים", "סיכון", "ROI צפוי"],
                [
                  ["א׳: אוטומציה מלאה", "$724,500", "6 חודשים", "בינוני", "40% ב-18 חודשים"],
                  ["ב׳: אוטומציה חלקית", "$420,000", "4 חודשים", "נמוך", "25% ב-18 חודשים"],
                  ["ג׳: מיקור חוץ", "$890,000/שנה", "חודשיים", "גבוה", "15% חיסכון שוטף"],
                ],
                { isHe }
              ),
              brandHeading("פירוט ההמלצה", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("אפשרות א׳ מומלצת על בסיס ה-ROI הטוב ביותר לטווח ארוך והתאמה לאסטרטגיה הדיגיטלית שלנו. גישת ההטמעה המדורגת ממתנת את סיכון הביצוע, כאשר כל שלב מאומת לפני ההמשך. מודל ה-AI יאומן על 24 חודשי נתוני תביעות היסטוריים, ויגיע לדיוק משוער של 85% באישור אוטומטי תוך הרבעון הראשון להפעלה.", { isHe }),
              brandHeading("צעדים הבאים", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("אישור דירקטוריון להקצאת תקציב של $724,500 — יעד: ישיבת דירקטוריון אפריל", { isHe }),
              brandBullet("הקצאת צוות פרויקט והתנעה — יעד: 15 באפריל 2026", { isHe }),
              brandBullet("חילוץ והכנת נתונים היסטוריים — יעד: 30 באפריל 2026", { isHe }),
              brandBullet("סקירת אבן דרך שלב 1 — יעד: 15 ביוני 2026", { isHe }),
              dividerLine(),
              brandParagraph("הוכן על ידי: חטיבת אסטרטגיה ותפעול", { size: 18, color: "999999", isHe }),
              brandParagraph("לשאלות: strategy@passportcard.com", { size: 18, color: "999999", isHe }),
            ],
          },
        ],
      };
    },
  },

  "technical-spec": {
    en: () => {
      const isHe = false;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("TECHNICAL SPECIFICATION", { bold: true, size: 16, color: "999999" }),
              brandParagraph("Document Version: 1.0 | Status: Draft", { size: 20, color: "999999" }),
              dividerLine(),
              brandHeading("AI Claims Automation Platform — Technical Architecture"),
              dividerLine(),

              brandHeading("Version History", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Version", "Date", "Author", "Changes"],
                [
                  ["1.0", "March 2026", "Engineering Team", "Initial draft"],
                  ["0.9", "February 2026", "Architecture Review", "Peer review feedback"],
                  ["0.5", "January 2026", "AI Engineering", "Preliminary architecture"],
                ],
                { isHe }
              ),

              brandHeading("Executive Summary", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("This document describes the technical architecture for the AI Claims Automation Platform. The system will process incoming claims through an AI triage pipeline, automatically adjudicating low-complexity cases and routing complex cases to human reviewers with AI-assisted context summaries."),

              brandHeading("Architecture Overview", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("The platform follows a microservices architecture deployed on AWS, consisting of four primary service domains:"),
              brandBullet("Ingestion Layer: API gateway handling claim submissions from mobile, web, and partner channels"),
              brandBullet("AI Pipeline: ML model ensemble for document classification, data extraction, and auto-adjudication"),
              brandBullet("Business Logic Layer: Rules engine, fraud detection, and workflow orchestration"),
              brandBullet("Data Layer: PostgreSQL for transactional data, S3 for document storage, Redis for caching"),

              brandHeading("Component Details", { level: HeadingLevel.HEADING_2 }),
              brandHeading("Ingestion Service", { level: HeadingLevel.HEADING_3 }),
              brandBullet("RESTful API with OpenAPI 3.0 specification"),
              brandBullet("Rate limiting: 1,000 requests/minute per client"),
              brandBullet("File upload: Support for PDF, JPEG, PNG up to 25MB per document"),
              brandBullet("Authentication: OAuth 2.0 with JWT tokens"),

              brandHeading("AI Triage Engine", { level: HeadingLevel.HEADING_3 }),
              brandBullet("Document classification model: Fine-tuned BERT achieving 94% accuracy"),
              brandBullet("OCR pipeline: AWS Textract for structured document extraction"),
              brandBullet("Auto-adjudication model: Gradient boosted ensemble trained on 24-month historical data"),
              brandBullet("Confidence threshold: 0.85 for auto-approval, below routes to human review"),

              brandHeading("Integration Points", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["System", "Protocol", "Direction", "Purpose"],
                [
                  ["Claims Management (SAP)", "REST API", "Bidirectional", "Claim lifecycle management"],
                  ["Document Management", "S3 Events", "Inbound", "Document storage and retrieval"],
                  ["Payment Gateway", "REST API", "Outbound", "Claim payouts"],
                  ["Fraud Detection (SAS)", "Kafka", "Bidirectional", "Real-time fraud scoring"],
                  ["CRM (Salesforce)", "REST API", "Outbound", "Customer notifications"],
                ],
                { isHe }
              ),

              brandHeading("Security", { level: HeadingLevel.HEADING_2 }),
              brandBullet("All data encrypted at rest (AES-256) and in transit (TLS 1.3)"),
              brandBullet("PII data tokenization before AI model processing"),
              brandBullet("RBAC with principle of least privilege across all services"),
              brandBullet("SOC 2 Type II compliance required for all components"),
              brandBullet("Penetration testing scheduled quarterly"),

              brandHeading("Performance Requirements", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Metric", "Target", "Measurement"],
                [
                  ["API Response Time (p95)", "< 500ms", "Datadog APM"],
                  ["AI Triage Decision Time", "< 30 seconds", "Custom metrics"],
                  ["System Availability", "99.9%", "Uptime monitoring"],
                  ["Document Processing Throughput", "500 docs/minute", "Queue metrics"],
                  ["Recovery Time Objective (RTO)", "< 1 hour", "DR drill results"],
                ],
                { isHe }
              ),

              brandHeading("Risks & Mitigations", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Model drift: Automated monitoring with weekly performance evaluation and retraining triggers"),
              brandBullet("Data quality: Input validation pipeline with rejection and manual review queue"),
              brandBullet("Vendor lock-in: Abstraction layers for cloud services, container-based deployment"),
              brandBullet("Regulatory changes: Configurable rules engine separating business logic from AI decisions"),

              brandHeading("Appendices", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("A. API Schema Documentation (see attached OpenAPI spec)"),
              brandParagraph("B. Data Flow Diagrams"),
              brandParagraph("C. Infrastructure Cost Estimates"),
              brandParagraph("D. Load Test Results"),
            ],
          },
        ],
      };
    },
    he: () => {
      const isHe = true;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("מפרט טכני", { bold: true, size: 16, color: "999999", isHe }),
              brandParagraph("גרסת מסמך: 1.0 | סטטוס: טיוטה", { size: 20, color: "999999", isHe }),
              dividerLine(),
              brandHeading("פלטפורמת אוטומציית תביעות AI — ארכיטקטורה טכנית", { isHe }),
              dividerLine(),

              brandHeading("היסטוריית גרסאות", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["גרסה", "תאריך", "מחבר", "שינויים"],
                [
                  ["1.0", "מרץ 2026", "צוות הנדסה", "טיוטה ראשונית"],
                  ["0.9", "פברואר 2026", "סקירת ארכיטקטורה", "משוב עמיתים"],
                  ["0.5", "ינואר 2026", "הנדסת AI", "ארכיטקטורה מקדימה"],
                ],
                { isHe }
              ),

              brandHeading("תקציר מנהלים", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("מסמך זה מתאר את הארכיטקטורה הטכנית של פלטפורמת אוטומציית תביעות AI. המערכת תעבד תביעות נכנסות דרך צינור מיון AI, תאשר אוטומטית מקרים בסיבוכיות נמוכה ותנתב מקרים מורכבים לסוקרים אנושיים עם סיכומי הקשר בסיוע AI.", { isHe }),

              brandHeading("סקירת ארכיטקטורה", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("הפלטפורמה עוקבת אחר ארכיטקטורת מיקרו-שירותים המופעלת על AWS, המורכבת מארבעה תחומי שירות עיקריים:", { isHe }),
              brandBullet("שכבת קליטה: שער API המטפל בהגשות תביעות ממובייל, אינטרנט וערוצי שותפים", { isHe }),
              brandBullet("צינור AI: אנסמבל מודלים לסיווג מסמכים, חילוץ נתונים ואישור אוטומטי", { isHe }),
              brandBullet("שכבת לוגיקה עסקית: מנוע חוקים, זיהוי הונאות ותזמור תהליכי עבודה", { isHe }),
              brandBullet("שכבת נתונים: PostgreSQL לנתוני עסקאות, S3 לאחסון מסמכים, Redis למטמון", { isHe }),

              brandHeading("פרטי רכיבים", { level: HeadingLevel.HEADING_2, isHe }),
              brandHeading("שירות קליטה", { level: HeadingLevel.HEADING_3, isHe }),
              brandBullet("API בסגנון RESTful עם מפרט OpenAPI 3.0", { isHe }),
              brandBullet("הגבלת קצב: 1,000 בקשות לדקה לכל לקוח", { isHe }),
              brandBullet("העלאת קבצים: תמיכה ב-PDF, JPEG, PNG עד 25MB למסמך", { isHe }),
              brandBullet("אימות: OAuth 2.0 עם טוקני JWT", { isHe }),

              brandHeading("מנוע מיון AI", { level: HeadingLevel.HEADING_3, isHe }),
              brandBullet("מודל סיווג מסמכים: BERT מכוונן עם דיוק של 94%", { isHe }),
              brandBullet("צינור OCR: AWS Textract לחילוץ מסמכים מובנים", { isHe }),
              brandBullet("מודל אישור אוטומטי: אנסמבל gradient boosted מאומן על 24 חודשי נתונים", { isHe }),
              brandBullet("סף ביטחון: 0.85 לאישור אוטומטי, מתחת לכך מנותב לסקירה אנושית", { isHe }),

              brandHeading("נקודות אינטגרציה", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["מערכת", "פרוטוקול", "כיוון", "מטרה"],
                [
                  ["ניהול תביעות (SAP)", "REST API", "דו-כיווני", "ניהול מחזור חיי תביעה"],
                  ["ניהול מסמכים", "S3 Events", "נכנס", "אחסון ואחזור מסמכים"],
                  ["שער תשלום", "REST API", "יוצא", "תשלומי תביעות"],
                  ["זיהוי הונאות (SAS)", "Kafka", "דו-כיווני", "ציון הונאה בזמן אמת"],
                  ["CRM (Salesforce)", "REST API", "יוצא", "התראות ללקוח"],
                ],
                { isHe }
              ),

              brandHeading("אבטחה", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("כל הנתונים מוצפנים במנוחה (AES-256) ובתנועה (TLS 1.3)", { isHe }),
              brandBullet("טוקניזציה של PII לפני עיבוד מודל AI", { isHe }),
              brandBullet("RBAC עם עקרון הרשאות מינימליות בכל השירותים", { isHe }),
              brandBullet("ציות SOC 2 Type II נדרש לכל הרכיבים", { isHe }),
              brandBullet("בדיקות חדירה מתוכננות רבעוניות", { isHe }),

              brandHeading("דרישות ביצועים", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["מדד", "יעד", "מדידה"],
                [
                  ["זמן תגובת API (p95)", "< 500ms", "Datadog APM"],
                  ["זמן החלטת מיון AI", "< 30 שניות", "מדדים מותאמים"],
                  ["זמינות מערכת", "99.9%", "ניטור זמן פעילות"],
                  ["תפוקת עיבוד מסמכים", "500 מסמכים/דקה", "מדדי תור"],
                  ["יעד זמן התאוששות (RTO)", "< שעה", "תוצאות תרגיל DR"],
                ],
                { isHe }
              ),

              brandHeading("סיכונים ומיטיגציות", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("סחיפת מודל: ניטור אוטומטי עם הערכת ביצועים שבועית וטריגרים לאימון מחדש", { isHe }),
              brandBullet("איכות נתונים: צינור אימות קלט עם דחייה ותור סקירה ידנית", { isHe }),
              brandBullet("נעילת ספק: שכבות הפשטה לשירותי ענן, פריסה מבוססת קונטיינרים", { isHe }),
              brandBullet("שינויים רגולטוריים: מנוע חוקים הניתן להגדרה המפריד לוגיקה עסקית מהחלטות AI", { isHe }),

              brandHeading("נספחים", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("א. תיעוד סכמת API (ראו מפרט OpenAPI מצורף)", { isHe }),
              brandParagraph("ב. דיאגרמות זרימת נתונים", { isHe }),
              brandParagraph("ג. הערכות עלויות תשתית", { isHe }),
              brandParagraph("ד. תוצאות בדיקות עומסים", { isHe }),
            ],
          },
        ],
      };
    },
  },

  "business-plan": {
    en: () => {
      const isHe = false;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("BUSINESS PLAN", { bold: true, size: 16, color: "999999" }),
              dividerLine(),
              brandHeading("Nordic Market Expansion — Business Plan 2026-2028"),
              dividerLine(),

              brandHeading("Table of Contents", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("1. Executive Summary"),
              brandParagraph("2. Market Analysis"),
              brandParagraph("3. Product & Service"),
              brandParagraph("4. Go-to-Market Strategy"),
              brandParagraph("5. Financial Projections"),
              brandParagraph("6. Team & Organization"),
              brandParagraph("7. Risks & Mitigations"),
              brandParagraph("8. Appendices"),
              dividerLine(),

              brandHeading("1. Executive Summary", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("PassportCard plans to enter the Nordic travel insurance market (Sweden, Denmark, Norway) by Q3 2026. The Nordic region represents a $480M addressable market with high digital adoption, limited competition from digital-first insurers, and cultural alignment with PassportCard's direct, transparent approach. We project $18M in gross written premium by Year 2 with a path to profitability by Month 18."),

              brandHeading("2. Market Analysis", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Nordic travel insurance market: $480M annual premium"),
              brandBullet("Digital penetration: 72% of insurance purchased online (vs. 47% EU average)"),
              brandBullet("Key competitors: Europeiska (IF), Gouda, local bank-tied insurers"),
              brandBullet("Gap: No dominant digital-first travel insurer with instant claims capability"),
              brandBullet("Regulatory: Financial Supervisory Authorities in each market (Finansinspektionen, Finanstilsynet)"),

              brandHeading("3. Product & Service", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("We will launch with three product tiers adapted for Nordic travelers:"),
              brandBullet("Essential: Basic travel medical + trip cancellation (EUR 45/trip)"),
              brandBullet("Premium: Comprehensive coverage + adventure sports + telemedicine (EUR 89/trip)"),
              brandBullet("Annual: Multi-trip coverage for frequent travelers (EUR 249/year)"),

              brandHeading("4. Go-to-Market Strategy", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Phase 1 (Q3 2026): Sweden launch via digital channels + SAS airline partnership"),
              brandBullet("Phase 2 (Q4 2026): Denmark launch via banking partnerships"),
              brandBullet("Phase 3 (Q2 2027): Norway expansion leveraging established brand"),
              brandBullet("Marketing: Performance marketing (60%), partnerships (25%), brand (15%)"),

              brandHeading("5. Financial Projections", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Metric", "Year 1", "Year 2", "Year 3"],
                [
                  ["Gross Written Premium", "$6.2M", "$18.4M", "$32.1M"],
                  ["Revenue", "$4.8M", "$14.2M", "$24.8M"],
                  ["Operating Expenses", "$7.1M", "$11.8M", "$16.2M"],
                  ["EBITDA", "-$2.3M", "$2.4M", "$8.6M"],
                  ["Policies Sold", "28,000", "84,000", "147,000"],
                  ["Customer Acquisition Cost", "$85", "$62", "$48"],
                ],
                { isHe }
              ),

              brandHeading("6. Team & Organization", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Nordic GM: Senior hire with local market expertise (target Q2 2026)"),
              brandBullet("Local team: 8 FTEs Year 1 growing to 22 by Year 3"),
              brandBullet("Roles: Country Manager, Sales (3), Claims (2), Customer Service (2)"),
              brandBullet("Support from HQ: Technology, actuarial, compliance, marketing"),

              brandHeading("7. Risks & Mitigations", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Risk", "Probability", "Impact", "Mitigation"],
                [
                  ["Regulatory delays", "Medium", "High", "Engage local counsel early, parallel applications"],
                  ["Slow adoption", "Medium", "Medium", "Aggressive launch marketing, partnerships"],
                  ["Currency risk (SEK/DKK/NOK)", "High", "Medium", "Natural hedging via local premium collection"],
                  ["Competitor response", "High", "Low", "Speed to market, superior digital experience"],
                ],
                { isHe }
              ),

              brandHeading("8. Appendices", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("A. Detailed financial model"),
              brandParagraph("B. Regulatory requirements by market"),
              brandParagraph("C. Competitive analysis detail"),
              brandParagraph("D. Customer research findings"),
            ],
          },
        ],
      };
    },
    he: () => {
      const isHe = true;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("תוכנית עסקית", { bold: true, size: 16, color: "999999", isHe }),
              dividerLine(),
              brandHeading("התרחבות לשוק הנורדי — תוכנית עסקית 2026-2028", { isHe }),
              dividerLine(),

              brandHeading("תוכן עניינים", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("1. תקציר מנהלים", { isHe }),
              brandParagraph("2. ניתוח שוק", { isHe }),
              brandParagraph("3. מוצר ושירות", { isHe }),
              brandParagraph("4. אסטרטגיית Go-to-Market", { isHe }),
              brandParagraph("5. תחזיות פיננסיות", { isHe }),
              brandParagraph("6. צוות וארגון", { isHe }),
              brandParagraph("7. סיכונים ומיטיגציות", { isHe }),
              brandParagraph("8. נספחים", { isHe }),
              dividerLine(),

              brandHeading("1. תקציר מנהלים", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("פספורטכארד מתכננת להיכנס לשוק ביטוח הנסיעות הנורדי (שוודיה, דנמרק, נורווגיה) עד רבעון 3 2026. האזור הנורדי מייצג שוק בר-השגה של $480M עם אימוץ דיגיטלי גבוה, תחרות מוגבלת ממבטחים דיגיטליים, והתאמה תרבותית לגישה הישירה והשקופה של פספורטכארד. אנו מקרינים $18M בפרמיה ברוטו עד שנה 2 עם מסלול לרווחיות עד חודש 18.", { isHe }),

              brandHeading("2. ניתוח שוק", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("שוק ביטוח נסיעות נורדי: $480M פרמיה שנתית", { isHe }),
              brandBullet("חדירה דיגיטלית: 72% מהביטוח נרכש אונליין (לעומת 47% ממוצע EU)", { isHe }),
              brandBullet("מתחרים מרכזיים: Europeiska (IF), Gouda, מבטחים מקושרים לבנקים", { isHe }),
              brandBullet("פער: אין מבטח נסיעות דיגיטלי דומיננטי עם יכולת תביעות מיידיות", { isHe }),
              brandBullet("רגולציה: רשויות פיקוח פיננסי בכל שוק (Finansinspektionen, Finanstilsynet)", { isHe }),

              brandHeading("3. מוצר ושירות", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("נשיק עם שלוש דרגות מוצר המותאמות למטיילים נורדיים:", { isHe }),
              brandBullet("בסיסי: רפואי נסיעות + ביטול טיסה (EUR 45/נסיעה)", { isHe }),
              brandBullet("פרמיום: כיסוי מקיף + ספורט אתגרי + טלרפואה (EUR 89/נסיעה)", { isHe }),
              brandBullet("שנתי: כיסוי מרובה נסיעות למטיילים תכופים (EUR 249/שנה)", { isHe }),

              brandHeading("4. אסטרטגיית Go-to-Market", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("שלב 1 (רבעון 3 2026): השקה בשוודיה דרך ערוצים דיגיטליים + שותפות עם SAS", { isHe }),
              brandBullet("שלב 2 (רבעון 4 2026): השקה בדנמרק דרך שותפויות בנקאיות", { isHe }),
              brandBullet("שלב 3 (רבעון 2 2027): התרחבות לנורווגיה בנצל מותג מבוסס", { isHe }),
              brandBullet("שיווק: שיווק ביצועי (60%), שותפויות (25%), מותג (15%)", { isHe }),

              brandHeading("5. תחזיות פיננסיות", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["מדד", "שנה 1", "שנה 2", "שנה 3"],
                [
                  ["פרמיה ברוטו", "$6.2M", "$18.4M", "$32.1M"],
                  ["הכנסות", "$4.8M", "$14.2M", "$24.8M"],
                  ["הוצאות תפעול", "$7.1M", "$11.8M", "$16.2M"],
                  ["EBITDA", "-$2.3M", "$2.4M", "$8.6M"],
                  ["פוליסות שנמכרו", "28,000", "84,000", "147,000"],
                  ["עלות גיוס לקוח", "$85", "$62", "$48"],
                ],
                { isHe }
              ),

              brandHeading("6. צוות וארגון", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("מנכ״ל נורדי: גיוס בכיר עם מומחיות שוק מקומית (יעד רבעון 2 2026)", { isHe }),
              brandBullet("צוות מקומי: 8 משרות בשנה 1 גדל ל-22 עד שנה 3", { isHe }),
              brandBullet("תפקידים: מנהל מדינה, מכירות (3), תביעות (2), שירות לקוחות (2)", { isHe }),
              brandBullet("תמיכה ממטה: טכנולוגיה, אקטואריה, ציות, שיווק", { isHe }),

              brandHeading("7. סיכונים ומיטיגציות", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["סיכון", "סבירות", "השפעה", "מיטיגציה"],
                [
                  ["עיכובים רגולטוריים", "בינונית", "גבוהה", "שיתוף עורכי דין מקומיים, הגשות מקבילות"],
                  ["אימוץ איטי", "בינונית", "בינונית", "שיווק השקה אגרסיבי, שותפויות"],
                  ["סיכון מטבע (SEK/DKK/NOK)", "גבוהה", "בינונית", "גידור טבעי דרך גביית פרמיה מקומית"],
                  ["תגובת מתחרים", "גבוהה", "נמוכה", "מהירות לשוק, חוויה דיגיטלית עדיפה"],
                ],
                { isHe }
              ),

              brandHeading("8. נספחים", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("א. מודל פיננסי מפורט", { isHe }),
              brandParagraph("ב. דרישות רגולטוריות לפי שוק", { isHe }),
              brandParagraph("ג. פירוט ניתוח תחרותי", { isHe }),
              brandParagraph("ד. ממצאי מחקר לקוחות", { isHe }),
            ],
          },
        ],
      };
    },
  },

  "meeting-summary": {
    en: () => {
      const isHe = false;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("MEETING SUMMARY", { bold: true, size: 16, color: "999999" }),
              brandParagraph("Date: March 12, 2026 | Duration: 60 minutes", { size: 20, color: "999999" }),
              dividerLine(),
              brandHeading("Claims Automation — Steering Committee Meeting"),
              dividerLine(),

              brandHeading("Attendees", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Name", "Role", "Status"],
                [
                  ["Sarah Chen", "VP Claims Operations (Chair)", "Present"],
                  ["David Levy", "Head of AI Engineering", "Present"],
                  ["Maria Gonzalez", "Chief Compliance Officer", "Present"],
                  ["Tom Andersen", "CFO", "Present"],
                  ["Lisa Park", "Product Manager", "Remote"],
                  ["James Wilson", "External Consultant", "Absent (notes shared)"],
                ],
                { isHe }
              ),

              brandHeading("Agenda", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Phase 1 progress review and demo"),
              brandBullet("AI model accuracy update"),
              brandBullet("Compliance considerations for auto-adjudication"),
              brandBullet("Budget status and resource allocation"),
              brandBullet("Phase 2 planning and timeline"),

              brandHeading("Discussion Summary", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("The AI triage model has achieved 87% accuracy on the validation dataset, exceeding the 85% threshold for auto-adjudication. The team demonstrated the self-service claims portal prototype, which received positive feedback on user experience but raised questions about accessibility compliance."),
              brandParagraph("Compliance flagged that auto-adjudicated claims above EUR 1,000 will require an additional human review step per the updated IDD guidelines. The team will implement a configurable threshold to accommodate this requirement."),
              brandParagraph("Budget is tracking 5% under plan due to delayed hiring of two ML engineers. The CFO approved reallocating $40K to accelerate cloud infrastructure provisioning."),

              brandHeading("Decisions Made", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Approved: Auto-adjudication threshold set at EUR 1,000 with human review above"),
              brandBullet("Approved: Reallocation of $40K from hiring budget to infrastructure"),
              brandBullet("Deferred: Mobile app launch timeline — pending UX research results"),
              brandBullet("Approved: Phase 2 kickoff scheduled for May 1, 2026"),

              brandHeading("Action Items", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Action Item", "Owner", "Deadline", "Status"],
                [
                  ["Implement configurable adjudication threshold", "David Levy", "March 28", "New"],
                  ["Complete accessibility audit of portal", "Lisa Park", "April 5", "New"],
                  ["Submit updated compliance documentation", "Maria Gonzalez", "April 10", "New"],
                  ["Finalize ML engineer hiring (2 positions)", "HR / David Levy", "April 15", "In Progress"],
                  ["Prepare Phase 2 detailed plan", "Sarah Chen", "April 20", "New"],
                  ["Share UX research results for mobile app", "Lisa Park", "April 12", "In Progress"],
                ],
                { isHe }
              ),

              brandHeading("Next Meeting", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("Date: April 9, 2026 | Time: 14:00 CET | Location: HQ Board Room / Zoom"),
              brandParagraph("Agenda: Phase 1 completion review, Phase 2 plan approval, mobile app decision"),
              dividerLine(),
              brandParagraph("Minutes prepared by: Project Management Office", { size: 18, color: "999999" }),
              brandParagraph("Distribution: Steering Committee + Engineering Leads", { size: 18, color: "999999" }),
            ],
          },
        ],
      };
    },
    he: () => {
      const isHe = true;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("סיכום ישיבה", { bold: true, size: 16, color: "999999", isHe }),
              brandParagraph("תאריך: 12 במרץ 2026 | משך: 60 דקות", { size: 20, color: "999999", isHe }),
              dividerLine(),
              brandHeading("אוטומציית תביעות — ישיבת ועדת היגוי", { isHe }),
              dividerLine(),

              brandHeading("משתתפים", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["שם", "תפקיד", "סטטוס"],
                [
                  ["שרה כהן", "סמנכ״לית תפעול תביעות (יו״ר)", "נוכחת"],
                  ["דוד לוי", "ראש הנדסת AI", "נוכח"],
                  ["מריה גונזלס", "סמנכ״לית ציות", "נוכחת"],
                  ["תום אנדרסן", "סמנכ״ל כספים", "נוכח"],
                  ["ליסה פארק", "מנהלת מוצר", "מרחוק"],
                  ["ג׳יימס וילסון", "יועץ חיצוני", "נעדר (פרוטוקול שותף)"],
                ],
                { isHe }
              ),

              brandHeading("סדר יום", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("סקירת התקדמות שלב 1 והדגמה", { isHe }),
              brandBullet("עדכון דיוק מודל AI", { isHe }),
              brandBullet("שיקולי ציות לאישור אוטומטי", { isHe }),
              brandBullet("סטטוס תקציב והקצאת משאבים", { isHe }),
              brandBullet("תכנון שלב 2 ולוח זמנים", { isHe }),

              brandHeading("סיכום דיון", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("מודל מיון ה-AI הגיע לדיוק של 87% על מערך הוואלידציה, מעבר לסף של 85% לאישור אוטומטי. הצוות הדגים את אב-הטיפוס של פורטל התביעות בשירות עצמי, שקיבל משוב חיובי על חוויית המשתמש אך העלה שאלות לגבי ציות נגישות.", { isHe }),
              brandParagraph("ציות סימנה כי תביעות מאושרות אוטומטית מעל EUR 1,000 ידרשו שלב סקירה אנושית נוסף בהתאם להנחיות IDD המעודכנות. הצוות יטמיע סף הניתן להגדרה כדי להתאים לדרישה זו.", { isHe }),
              brandParagraph("התקציב עוקב 5% מתחת לתוכנית עקב עיכוב בגיוס שני מהנדסי ML. סמנכ״ל הכספים אישר הקצאה מחדש של $40K להאצת הקצאת תשתית ענן.", { isHe }),

              brandHeading("החלטות שהתקבלו", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("אושר: סף אישור אוטומטי נקבע על EUR 1,000 עם סקירה אנושית מעל", { isHe }),
              brandBullet("אושר: הקצאה מחדש של $40K מתקציב גיוס לתשתית", { isHe }),
              brandBullet("נדחה: לוח זמנים להשקת אפליקציית מובייל — ממתין לתוצאות מחקר UX", { isHe }),
              brandBullet("אושר: התנעת שלב 2 מתוכננת ל-1 במאי 2026", { isHe }),

              brandHeading("פעולות נדרשות", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["פעולה", "אחראי", "יעד", "סטטוס"],
                [
                  ["הטמעת סף אישור הניתן להגדרה", "דוד לוי", "28 במרץ", "חדש"],
                  ["השלמת ביקורת נגישות פורטל", "ליסה פארק", "5 באפריל", "חדש"],
                  ["הגשת תיעוד ציות מעודכן", "מריה גונזלס", "10 באפריל", "חדש"],
                  ["סיום גיוס מהנדסי ML (2 משרות)", "HR / דוד לוי", "15 באפריל", "בתהליך"],
                  ["הכנת תוכנית מפורטת לשלב 2", "שרה כהן", "20 באפריל", "חדש"],
                  ["שיתוף תוצאות מחקר UX לאפליקציה", "ליסה פארק", "12 באפריל", "בתהליך"],
                ],
                { isHe }
              ),

              brandHeading("ישיבה הבאה", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("תאריך: 9 באפריל 2026 | שעה: 14:00 CET | מיקום: חדר ישיבות מטה / Zoom", { isHe }),
              brandParagraph("סדר יום: סקירת השלמת שלב 1, אישור תוכנית שלב 2, החלטה על אפליקציית מובייל", { isHe }),
              dividerLine(),
              brandParagraph("פרוטוקול הוכן על ידי: לשכת ניהול פרויקטים", { size: 18, color: "999999", isHe }),
              brandParagraph("הפצה: ועדת היגוי + מובילי הנדסה", { size: 18, color: "999999", isHe }),
            ],
          },
        ],
      };
    },
  },

  "analysis-report": {
    en: () => {
      const isHe = false;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("ANALYSIS REPORT", { bold: true, size: 16, color: "999999" }),
              brandParagraph("Prepared: March 2026 | Classification: Internal", { size: 20, color: "999999" }),
              dividerLine(),
              brandHeading("Customer Churn Analysis — European Markets Q4 2025"),
              dividerLine(),

              brandHeading("Executive Summary", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("This report analyzes customer churn patterns across PassportCard's 12 European markets in Q4 2025. Overall churn rate increased from 18.2% to 21.7% year-over-year, driven primarily by three factors: claims processing dissatisfaction (contributing 38% of churn), price sensitivity in the mid-tier segment (29%), and competitor switching in markets with new digital entrants (22%)."),

              brandHeading("Methodology", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Data source: CRM records for all policyholders with expiry dates in Q4 2025 (n=34,200)"),
              brandBullet("Churn definition: Non-renewal within 30 days of policy expiry + no new policy within 60 days"),
              brandBullet("Analysis methods: Logistic regression, survival analysis, cohort analysis by market"),
              brandBullet("Supplementary data: Exit survey responses (n=2,100, 28% response rate)"),
              brandBullet("Validation: Cross-validated with claims data and customer service interaction logs"),

              brandHeading("Findings", { level: HeadingLevel.HEADING_2 }),
              brandHeading("Churn by Market", { level: HeadingLevel.HEADING_3 }),
              brandTable(
                ["Market", "Q4 2024", "Q4 2025", "Change", "Primary Driver"],
                [
                  ["Germany", "16.1%", "18.4%", "+2.3pp", "Price competition"],
                  ["UK", "21.3%", "26.8%", "+5.5pp", "Claims dissatisfaction"],
                  ["France", "14.7%", "16.2%", "+1.5pp", "Market average"],
                  ["Spain", "19.8%", "22.1%", "+2.3pp", "Competitor entry"],
                  ["Italy", "17.5%", "20.9%", "+3.4pp", "Claims processing"],
                ],
                { isHe }
              ),

              brandHeading("Key Churn Drivers", { level: HeadingLevel.HEADING_3 }),
              brandBullet("Claims experience (38%): Customers with claims processed > 5 days were 3.2x more likely to churn"),
              brandBullet("Price sensitivity (29%): Mid-tier customers ($50-80/trip) most affected by price comparisons"),
              brandBullet("Competitor switching (22%): New digital insurers in UK and Spain captured share"),
              brandBullet("Product fit (11%): Customers seeking coverage not offered (adventure sports, extended trips)"),

              brandHeading("Data Tables", { level: HeadingLevel.HEADING_2 }),
              brandTable(
                ["Segment", "Policies", "Churned", "Churn Rate", "Revenue at Risk"],
                [
                  ["Individual Leisure", "18,400", "4,200", "22.8%", "$3.2M"],
                  ["Family", "8,600", "1,500", "17.4%", "$1.8M"],
                  ["Business Travel", "4,200", "680", "16.2%", "$0.9M"],
                  ["Annual Multi-trip", "3,000", "840", "28.0%", "$1.4M"],
                ],
                { isHe }
              ),

              brandHeading("Conclusions", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Claims processing speed is the single strongest predictor of churn"),
              brandBullet("Annual multi-trip customers have highest churn risk despite highest LTV"),
              brandBullet("Markets with new digital competitors show accelerated churn (+3-5pp)"),
              brandBullet("Price alone is not the primary driver — claims experience outweighs price in churn prediction"),

              brandHeading("Recommendations", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Priority 1: Accelerate claims automation to achieve 3-day SLA (addresses 38% of churn)"),
              brandBullet("Priority 2: Launch retention program for annual multi-trip segment (early renewal incentives)"),
              brandBullet("Priority 3: Competitive response plan for UK and Spain (feature parity + pricing review)"),
              brandBullet("Priority 4: Expand product coverage for adventure sports and extended trips"),

              brandHeading("Sources", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("1. PassportCard CRM System — Policyholder data extract (December 2025)"),
              brandParagraph("2. Claims Management System — Processing time analytics"),
              brandParagraph("3. Customer Exit Survey — Q4 2025 wave (n=2,100)"),
              brandParagraph("4. Market Intelligence Report — European Travel Insurance (Q4 2025)"),
              brandParagraph("5. Competitor Analysis — Digital Insurer Tracker (internal)"),
            ],
          },
        ],
      };
    },
    he: () => {
      const isHe = true;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandParagraph("דוח ניתוח", { bold: true, size: 16, color: "999999", isHe }),
              brandParagraph("הוכן: מרץ 2026 | סיווג: פנימי", { size: 20, color: "999999", isHe }),
              dividerLine(),
              brandHeading("ניתוח נטישת לקוחות — שווקים אירופיים רבעון 4 2025", { isHe }),
              dividerLine(),

              brandHeading("תקציר מנהלים", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("דוח זה מנתח דפוסי נטישת לקוחות ב-12 השווקים האירופיים של פספורטכארד ברבעון 4 2025. שיעור הנטישה הכולל עלה מ-18.2% ל-21.7% שנה אחר שנה, מונע בעיקר משלושה גורמים: חוסר שביעות רצון מעיבוד תביעות (38% מהנטישה), רגישות מחיר בסגמנט הביניים (29%), ומעבר למתחרים בשווקים עם נכנסים דיגיטליים חדשים (22%).", { isHe }),

              brandHeading("מתודולוגיה", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("מקור נתונים: רשומות CRM לכל המבוטחים עם תאריכי פקיעה ברבעון 4 2025 (n=34,200)", { isHe }),
              brandBullet("הגדרת נטישה: אי-חידוש תוך 30 יום מפקיעת הפוליסה + אין פוליסה חדשה תוך 60 יום", { isHe }),
              brandBullet("שיטות ניתוח: רגרסיה לוגיסטית, ניתוח הישרדות, ניתוח עוקבות לפי שוק", { isHe }),
              brandBullet("נתונים משלימים: תגובות סקר יציאה (n=2,100, שיעור תגובה 28%)", { isHe }),
              brandBullet("אימות: אימות-צולב עם נתוני תביעות ויומני אינטראקציות שירות לקוחות", { isHe }),

              brandHeading("ממצאים", { level: HeadingLevel.HEADING_2, isHe }),
              brandHeading("נטישה לפי שוק", { level: HeadingLevel.HEADING_3, isHe }),
              brandTable(
                ["שוק", "רבעון 4 2024", "רבעון 4 2025", "שינוי", "גורם עיקרי"],
                [
                  ["גרמניה", "16.1%", "18.4%", "+2.3pp", "תחרות מחירים"],
                  ["בריטניה", "21.3%", "26.8%", "+5.5pp", "חוסר שביעות רצון מתביעות"],
                  ["צרפת", "14.7%", "16.2%", "+1.5pp", "ממוצע שוק"],
                  ["ספרד", "19.8%", "22.1%", "+2.3pp", "כניסת מתחרה"],
                  ["איטליה", "17.5%", "20.9%", "+3.4pp", "עיבוד תביעות"],
                ],
                { isHe }
              ),

              brandHeading("גורמי נטישה מרכזיים", { level: HeadingLevel.HEADING_3, isHe }),
              brandBullet("חוויית תביעות (38%): לקוחות עם תביעות שעובדו מעל 5 ימים נטו פי 3.2 לנטוש", { isHe }),
              brandBullet("רגישות מחיר (29%): לקוחות סגמנט ביניים ($50-80/נסיעה) הושפעו ביותר מהשוואות מחירים", { isHe }),
              brandBullet("מעבר למתחרים (22%): מבטחים דיגיטליים חדשים בבריטניה וספרד תפסו נתח", { isHe }),
              brandBullet("התאמת מוצר (11%): לקוחות המחפשים כיסוי שאינו מוצע (ספורט אתגרי, נסיעות מורחבות)", { isHe }),

              brandHeading("טבלאות נתונים", { level: HeadingLevel.HEADING_2, isHe }),
              brandTable(
                ["סגמנט", "פוליסות", "נטשו", "שיעור נטישה", "הכנסה בסיכון"],
                [
                  ["פנאי יחיד", "18,400", "4,200", "22.8%", "$3.2M"],
                  ["משפחה", "8,600", "1,500", "17.4%", "$1.8M"],
                  ["נסיעות עסקיות", "4,200", "680", "16.2%", "$0.9M"],
                  ["שנתי מרובה-נסיעות", "3,000", "840", "28.0%", "$1.4M"],
                ],
                { isHe }
              ),

              brandHeading("מסקנות", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("מהירות עיבוד תביעות היא המנבא החזק ביותר לנטישה", { isHe }),
              brandBullet("ללקוחות שנתיים מרובי-נסיעות סיכון הנטישה הגבוה ביותר למרות LTV הגבוה ביותר", { isHe }),
              brandBullet("שווקים עם מתחרים דיגיטליים חדשים מראים נטישה מואצת (+3-5pp)", { isHe }),
              brandBullet("מחיר לבדו אינו הגורם העיקרי — חוויית תביעות עוקפת מחיר בניבוי נטישה", { isHe }),

              brandHeading("המלצות", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("עדיפות 1: האצת אוטומציית תביעות להשגת SLA של 3 ימים (מטפל ב-38% מהנטישה)", { isHe }),
              brandBullet("עדיפות 2: השקת תוכנית שימור לסגמנט שנתי מרובה-נסיעות (תמריצי חידוש מוקדם)", { isHe }),
              brandBullet("עדיפות 3: תוכנית תגובה תחרותית לבריטניה וספרד (שוויון פיצ׳רים + סקירת תמחור)", { isHe }),
              brandBullet("עדיפות 4: הרחבת כיסוי מוצר לספורט אתגרי ונסיעות מורחבות", { isHe }),

              brandHeading("מקורות", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("1. מערכת CRM פספורטכארד — חילוץ נתוני מבוטחים (דצמבר 2025)", { isHe }),
              brandParagraph("2. מערכת ניהול תביעות — אנליטיקס זמני עיבוד", { isHe }),
              brandParagraph("3. סקר יציאת לקוחות — גל רבעון 4 2025 (n=2,100)", { isHe }),
              brandParagraph("4. דוח מודיעין שוק — ביטוח נסיעות אירופי (רבעון 4 2025)", { isHe }),
              brandParagraph("5. ניתוח תחרותי — מעקב מבטחים דיגיטליים (פנימי)", { isHe }),
            ],
          },
        ],
      };
    },
  },

  "one-pager-doc": {
    en: () => {
      const isHe = false;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandHeading("Nordic Market Expansion — Executive Brief"),
              dividerLine(),

              brandHeading("Situation", { level: HeadingLevel.HEADING_2 }),
              brandParagraph("The Nordic travel insurance market ($480M) is underserved by digital-first insurers. Current incumbents rely on traditional distribution through banks and travel agencies, with limited online claims capabilities. PassportCard's digital platform and instant claims processing provide a significant competitive advantage in a market with 72% digital insurance purchasing."),

              brandHeading("Approach", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Phased market entry: Sweden (Q3 2026), Denmark (Q4 2026), Norway (Q2 2027)"),
              brandBullet("Partnership-led distribution with SAS Airlines and Nordic banking partners"),
              brandBullet("Three product tiers: Essential, Premium, and Annual Multi-trip"),
              brandBullet("Local team of 8 FTEs supported by HQ technology and actuarial functions"),

              brandHeading("Expected Results", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Year 1: $6.2M GWP, 28,000 policies, market presence established"),
              brandBullet("Year 2: $18.4M GWP, 84,000 policies, path to profitability"),
              brandBullet("Year 3: $32.1M GWP, 147,000 policies, $8.6M EBITDA"),

              brandHeading("Next Steps", { level: HeadingLevel.HEADING_2 }),
              brandBullet("Board approval of $7.1M Year 1 investment — April board meeting"),
              brandBullet("Hire Nordic General Manager — Target: May 2026"),
              brandBullet("Begin regulatory filings in Sweden — Target: April 2026"),
              brandBullet("Finalize SAS partnership terms — Target: June 2026"),

              dividerLine(),
              brandParagraph("Classification: Confidential | Prepared by: Corporate Strategy", { size: 18, color: "999999" }),
            ],
          },
        ],
      };
    },
    he: () => {
      const isHe = true;
      return {
        styles: createDocStyles(),
        sections: [
          {
            headers: { default: createHeader(isHe) },
            footers: { default: createFooter(isHe) },
            children: [
              brandHeading("התרחבות לשוק הנורדי — תקציר מנהלים", { isHe }),
              dividerLine(),

              brandHeading("מצב", { level: HeadingLevel.HEADING_2, isHe }),
              brandParagraph("שוק ביטוח הנסיעות הנורדי ($480M) אינו מנוצל מספיק על ידי מבטחים דיגיטליים. המתחרים הקיימים מסתמכים על הפצה מסורתית דרך בנקים וסוכנויות נסיעות, עם יכולות תביעות מקוונות מוגבלות. הפלטפורמה הדיגיטלית של פספורטכארד ועיבוד התביעות המיידי מספקים יתרון תחרותי משמעותי בשוק עם 72% רכישת ביטוח דיגיטלית.", { isHe }),

              brandHeading("גישה", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("כניסה מדורגת: שוודיה (רבעון 3 2026), דנמרק (רבעון 4 2026), נורווגיה (רבעון 2 2027)", { isHe }),
              brandBullet("הפצה מונחית שותפויות עם חברת התעופה SAS ושותפים בנקאיים נורדיים", { isHe }),
              brandBullet("שלוש דרגות מוצר: בסיסי, פרמיום ושנתי מרובה-נסיעות", { isHe }),
              brandBullet("צוות מקומי של 8 משרות בתמיכת טכנולוגיה ופונקציות אקטואריה ממטה", { isHe }),

              brandHeading("תוצאות צפויות", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("שנה 1: $6.2M פרמיה ברוטו, 28,000 פוליסות, ביסוס נוכחות שוק", { isHe }),
              brandBullet("שנה 2: $18.4M פרמיה ברוטו, 84,000 פוליסות, מסלול לרווחיות", { isHe }),
              brandBullet("שנה 3: $32.1M פרמיה ברוטו, 147,000 פוליסות, $8.6M EBITDA", { isHe }),

              brandHeading("צעדים הבאים", { level: HeadingLevel.HEADING_2, isHe }),
              brandBullet("אישור דירקטוריון להשקעה של $7.1M בשנה 1 — ישיבת דירקטוריון אפריל", { isHe }),
              brandBullet("גיוס מנכ״ל נורדי — יעד: מאי 2026", { isHe }),
              brandBullet("תחילת הגשות רגולטוריות בשוודיה — יעד: אפריל 2026", { isHe }),
              brandBullet("סיכום תנאי שותפות SAS — יעד: יוני 2026", { isHe }),

              dividerLine(),
              brandParagraph("סיווג: סודי | הוכן על ידי: אסטרטגיה ארגונית", { size: 18, color: "999999", isHe }),
            ],
          },
        ],
      };
    },
  },
};

// ==========================================
// GENERATE ALL DOCX FILES
// ==========================================

async function generateAll() {
  const results = [];

  for (const [templateName, langDefs] of Object.entries(TEMPLATES)) {
    for (const [lang, buildFn] of Object.entries(langDefs)) {
      const docDef = buildFn();
      const doc = new Document(docDef);

      const buffer = await Packer.toBuffer(doc);
      const filename = `${templateName}-${lang}.docx`;
      const filepath = path.join(OUT_DIR, filename);

      fs.writeFileSync(filepath, buffer);
      const stats = fs.statSync(filepath);
      results.push({
        file: filename,
        size: (stats.size / 1024).toFixed(1) + " KB",
      });
      console.log(`Created: ${filename} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  }

  return results;
}

generateAll()
  .then((results) => {
    console.log("\n=== DOCX Generation Complete ===");
    console.log(`Total files: ${results.length}`);
    results.forEach((r) => console.log(`  ${r.file}: ${r.size}`));
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
