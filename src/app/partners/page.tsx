import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Handshake, Megaphone, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner With WLIMP",
  description:
    "Partner with the WeCare Leadership and Impact Mentorship Programme to support youth leadership, mentorship and community transformation.",
};

const partnershipPaths = [
  {
    title: "Institutional support",
    body: "Support programme delivery, learning resources, venue logistics and the wider conference experience.",
    icon: Handshake,
  },
  {
    title: "Technical contribution",
    body: "Bring expertise, tools, training support or advisory input into leadership, innovation and career development sessions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Media partnership",
    body: "Help amplify the stories, ideas and outcomes emerging from WLIMP fellows, facilitators and conference participants.",
    icon: Megaphone,
  },
  {
    title: "Mentorship access",
    body: "Connect young leaders to experienced professionals, civic actors, founders and community builders.",
    icon: UsersRound,
  },
];

export default function PartnersPage() {
  return (
    <main className="page-shell">
      <section className="section partner-page-hero">
        <Reveal className="partner-page-heading">
          <p>Partner With WLIMP</p>
          <h1>Build with a youth leadership platform designed for lasting civic and professional impact.</h1>
          <span>
            WLIMP works with aligned institutions, organisations and individuals who believe that leadership preparation
            should be practical, values-driven and accessible to emerging young leaders.
          </span>
          <div className="hero-actions partner-page-actions">
            <Button asChild size="lg">
              <Link href={siteConfig.partnershipUrl} className="cta-on-emerald" target="_blank" rel="noreferrer">
                Complete Partner Form <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={`mailto:${siteConfig.email}`}>Email WeCare</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="section partner-path-section">
        <div className="section-heading">
          <Reveal>
            <p>How Partners Can Contribute</p>
            <h2>Partnership should strengthen the experience and expand opportunity.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              The programme is open to thoughtful collaboration across funding, facilitation, media visibility,
              mentoring, technical support and institutional engagement.
            </p>
          </Reveal>
        </div>
        <div className="partner-path-grid">
          {partnershipPaths.map((item, index) => (
            <Reveal className="partner-path-card" delay={index * 0.04} key={item.title}>
              <item.icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section register-cta-section">
        <Reveal className="register-cta">
          <p>Partnership Form</p>
          <h2>Share your partnership interest with the WLIMP team.</h2>
          <span>
            Use the official form to tell us how you would like to support the programme, conference or future WLIMP
            ecosystem.
          </span>
          <Button asChild size="lg">
            <Link href={siteConfig.partnershipUrl} className="cta-on-emerald" target="_blank" rel="noreferrer">
              Open Partner Form <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
