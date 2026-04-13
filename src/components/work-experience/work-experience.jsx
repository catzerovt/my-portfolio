import styles from "./work-experience.module.css";

import { WorkCard } from "../shared/work-card/work-card";


import SpecialSave from "../../assets/custom/special-save.png";
import Bubble from "../../assets/custom/bubble.png";
import Cup from "../../assets/custom/cup.png";
import Gotero from "../../assets/custom/gotero.png";



const workCards = [
  {
    id: 1,
    img: { src: SpecialSave, alt: "this is a custom image" },
    title: "Frontend Development",
    description:
      "Built multiple web applications using HTML, CSS, JavaScript, and React, focusing on structure, layout, and usability.",
  },
  {
    id: 2,
    img: { src: Bubble, alt: "this is a custom image" },
    title: "Content Creator • Streamer",
    description:
      "Built and maintained an online community for 4+ years, developing communication, consistency, and audience engagement skills.",
  },
  {
    id: 3,
    img: { src: Cup, alt: "this is a custom image" },
    title: "3D Avatar & Animation",
    description:
      "Created 3D avatars and animations, exploring visual design, creativity, and digital expression.",
  },
  {
    id: 4,
    img: { src: Gotero, alt: "this is a custom image" },
    title: "English Teacher",
    description:
      "Taught English to different learners, strengthening communication, adaptability, and clarity.",
  },
];

export function WorkExperience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.workTitle}>Experience & Creative Work</h2>

<div className={styles.cardsWrapper}>
  <div className={styles.cards__container}>
    {workCards.map((card) => (
      <WorkCard
        img={card.img}
        title={card.title}
        description={card.description}
        key={card.id}
      />
    ))}
  </div>

  <div className={styles.glowCenter}></div>
</div>
    </div>
  );
}