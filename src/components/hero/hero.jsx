import styles from "./hero.module.css";
import { HeroArrow } from "../../assets/svgs/hero-arrow";
import { GradientElement } from "../shared/gradient-element";
import memoji from "../../assets/tania-2.png";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.left__side}>
        <img src={memoji} alt="Tania memoji" className={styles.memoji} />
        <div className={styles.words}>
          <HeroArrow top={-20} right={-10} />
          <p>
            Hello! I Am <span>Tania Pastor</span>
          </p>
        </div>

        <GradientElement />
      </div>

      <div className={styles.right__side}>
        <p>A Developer who</p>

        <p>
          Judges a book by it's <span>cover</span> ...
        </p>

        <p>Because if the cover does not impress you what else can?</p>
      </div>
    </section>
  );
}
