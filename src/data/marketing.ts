export const FEATURE_STORIES = [
  {
    id: "capture",
    eyebrow: "CAPTURE",
    headline: "Turn conversations into clear deals.",
    description:
      "Stop hunting through DMs and email threads to find what was promised. Brantra captures the brief, deliverables, and rates in one structured agreement before you start working.",
    outcome: "No more missed details.",
    visualType: "deal-card" as const,
  },
  {
    id: "attention",
    eyebrow: "FOCUS",
    headline: "Know what needs attention—now.",
    description:
      "Your dashboard automatically bubbles up the next required action across all your brand partnerships. Whether it's drafting a script, reviewing feedback, or sending an invoice.",
    outcome: "Never drop a deadline.",
    visualType: "attention-queue" as const,
  },
  {
    id: "revisions",
    eyebrow: "CONTROL",
    headline: "Keep feedback from becoming scope creep.",
    description:
      "Track every revision request against the original agreement. When brands ask for changes outside the scope, Brantra makes it easy to flag and negotiate additional compensation.",
    outcome: "Protect your time.",
    visualType: "revision-history" as const,
  },
  {
    id: "payments",
    eyebrow: "REVENUE",
    headline: "Know exactly what you're owed.",
    description:
      "A clear view of every outstanding invoice and upcoming payment. See which brands pay on time, and easily follow up on the ones that don't.",
    outcome: "Get paid faster.",
    visualType: "payment-tracker" as const,
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Capture Deal",
    description: "Lock in deliverables & rates",
  },
  {
    step: "02",
    title: "Draft Content",
    description: "Submit for brand review",
  },
  {
    step: "03",
    title: "Manage Revisions",
    description: "Control scope & feedback",
  },
  {
    step: "04",
    title: "Publish",
    description: "Send live links",
  },
  {
    step: "05",
    title: "Get Paid",
    description: "Track invoices automatically",
  }
];
