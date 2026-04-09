import styles from "./tools.module.css";
import Orb from "./Orb";
import SocialIcons from "./SocialIcons";

export function Tools() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        

        <p className={styles.tagline}>
          I'm currently looking to join a{" "}
          <span className={styles.highlight}>cross-functional</span> team
        </p>

        <p className={styles.sub}>
          that values improving people's lives through accessible design
        </p>

        <div className={styles.social}>
          <SocialIcons />
        </div>

        <div className={styles.orb}>
          <Orb />
        </div>
      </div>
    </section>
  );
}