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

<div className={styles.lines}>
<div className={styles.line} style={{ left: "10%", transform: "rotate(-18deg)", opacity: 0.5 }} />
<div className={styles.line} style={{ left: "25%", transform: "rotate(-10deg)", opacity: 0.7 }} />
<div className={styles.line} style={{ left: "40%", transform: "rotate(-4deg)", opacity: 1 }} />
<div className={styles.line} style={{ left: "60%", transform: "rotate(4deg)", opacity: 1 }} />
<div className={styles.line} style={{ left: "75%", transform: "rotate(10deg)", opacity: 0.7 }} />
<div className={styles.line} style={{ left: "90%", transform: "rotate(18deg)", opacity: 0.5 }} />
</div>

        <div className={styles.orb}>
          <Orb />
        </div>
      </div>
    </section>
  );
}