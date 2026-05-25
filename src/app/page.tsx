import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { MetricCard } from "@/components/motion/metric-card";
import { RegistrationForm } from "@/components/registration-form";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  aboutPoints,
  audiences,
  conferenceActivities,
  conferenceTracks,
  metrics,
  modules,
  partners,
  siteConfig,
  stakeholderCases,
} from "@/lib/site";

const navItems = [
  ["About", "#about"],
  ["Programme", "#programme"],
  ["Conference", "#conference"],
  ["Partners", "#partners"],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "WeCare Leadership Conference 2026",
    description: `${siteConfig.shortName} convenes emerging leaders, mentors, policymakers, development actors and partners around youth innovation and nation-building.`,
    startDate: "2026-08-20",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Organization",
      name: siteConfig.organizer,
    },
    location: {
      "@type": "Place",
      name: "Nigeria",
    },
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <Link href="#top" className="brand-mark" aria-label="WLIMP home">
          <Image
            src="/brand/wecare-logo-transparent.png"
            alt="WeCare Foundation"
            width={151}
            height={130}
            className="brand-logo"
            priority
          />
        </Link>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Button asChild size="default">
          <Link href="#registration" className="cta-on-emerald">Register</Link>
        </Button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="ambient-grid" aria-hidden="true" />
          <div className="hero-inner">
            <Reveal className="hero-copy">
              <h1>{siteConfig.theme}</h1>
              <p className="hero-lede">
                The WeCare Leadership and Impact Mentorship Programme (WLIMP) is a structured leadership 
                and impact pathway preparing emerging young leaders for ethical service,
                governance awareness, innovation and practical contribution to Nigeria and Africa.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg">
                  <Link href="#registration" className="cta-on-emerald">
                    Register for Conference <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="mailto:partnerships@wlimp.org">Become a Partner</Link>
                </Button>
              </div>
              <div className="event-strip" aria-label="Conference details">
                <span>
                  <CalendarDays aria-hidden="true" /> {siteConfig.date}
                </span>
                <span>
                  <MapPin aria-hidden="true" /> Nigeria
                </span>
                <span>
                  <Globe2 aria-hidden="true" /> Youth leadership and innovation
                </span>
              </div>
            </Reveal>
            <Reveal className="hero-visual" delay={0.12}>
              <div className="image-frame">
                <Image
                  src="/images/abuja-youth-leadership.jpg"
                  alt="Young person in Abuja, Nigeria, representing the emerging leadership generation WLIMP serves"
                  width={920}
                  height={1180}
                  priority
                  sizes="(max-width: 900px) 88vw, 42vw"
                />
              </div>
              <div className="hero-note">
                <span>2026 cohort</span>
                <strong>From mentorship to public leadership</strong>
              </div>
            </Reveal>
          </div>
          <Link href="#about" className="scroll-cue" aria-label="Scroll to About WLIMP">
            <ChevronDown aria-hidden="true" />
          </Link>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <Reveal>
              <p>About WLIMP</p>
              <h2>A serious leadership pathway for a generation that cannot be left to chance.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Nigeria&apos;s demographic future is full of promise, but promise needs structure. WLIMP was created to give
                emerging leaders the mentorship, exposure and practical discipline required to move from aspiration to
                responsible public contribution.
              </p>
            </Reveal>
          </div>
          <div className="about-grid">
            {aboutPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal className="about-card" delay={index * 0.06} key={point.title}>
                  <Icon aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section metrics-section" aria-labelledby="impact-title">
          <Reveal className="compact-heading">
            <p>Impact Signals</p>
            <h2 id="impact-title">A selective national cohort with continental relevance.</h2>
          </Reveal>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <MetricCard {...metric} index={index} key={metric.label} />
            ))}
          </div>
        </section>

        <section id="programme" className="section programme-section">
          <div className="section-heading narrow">
            <Reveal>
              <p>Programme Structure</p>
              <h2>Ten modules designed to build judgment, competence and civic imagination.</h2>
            </Reveal>
          </div>
          <div className="module-list">
            {modules.map((module, index) => (
              <Reveal className="module-row" delay={Math.min(index * 0.035, 0.2)} key={module}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{module}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="conference" className="section conference-section">
          <div className="conference-shell">
            <Reveal className="conference-main">
              <p>Conference Experience</p>
              <h2>A public platform where learning becomes visibility, dialogue and institutional connection.</h2>
              <p>
                The WeCare Leadership Conference convenes fellows, mentors, policymakers, development actors,
                academics, civil society and private-sector leaders around practical leadership for public good.
              </p>
              <div className="conference-meta">
                <span>
                  <CalendarDays aria-hidden="true" /> {siteConfig.date}
                </span>
                <span>
                  <Network aria-hidden="true" /> High-level dialogue, showcase and networking
                </span>
              </div>
            </Reveal>
            <Reveal className="tracks-grid" delay={0.08}>
              {conferenceTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <article key={track.title}>
                    <Icon aria-hidden="true" />
                    <h3>{track.title}</h3>
                  </article>
                );
              })}
            </Reveal>
          </div>
          <div className="experience-grid">
            <Reveal className="experience-panel">
              <h3>Core activities</h3>
              <ul>
                {conferenceActivities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="experience-panel" delay={0.08}>
              <h3>Designed for</h3>
              <ul>
                {audiences.map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section matters-section">
          <div className="section-heading">
            <Reveal>
              <p>Why This Matters</p>
              <h2>WLIMP gives institutions a credible way to invest in leadership before leadership is in crisis.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                The conference is a partnership platform as much as a convening. It creates a disciplined meeting point
                for institutions that care about governance, inclusion, innovation, education and long-term youth
                development.
              </p>
            </Reveal>
          </div>
          <div className="stakeholder-grid">
            {stakeholderCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="stakeholder-card" delay={index * 0.05} key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="partners" className="section partners-section">
          <Reveal className="compact-heading">
            <p>Partners</p>
            <h2>Built through collaboration with organisations committed to leadership development.</h2>
          </Reveal>
          <div className="partner-wall" aria-label="Partner organisations">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>

        <section id="registration" className="section registration-section">
          <div className="registration-copy">
            <Reveal>
              <p>Registration</p>
              <h2>Join the WeCare Leadership Conference 2026.</h2>
              <p>
                Register your interest as a participant, partner, media representative or volunteer. The organising team
                will review submissions and share event details with confirmed attendees.
              </p>
            </Reveal>
            <Reveal className="assurance-panel" delay={0.08}>
              <ShieldCheck aria-hidden="true" />
              <div>
                <h3>Secure registration workflow</h3>
                <p>Validated submissions, spam protection, Supabase storage and email confirmations are built in.</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="form-shell" delay={0.1}>
            <RegistrationForm />
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Link href="#top" className="brand-mark">
            <Image
              src="/brand/wecare-logo-transparent.png"
              alt="WeCare Foundation"
              width={151}
              height={130}
              className="brand-logo footer-logo"
            />
          </Link>
          <p>{siteConfig.organizer}</p>
        </div>
        <address>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail aria-hidden="true" /> {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
            <Phone aria-hidden="true" /> {siteConfig.phone}
          </a>
        </address>
        <div className="footer-meta">
          <p>Partnership conversations are welcome for institutional support, media, technical assistance and follow-on opportunities.</p>
        </div>
        <small className="footer-copyright">
          Copyright {new Date().getFullYear()} WeCare Centre for Community Awareness and Empowerment Initiative.
        </small>
      </footer>
      <ScrollToTop />
    </>
  );
}
