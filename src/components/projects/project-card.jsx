import styles from "./project-card.module.css";
import ClickIcon from "../../assets/click.png";


export function ProjectCard({
  eyebrow,
  title,
  description,
  image,
  alt,
  reverse,
}) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.visual}>
        <div className={styles.imageBg}></div>
        <div className={styles.glow}></div>
        <img src={image} alt={alt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.descriptionBox}>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.icons}>
          <img src={ClickIcon} alt="decorative icon" />
          <img src={ClickIcon} alt="decorative icon" />
          
        </div>
      </div>
    </article>
  );
}
