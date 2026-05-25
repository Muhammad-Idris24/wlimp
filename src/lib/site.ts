import {
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Network,
  Presentation,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const siteConfig = {
  name: "WeCare Leadership and Impact Mentorship Programme",
  shortName: "WLIMP",
  organizer: "WeCare Centre for Community Awareness and Empowerment Initiative",
  theme: "Leadership For Impact: Driving Youth Innovation For Nation Building",
  date: "20 August 2026",
  location: "Nigeria",
  email: "partnerships@wlimp.org",
  phone: "+234 000 000 0000",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wlimp.org",
};

export const metrics = [
  { value: 489, suffix: "", label: "Applications", note: "National and international interest" },
  { value: 50, suffix: "", label: "Selected Fellows", note: "Merit-based 2026 cohort" },
  { value: 38, suffix: "", label: "States + FCT", note: "Representation across Nigeria" },
  { value: 3, suffix: " countries", label: "International Reach", note: "Entries from Ghana, Zambia and Rwanda" },
  { value: 10, suffix: "", label: "Leadership Modules", note: "Structured ten-week pathway" },
];

export const modules = [
  "Onboarding and programme orientation",
  "Transformational leadership",
  "Governance, policy and citizenship",
  "Communication and public speaking",
  "Capacity development",
  "Career path strategy",
  "Career development clinic",
  "Innovation, technology and digital skills",
  "Entrepreneurship, social impact and project management",
  "Capstone project and leadership conference",
];

export const conferenceTracks = [
  { title: "Leadership, Ethics and Public Responsibility", icon: ShieldCheck },
  { title: "Youth, Governance and Civic Participation", icon: Landmark },
  { title: "Innovation, Entrepreneurship and Problem-Solving", icon: Lightbulb },
  { title: "Communication, Influence and Personal Leadership", icon: Megaphone },
  { title: "Community Impact and Social Change", icon: UsersRound },
  { title: "Women, Inclusion and Leadership Equity", icon: Network },
];

export const conferenceActivities = [
  "Keynote address",
  "High-level panel discussions",
  "Fireside conversation",
  "WLIMP capstone showcase",
  "Mentorship spotlight",
  "Recognition segment",
  "Networking session",
  "Closing reflections",
];

export const audiences = [
  "WLIMP fellows and alumni",
  "Young professionals and student leaders",
  "Government and policy actors",
  "Development partners and foundations",
  "Academics, researchers and civil society",
  "Private sector leaders, mentors and media",
];

export const stakeholderCases = [
  {
    title: "Public institutions",
    body: "A credible channel for engaging prepared young leaders and demonstrating seriousness about civic inclusion.",
    icon: Building2,
  },
  {
    title: "Development partners",
    body: "A structured human-capital intervention with clear relevance to governance, education, inclusion and social impact.",
    icon: Handshake,
  },
  {
    title: "Corporate organisations",
    body: "A disciplined platform for youth empowerment, brand trust, leadership visibility and practical social responsibility.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Youth leaders",
    body: "A stage for confidence, mentorship, peer connection and transition into wider public engagement.",
    icon: Sparkles,
  },
];

export const partners = [
  {
    name: "EESHA'S Learning Foundation",
    logo: "/partners/eesha-learning.jpeg",
  },
  {
    name: "Bauchi Pearl Magazine",
    logo: "/partners/bauchi-pearl.png",
  },
  {
    name: "NYAPD",
    logo: "/partners/nyapd.jpeg",
  },
  {
    name: "Tafawa Balewa Colloquium",
    logo: "/partners/tafawa-balewa.jpeg",
  },
  {
    name: "Al-Mufeed Community Health",
    logo: "/partners/al-mufeed-ch.jpeg",
  },
  {
    name: "YandyTech Community",
    logo: "/partners/yandy-tech.png",
  },
];

export const aboutPoints = [
  {
    title: "Structured leadership preparation",
    body: "WLIMP bridges potential and preparedness through mentorship, capacity building, ethical grounding and practical problem-solving.",
    icon: BookOpenCheck,
  },
  {
    title: "Public engagement, not ceremony",
    body: "The conference turns learning into visibility, connecting fellows with institutions, mentors, policymakers and partners.",
    icon: Presentation,
  },
  {
    title: "African-rooted transformation",
    body: "The programme treats leadership as responsibility: service, competence, innovation and contribution to nation-building.",
    icon: Landmark,
  },
];
