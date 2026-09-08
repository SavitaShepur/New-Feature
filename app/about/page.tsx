import type { Metadata } from "next";
import Link from "next/link";
import styles from "../site.module.css";

export const metadata: Metadata = {
  title: "About — Beam Demo",
  description: "What Beam Demo is, how the dashboard is built, and how changes ship.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>About</span>
        <h1 className={styles.heroTitle}>A small dashboard, shipped in the open.</h1>
        <p className={styles.heroText}>
          Beam Demo is a portfolio overview for solar sites: generation, grid import,
          savings and status, on one page. It is also a working test bed for a way of
          building software where a change is described in plain English and arrives in
          production the same day.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How a change reaches production</h2>
        <p className={styles.sectionLead}>
          Every change to this site, including the page you are reading, went through
          these steps.
        </p>
        <ol className={styles.steps}>
          <li>
            Someone attaches a screenshot and <strong>describes the change</strong> they
            want in ordinary language.
          </li>
          <li>
            Claude makes the change on a branch and <strong>opens a pull request</strong>{" "}
            explaining what it did and why.
          </li>
          <li>
            CI runs <strong>typecheck, lint and build</strong>, and a preview deployment
            goes up on the pull request.
          </li>
          <li>
            When the checks pass the pull request <strong>merges automatically</strong>{" "}
            and the change goes live.
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How it is built</h2>
        <div className={styles.prose}>
          <p>
            Next.js 14 with the App Router and TypeScript, styled with plain CSS modules
            and a small set of colour tokens. No component library, no CSS framework and
            no analytics.
          </p>
          <p>
            The site numbers come from a single data file rather than a live feed, so the
            figures on the dashboard are illustrative. The layout, the calculations and
            the online/offline logic are real.
          </p>
        </div>
      </section>

      {/* TODO: replace with real company details — who runs Beam, where, since when. */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who is behind it</h2>
        <div className={styles.prose}>
          <p>
            This section is a placeholder. Add the team, the story and anything a visitor
            needs in order to trust the numbers on the dashboard.
          </p>
          <p>
            Questions in the meantime go to the <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
