import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { fellowBioImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "WLIMP Fellows",
  description: "Meet the WLIMP 2026 fellows selected for the WeCare Leadership and Impact Mentorship Programme.",
};

export default function FellowsPage() {
  return (
    <main className="page-shell">
      <section className="section fellows-hero">
        <Reveal className="compact-heading">
          <p>WLIMP Fellows</p>
          <h1>Meet the WLIMP 2026 Fellows.</h1>
        </Reveal>
        <Reveal className="impact-copy">
          <p>
            The WLIMP 2026 cohort brings together emerging young leaders committed to personal development,
            leadership excellence and community transformation.
          </p>
        </Reveal>
      </section>

      <section className="section fellows-gallery-section">
        <div className="bio-grid fellows-grid">
          {fellowBioImages.map((fellow, index) => (
            <Reveal className="bio-card" delay={Math.min(index * 0.02, 0.18)} key={`${fellow.name}-${fellow.image}`}>
              <Image
                src={fellow.image}
                alt={`${fellow.name} bio flyer`}
                width={900}
                height={900}
                sizes="(max-width: 760px) 92vw, (max-width: 1180px) 30vw, 260px"
              />
              <span>{fellow.name}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
