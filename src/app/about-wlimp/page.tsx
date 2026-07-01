import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WLIMP",
  description: "About the WeCare Leadership and Impact Mentorship Programme.",
};

export default function AboutWlimpPage() {
  return (
    <main className="page-shell about-page">
      <section className="section about-page-hero">
        <div className="compact-heading about-page-heading">
          <p>About WLIMP</p>
          <h1>Preparing the next generation of leaders for an evolving world.</h1>
        </div>
      </section>
      <section className="section about-page-content-section">
        <article className="about-page-content">
          <p>
            WECARE Leadership and Impact Mentorship Programme (WLIMP) is a youth-focused initiative committed to
            preparing the next generation of leaders for success in an ever-evolving world. Through mentorship,
            leadership development, career readiness, and capacity-building programmes, WLIMP empowers young men and
            women with the knowledge, skills, and networks they need to thrive.
          </p>
          <p>
            At WLIMP, we believe that talent is everywhere, but opportunity is not. Our mission is to bridge that gap by
            creating transformative learning experiences that equip young people to lead with purpose, excel in their
            careers, and drive meaningful change in their communities.
          </p>
          <p>
            The WLIMP Leadership Conference is one of our flagship initiatives, bringing together students, graduates,
            young professionals, entrepreneurs, mentors, and industry leaders for a day of learning, inspiration, and
            connection. More than just an event, it is a platform where ideas are shared, relationships are built, and
            futures are shaped.
          </p>
          <p>
            Whether you&apos;re preparing to enter the workforce, looking to grow as a leader, or seeking opportunities to
            make a greater impact, WLIMP provides the environment, community, and support to help you take the next step
            with confidence.
          </p>
        </article>
      </section>
    </main>
  );
}
