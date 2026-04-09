import styles from "./Orb.module.css";
import logo from "../../assets/logo-t.png";

export default function Orb() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rings}>
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />
      </div>

      <div className={styles.core}>
        <div className={styles.glow} />
        <img src={logo} alt="logo" className={styles.icon} />
      </div>

      <div className={styles.dots}>
        <span className={`${styles.dot} ${styles.dot1}`} />
        <span className={`${styles.dot} ${styles.dot2}`} />
        <span className={`${styles.dot} ${styles.dot3}`} />
        <span className={`${styles.dot} ${styles.dot4}`} />
      </div>
    </div>
  );
}