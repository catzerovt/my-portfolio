import styles from "./biography.module.css";

export function Biography() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        I'm a Fullstack Developer in progress
        <br />
        
      </h2>

      <p className={styles.subtitle}>
        Currently learning Fullstack Development at TECSUP Bootcamp
      </p>

      <p className={styles.description}>
        I enjoy designing and developing digital products that solve real
        problems. I'm especially drawn to UI/UX, where I can create experiences
        that feel simple, intentional, and human.
      </p>
    </section>
  );
}