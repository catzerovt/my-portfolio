import styles from "./contact.module.css";
import { siX, siInstagram, siGithub } from "simple-icons";
import { Form } from "../form/form";

export function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.footerGlow}></div>

      <div className={styles.left}>
        <h2>Let’s connect</h2>

        <p>
          I design with intention — creating experiences that feel clear,
          thoughtful, and genuinely useful.
        </p>

        <p className={styles.highlight}>
          Always open to building things that make a difference.
        </p>

        <a href="mailto:catzero.dev@gmail.com" className={styles.email}>
          catzero.dev@gmail.com
        </a>

        <div className={styles.socials}>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d={siX.path} />
            </svg>
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d={siInstagram.path} />
            </svg>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d={siGithub.path} />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <Form />
      </div>
    </section>
  );
}