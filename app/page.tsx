import Link from "next/link";
import { kpis, sites } from "@/lib/sites";
import styles from "./site.module.css";

const features = [
  {
    title: "One view of every site",
    text: "Solar output, grid import and status for the whole portfolio on a single page, instead of one tab per inverter.",
  },
  {
    title: "Savings in rand, not kilowatt-hours",
    text: "Generation is converted to the number people actually ask about, so the value of the system is legible to anyone.",
  },
  {
    title: "Offline sites surface immediately",
    text: "A site that stops reporting shows as offline in the table rather than quietly reading zero for a week.",
  },
];

export default function HomePage() {
  const onlineCount = sites.filter((site) => site.status === "online").length;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Portfolio monitoring</span>
        <h1 className={styles.heroTitle}>
          Every solar site you run, on one page.
        </h1>
        <p className={styles.heroText}>
          Beam Demo pulls generation, grid import and savings across the portfolio into a
          single dashboard, so the question &ldquo;how did we do today?&rdquo; takes one look
          rather than one afternoon.
        </p>
        <div className={styles.actions}>
          <Link href="/dashboard" className={styles.buttonPrimary}>
            Open the dashboard
          </Link>
          <Link href="/contact" className={styles.buttonSecondary}>
            Get in touch
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Today across the portfolio</h2>
        <p className={styles.sectionLead}>
          These are the live figures from the dashboard, not a screenshot of it.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <strong className={styles.stat}>{kpis.solarTodayKwh} kWh</strong>
            <span className={styles.statLabel}>Solar generated today</span>
          </div>
          <div className={styles.card}>
            <strong className={styles.stat}>R {kpis.savingsRand}</strong>
            <span className={styles.statLabel}>Savings today</span>
          </div>
          <div className={styles.card}>
            <strong className={styles.stat}>
              {onlineCount} / {sites.length}
            </strong>
            <span className={styles.statLabel}>Sites reporting</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What it does</h2>
        <p className={styles.sectionLead}>
          Three things, done plainly. No configuration, no per-site setup.
        </p>
        <div className={styles.grid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>See it with your own numbers</h2>
        <p className={styles.sectionLead}>
          The dashboard runs on demo data today. Tell us what you monitor and we will
          walk through what it would look like for your sites.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.buttonPrimary}>
            Contact us
          </Link>
          <Link href="/about" className={styles.buttonSecondary}>
            How this was built
          </Link>
        </div>
      </section>
    </main>
  );
}
