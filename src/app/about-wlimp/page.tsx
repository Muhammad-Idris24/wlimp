import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WLIMP",
  description: "About the WeCare Leadership and Impact Mentorship Programme.",
};

export default function AboutWlimpPage() {
  return (
    <main className="page-shell blank-page">
      <section className="section">
        <div className="compact-heading">
          <p>About WLIMP</p>
          <h1>About WLIMP</h1>
        </div>
      </section>
    </main>
  );
}
