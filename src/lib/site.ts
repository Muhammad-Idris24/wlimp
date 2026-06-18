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
  email: "wecarefng@gmail.com",
  phone: "+234 000 000 0000",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wlimp.org",
  registrationUrl: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ?? "",
};

export const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About WLIMP", href: "/about-wlimp" },
  { label: "WLIMP Fellows", href: "/fellows" },
  { label: "Experts", href: "/#experts" },
];

export const whyAttend = [
  "Leadership development for clarity, confidence and impact",
  "Career readiness insights for navigating today's job market",
  "Mentorship opportunities with experienced leaders and professionals",
  "Networking with peers, mentors and emerging changemakers",
  "Access to industry voices across leadership, innovation and youth development",
  "Personal growth that prepares participants for long-term contribution",
];

export const participantGains = [
  "Practical leadership skills participants can apply immediately",
  "Clearer career development direction and guidance",
  "Exposure to opportunities across different industries",
  "Meaningful professional relationships and networks",
  "Increased confidence, clarity and motivation to grow",
];

export const attendeeProfiles = [
  "Students preparing for the future",
  "Recent graduates navigating career direction",
  "Young professionals seeking growth and clarity",
  "Entrepreneurs building meaningful initiatives",
  "Community leaders or volunteers driving impact",
  "Aspiring changemakers ready to take initiative",
];

export const whatToExpect = [
  "Keynote sessions from inspiring leaders",
  "Thought-provoking panel discussions",
  "Hands-on interactive workshops",
  "High-value networking sessions",
  "Mentorship and career guidance opportunities",
];

export const faqs = [
  {
    question: "Who can attend?",
    answer: "Students, graduates, young professionals, entrepreneurs, volunteers, community leaders and aspiring changemakers in Bauchi or within the conference target audience.",
  },
  {
    question: "Is the event free?",
    answer: "Registration details will be confirmed on the official registration form once it is released.",
  },
  {
    question: "Where will it hold?",
    answer: "The conference will hold in Nigeria. The specific venue will be announced closer to the event date.",
  },
  {
    question: "What is the event schedule?",
    answer: "The full agenda will be shared with registered participants before the conference.",
  },
  {
    question: "How do I register?",
    answer: "Use the registration button on this website. The official Google Form link will be added once it is available.",
  },
];

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

export const meetOurSections = [
  {
    title: "Meet Our Premier Cohort",
    image: "/images/premier-cohort.jpeg",
    body: "A selective group of emerging leaders chosen from a competitive national and international applicant pool.",
  },
  {
    title: "Meet Our Expert-Led Facilitators",
    image: "/images/expert-led-facilitators.jpg",
    body: "Practitioners and thought leaders guiding fellows through leadership, governance, communication and social impact.",
  },
  {
    title: "Meet Our Masterclass Facilitators",
    image: "/images/masterclass-facilitators.jpg",
    body: "Specialist facilitators delivering practical masterclasses across career development, technology, entrepreneurship and capacity building.",
  },
];

export const speakerBioImages = [
  { name: "Alex Banda", image: "/speaker-bios/processed/alex-banda.jpg" },
  { name: "Mukhtar Suleiman", image: "/speaker-bios/processed/asd.jpg" },
  { name: "Nzas Emmanuel", image: "/speaker-bios/processed/dfs.jpg" },
  { name: "Dr. Aisha Umar Adamu", image: "/speaker-bios/processed/exper.jpg" },
  { name: "Ahmed Sani Inuwa", image: "/speaker-bios/processed/ahmed-sani-inuwa.jpg" },
  { name: "Muhammad Sani Kassim", image: "/speaker-bios/processed/muhammad-sani-kassim.jpg" },
  { name: "Sani Muhammad", image: "/speaker-bios/processed/sani-mohammed.jpg" },
  { name: "Isawumi Abel Dayo", image: "/speaker-bios/processed/transformational-leadership-recovered-copy.jpg" },
  { name: "Innocent Waziri", image: "/speaker-bios/processed/waziri.jpg" },
  { name: "Zainab Mukhtar", image: "/speaker-bios/processed/zainab.jpg" },
];

