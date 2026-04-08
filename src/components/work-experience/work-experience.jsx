import styles from "./work-experience.module.css";

import { WorkCard } from "../shared/work-card/work-card";

// Images
import SpecialSave from "../../assets/custom/special-save.png";
import Bubble from "../../assets/custom/bubble.png";
import Cup from "../../assets/custom/cup.png";
import Gotero from "../../assets/custom/gotero.png";



const workCards = [
  {
    id: 1,
    img: { src: SpecialSave, alt: "this is a custom image" },
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    id: 2,
    img: { src: Bubble, alt: "this is a custom image" },
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    id: 3,
    img: { src: Cup, alt: "this is a custom image" },
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
  {
    id: 4,
    img: { src: Gotero, alt: "this is a custom image" },
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
  },
];

export function WorkExperience() {
  return (
    <div className={styles.container}>
      <h2>Work Experience</h2>

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