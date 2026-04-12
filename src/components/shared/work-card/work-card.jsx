import styles from "./work-card.module.css";

export const WorkCard = ({ img, title, description }) => {
  return (
    <article className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={img.src} alt={img.alt} className={styles.image} />
      </div>

      <div className={styles.right__side}>
        <h4>{title}</h4>
        <p>{description}</p>
        <button type="button">Learn More</button>
      </div>
    </article>
  );
};