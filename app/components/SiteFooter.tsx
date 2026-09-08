import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.note}>
          Beam Demo — a test bed for the screenshot-to-production flow.
        </span>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
