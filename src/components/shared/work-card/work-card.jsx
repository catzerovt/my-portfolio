import styles from "./work-card.module.css";

export const WorkCard = ({ img, title, description }) => {
  return (
    <div className={styles.container}>
      <img src={img.src} alt={img.alt} />
      <div className={styles.right__side}>
        <h4>{title}</h4>
        <p>{description}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};
