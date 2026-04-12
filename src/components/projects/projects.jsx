import styles from "./projects.module.css";
import { BackgroundGlass } from "../shared/background-glass/background-glass";

import LinktreeImg from "../../assets/linktree.png";
import EcommerceImg from "../../assets/ecommerce.png";
import ClickIcon from "../../assets/click.png"; 

const projects = [
  {
    id: 1,
    category: "Featured Project",
    name: "Linktree Clone",
    description:
      "A responsive landing page inspired by Linktree, built to organize personal links in a clean and accessible interface. It focuses on clarity, hierarchy, and a user-friendly visual experience.",
    img: LinktreeImg,
  },
  {
    id: 2,
    category: "Featured Project",
    name: "Ecommerce App",
    description:
      "A modern ecommerce interface focused on product browsing, clean layouts, and a user-friendly shopping experience. The design emphasizes clarity, navigation, and visual consistency across the interface.",
    img: EcommerceImg,
  },
];

export function Projects() {
  return (
    <section className={styles.container}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`${styles.projectCard} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.left}>
            <h5>{project.category}</h5>
            <h2>{project.name}</h2>
            <BackgroundGlass content={project.description} />

            <div className={styles.icons}>
              <img src={ClickIcon} alt="decorative icon" />
              <img src={ClickIcon} alt="decorative icon" /
              >
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.glow}></div>
            <img src={project.img} alt={project.name} />
          </div>
        </div>
      ))}
    </section>
  );
}
