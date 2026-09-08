import { kpis, sites } from "@/lib/sites";
import styles from "./dashboard.module.css";

// Render on every request so "Last updated" shows the current date rather than
// the date the site was last deployed.
export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("en-ZA", {
  dateStyle: "long",
  timeZone: "Africa/Johannesburg",
});

export default function Home() {
  const lastUpdated = dateFormatter.format(new Date());

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Beam Demo</h1>
        <span className={styles.subtitle}>Portfolio overview</span>
      </header>

      <p className={styles.lastUpdated}>Last updated {lastUpdated}</p>

      <section className={styles.kpis}>
        <div className={styles.card}>
          <span className={styles.label}>Solar today</span>
          <strong className={styles.value}>{kpis.solarTodayKwh} kWh</strong>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Grid import</span>
          <strong className={styles.value}>{kpis.gridImportKwh} kWh</strong>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Savings</span>
          <strong className={`${styles.value} ${styles.valuePositive}`}>
            R {kpis.savingsRand}
          </strong>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Sites online</span>
          <strong className={styles.value}>
            {sites.filter((s) => s.status === "online").length} / {sites.length}
          </strong>
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Sites</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Site</th>
              <th>City</th>
              <th>Capacity</th>
              <th>Today</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site.name}>
                <td>{site.name}</td>
                <td>{site.city}</td>
                <td>{site.capacityKw} kW</td>
                <td>{site.todayKwh} kWh</td>
                <td>
                  <span className={site.status === "online" ? styles.badgeOk : styles.badgeBad}>
                    {site.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
