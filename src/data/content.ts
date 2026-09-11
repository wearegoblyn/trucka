export const site = {
  name: "Velocity Strategic Inc.",
  shortName: "Velocity",
  url: "https://velocitystrategic.com",
  locale: "en_US",
  city: "Orlando",
  region: "FL",
  country: "US",
  title: "Velocity Strategic Inc. | Cash Acquisitions of Trucking Corporations & LLCs",
  description:
    "Velocity Strategic Inc. is an Orlando company that buys trucking corporations and LLCs outright. Cash payment, a written purchase agreement, and third-party escrow before signing.",
};

export const fmcsaBulletinUrl =
  "https://www.fmcsa.dot.gov/newsroom/do-not-sell-purchase-or-lease-usdot-or-mc-number";

export const faqs = [
  {
    question: "Do you buy just the MC number?",
    answer:
      "We acquire the entire entity, including the operating authority, assets, and corporate structure.",
  },
  {
    question: "Do you pay cash upfront?",
    answer:
      "Yes, we provide a cash payment at closing. We believe in straightforward, upfront compensation.",
  },
  {
    question: "Is the deal escrowed?",
    answer:
      "Yes, all transactions are held in a secure escrow account until the transfer is complete.",
  },
  {
    question: "Do you handle sole proprietorships?",
    answer:
      "No, we currently only acquire incorporated entities (LLCs, Corps). Sole proprietorships are not eligible.",
  },
] as const;

export const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "Talk through your goals, current structure, and what you want to achieve. We'll tell you whether we can move forward before you share any sensitive documents.",
  },
  {
    title: "File Review",
    description:
      "We review the corporate file, safety history, insurance, and outstanding obligations. If it fits our criteria, we'll make an offer based on the whole company.",
  },
  {
    title: "Escrow & Closing",
    description:
      "Funds go into third-party escrow before the agreement is signed. The contract spells out every condition, and release happens only when those conditions are met.",
  },
] as const;

export const navLinks = [
  { href: "#approach", label: "Approach" },
  { href: "#regulatory", label: "Compliance" },
  { href: "#escrow", label: "Escrow" },
  { href: "#process", label: "Process" },
] as const;

export const footerResources = [
  "FMCSA Compliance",
  "Regulatory Bulletin",
  "Escrow Partners",
] as const;

export const footerCompany = ["Advisory Team", "Orlando Office"] as const;
