import type { Metadata } from "next";
import styles from "../site.module.css";

export const metadata: Metadata = {
  title: "Contact — Beam Demo",
  description: "How to get in touch about Beam Demo.",
};

// TODO: replace these placeholders with real details before sharing this page widely.
const contact = {
  email: "hello@example.com",
  location: "Cape Town, South Africa",
  repository: "https://github.com/SavitaShepur/New-Feature",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Contact</span>
        <h1 className={styles.heroTitle}>Get in touch.</h1>
        <p className={styles.heroText}>
          Email is the fastest way to reach us, and it goes straight to a person. Tell us
          what you monitor and roughly how many sites, and we will reply with what the
          dashboard would show for them.
        </p>
        <div className={styles.actions}>
          <a href={`mailto:${contact.email}`} className={styles.buttonPrimary}>
            Email {contact.email}
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Details</h2>
        <div className={styles.prose}>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>
              <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                {contact.email}
              </a>
            </span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Based in</span>
            <span className={styles.contactValue}>{contact.location}</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Source</span>
            <span className={styles.contactValue}>
              <a
                href={contact.repository}
                className={styles.contactLink}
                target="_blank"
                rel="noreferrer"
              >
                This site on GitHub
              </a>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why there is no form here</h2>
        <div className={styles.prose}>
          <p>
            A contact form needs somewhere to send the message. Until that is wired up, a
            form would take someone&rsquo;s message, show a success note and drop it — so
            this page uses a plain email link instead, which cannot fail silently.
          </p>
          <p>
            <strong>To add a real form:</strong> pick a service such as Formspree or
            Resend, add its key as an environment variable in Vercel, and the form can
            post to it. Ask and it can be built.
          </p>
        </div>
      </section>
    </main>
  );
}