export const fellowBioImages = [
  { name: "Abba Idris", image: "/fellows/abba-idris.jpg" },
  { name: "Abdullahi Hauwa Yahya", image: "/fellows/abdullahi-hauwa-yahya.jpg" },
  { name: "Abel Okwor", image: "/fellows/abel-okwor.jpg" },
  { name: "Abubakar Abdulkarim", image: "/fellows/abubakar-abdulkarim.jpg" },
  { name: "Abubakar Arafat Inuwa", image: "/fellows/abubakar-arafat-inuwa.jpg" },
  { name: "Adamu Usman", image: "/fellows/adamu-usman.jpg" },
  { name: "Ahmad Halima Shuaib", image: "/fellows/ahmad-halima-shuaib.jpg" },
  { name: "Aishatu Muhammad Ambi", image: "/fellows/aishatu-muhammad-ambi.jpg" },
  { name: "Aishatu Muhammad Nura", image: "/fellows/aishatu-muhammad-nura.jpg" },
  { name: "Albashir Lawan", image: "/fellows/albashir-lawan.jpg" },
  { name: "Chimaluokem Okoye Jane", image: "/fellows/chimaluokem-okoye-jane.jpg" },
  { name: "Edidiong John Akpan", image: "/fellows/edidiong-john-akpan.jpg" },
  { name: "Elizabeth Tarre", image: "/fellows/elizabeth-tarre.jpg" },
  { name: "Fakhrunnisa Khalil Mahe", image: "/fellows/fakhrunnisa-khalil-mahe.jpg" },
  { name: "Fatai Sukurat Opeyemi", image: "/fellows/fatai-sukurat-opeyemi.jpg" },
  { name: "Hafsat Ibrahim Madugu", image: "/fellows/hafsat-ibrahim-madugu.jpg" },
  { name: "Hakilu Ibrahim", image: "/fellows/hakilu-ibrahim.jpg" },
  { name: "Hanifa Babayo Shehu", image: "/fellows/hanifa-babayo-shehu.jpg" },
  { name: "Hauwa Hashim Umar", image: "/fellows/hauwa-hashim-umar.jpg" },
  { name: "Huldah Zichat Bijimi", image: "/fellows/huldah-zichat-bijimi.jpg" },
  { name: "Idris Sabo Baba", image: "/fellows/idris-sabo-baba.jpg" },
  { name: "James Henry", image: "/fellows/james-henry.jpg" },
  { name: "Kabir Jubril Sanni", image: "/fellows/kabir-jubril-sanni.jpg" },
  { name: "Kabiru Bala Jibrin", image: "/fellows/kabiru-bala-jibrin.jpg" },
  { name: "Khadija Sulaiman", image: "/fellows/khadija-sulaiman.jpg" },
  { name: "Michael Sunmoni", image: "/fellows/michael-sunmoni.jpg" },
  { name: "Muhammad Dauda", image: "/fellows/muhammad-dauda.jpg" },
  { name: "Muhammad Isah Abdullahi", image: "/fellows/muhammad-isah-abdullahi.jpg" },
  { name: "Nathan Lartey", image: "/fellows/nathan-lartey.jpg" },
  { name: "Nwandu Chinedu Innocent", image: "/fellows/nwandu-chinedu-innocent.jpg" },
  { name: "Nwibo Blessing Patience", image: "/fellows/nwibo-blessing-patience.jpg" },
  { name: "Obioedoadim Geoffrey Gudi", image: "/fellows/obioedoadim-geoffrey-gudi.jpg" },
  { name: "Peter Sandra Golu", image: "/fellows/peter-sandra-golu.jpg" },
  { name: "Rukayyah Muhammad Bello", image: "/fellows/rukayyah-muhammad-bello.jpg" },
  { name: "Sadiq Mohammed", image: "/fellows/sadiq-mohammed.jpg" },
  { name: "Safiyya Dalhatu Umar", image: "/fellows/safiyya-dalhatu-umar.jpg" },
  { name: "Salamatu Ibrahim", image: "/fellows/salamatu-ibrahim.jpg" },
  { name: "Shamsu Abdulrahaman", image: "/fellows/shamsu-abdulrahaman.jpg" },
  { name: "Shamsuddeen Musa", image: "/fellows/shamsuddeen-musa.jpg" },
  { name: "Sumaiya Muhammad Danlami", image: "/fellows/sumaiya-muhammad-danlami.jpg" },
  { name: "Sunusi Inuwa Zagi", image: "/fellows/sunusi-inuwa-zagi.jpg" },
  { name: "Yakubu Abdullahi Musa", image: "/fellows/yakubu-abdullahi-musa.jpg" },
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
