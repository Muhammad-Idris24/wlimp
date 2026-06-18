import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Globe2, MapPin, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import {
  attendeeProfiles,
  faqs,
  meetOurSections,
  participantGains,
  siteConfig,
  speakerBioImages,
  whatToExpect,
  whyAttend,
} from "@/lib/site";

export default function Home() {
  const registrationHref = siteConfig.registrationUrl || "#register";
  const isExternalRegistration = registrationHref.startsWith("http");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "WLIMP Leadership Conference 2026",
    description:
      "A transformative leadership conference for young leaders, innovators and changemakers.",
    startDate: "2026-08",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="hero-section">
        <div className="ambient-grid" aria-hidden="true" />
        <div className="hero-inner">
          <Reveal className="hero-copy">
            <h1>Shape Your Future. Lead Your Generation.</h1>
            <p className="hero-lede">
              Join young leaders, innovators and changemakers at the WLIMP Leadership Conference 2026, a transformative
              experience curated to equip you with the skills, mindset and connections to thrive in today&apos;s world.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <Link
                  href={registrationHref}
                  className="cta-on-emerald"
                  target={isExternalRegistration ? "_blank" : undefined}
                  rel={isExternalRegistration ? "noreferrer" : undefined}
                >
                  Register Now <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/fellows">Meet the Fellows</Link>
              </Button>
            </div>
            <div className="event-strip" aria-label="Conference details">
              <span>
                <CalendarDays aria-hidden="true" /> August 2026
              </span>
              <span>
                <MapPin aria-hidden="true" /> Nigeria
              </span>
              <span>
                <Globe2 aria-hidden="true" /> Registration details coming soon
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
              <span>WLIMP 2026</span>
              <strong>Your next level starts with showing up.</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-section">
        <div className="section-heading">
          <Reveal>
            <p>About the Conference</p>
            <h2>A flagship gathering for leadership, career growth and personal development.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              The WLIMP Leadership Conference is hosted by the WeCare Leadership and Impact Mentorship Programme. It
              exists to bridge the gap between potential and opportunity by equipping young people with practical skills,
              mentorship and access to networks that accelerate growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section split-list-section">
        <div className="section-heading">
          <Reveal>
            <p>Why Attend?</p>
            <h2>Direct access to the experiences that shape future leaders.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              The conference is built for students, graduates, young professionals, entrepreneurs and emerging leaders
              who are ready to take ownership of their future and make meaningful impact.
            </p>
          </Reveal>
        </div>
        <div className="insight-grid">
          {whyAttend.map((item, index) => (
            <Reveal className="insight-card" delay={index * 0.04} key={item}>
              <CheckCircle2 aria-hidden="true" />
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section gain-section">
        <div className="dual-panel">
          <Reveal className="experience-panel">
            <h3>What participants will gain</h3>
            <ul>
              {participantGains.map((gain) => (
                <li key={gain}>{gain}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="experience-panel" delay={0.08}>
            <h3>Who should attend</h3>
            <ul>
              {attendeeProfiles.map((profile) => (
                <li key={profile}>{profile}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="experts" className="section meet-section" aria-labelledby="meet-title">
        <Reveal className="compact-heading">
          <p>Speakers & Mentors</p>
          <h2 id="meet-title">Meet the cohort, experts and facilitators shaping the WLIMP experience.</h2>
        </Reveal>
        <div className="meet-grid">
          {meetOurSections.map((item, index) => (
            <Reveal className="meet-card" delay={index * 0.06} key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={720}
                height={520}
                sizes="(max-width: 760px) 92vw, 33vw"
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="bio-heading">
          <p>Facilitator Bios</p>
          <h3>Profiles from WLIMP faculty and masterclass sessions.</h3>
        </Reveal>
        <div className="bio-grid">
          {speakerBioImages.map((speaker, index) => (
            <Reveal className="bio-card" delay={Math.min(index * 0.035, 0.22)} key={`${speaker.name}-${speaker.image}`}>
              <Image
                src={speaker.image}
                alt={`${speaker.name} bio flyer`}
                width={900}
                height={900}
                sizes="(max-width: 760px) 92vw, (max-width: 1180px) 30vw, 260px"
              />
              <span>{speaker.name}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section expect-section">
        <div className="section-heading">
          <Reveal>
            <p>What To Expect</p>
            <h2>A powerful and engaging experience designed for real transformation.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="expect-list">
              {whatToExpect.map((item) => (
                <span key={item}>
                  <Network aria-hidden="true" /> {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section impact-community-section">
        <Reveal className="compact-heading">
          <p>Impact & Community</p>
          <h2>WLIMP is building a growing community of young leaders committed to transformation.</h2>
        </Reveal>
        <Reveal className="impact-copy">
          <p>
            The WLIMP Premier Cohort, created by the WeCare Centre for Community Awareness and Empowerment Initiative,
            continues to nurture young leaders committed to personal development, leadership excellence and community
            transformation. The conference expands that impact by bringing together diverse voices, ideas and
            opportunities that inspire action and long-term growth.
          </p>
        </Reveal>
      </section>

      <section className="section faq-section">
        <Reveal className="compact-heading">
          <p>Frequently Asked Questions</p>
          <h2>Useful details before registration opens.</h2>
        </Reveal>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <Reveal className="faq-card" delay={index * 0.04} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="register" className="section register-cta-section">
        <Reveal className="register-cta">
          <p>Register</p>
          <h2>Register now for WLIMP Leadership Conference 2026.</h2>
          <span>
            This is not just another conference. It is a moment to grow, connect and step into leadership.
          </span>
          <Button asChild size="lg">
            <Link
              href={registrationHref}
              className="cta-on-emerald"
              target={isExternalRegistration ? "_blank" : undefined}
              rel={isExternalRegistration ? "noreferrer" : undefined}
            >
              {siteConfig.registrationUrl ? "Open Registration Form" : "Google Form Link Coming Soon"}
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
