import styles from "./SocialIcons.module.css";
import {
  siReact,
  siJavascript,
  siFigma,
  
} from "simple-icons";

import { siGit } from "simple-icons";
import { siHtml5 } from "simple-icons";
import { siPython } from "simple-icons";
import { siTypescript } from "simple-icons";
import { siTailwindcss } from "simple-icons";
import { siVite, siGithub } from "simple-icons";




const ROW_1 = [
  { label: "Figma", color: "#F24E1E", icon: siFigma },
  { label: "React", color: "#61DAFB", icon: siReact },
  { label: "JavaScript", color: "#F7DF1E", icon: siJavascript },
  { label: "TypeScript", color: "#3178C6", icon: siTypescript },
  { label: "Vite", color: "#646CFF", icon: siVite },
];

const ROW_2 = [
  { label: "HTML", color: "#E34F26", icon: siHtml5 },
  { label: "Python", color: "#3776AB", icon: siPython },
  { label: "Git", color: "#F05032", icon: siGit },
  { label: "Tailwind", color: "#06B6D4", icon: siTailwindcss },
  { label: "GitHub", color: "#9CA3AF", icon: siGithub },
];


function IconBubble({ label, color, icon }) {
  return (
    <div
      className={styles.bubble}
      title={label}
      style={{ "--icon-color": color }}
    >
      {icon ? (
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <path d={icon.path} />
        </svg>
      ) : (
        <span className={styles.letter}>{label}</span>
      )}
    </div>
  );
}
export default function SocialIcons() {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.rowTop}`}>
        {ROW_1.map((icon) => (
          <IconBubble key={icon.label} {...icon} />
        ))}
      </div>

      <div className={`${styles.row} ${styles.rowBottom}`}>
        {ROW_2.map((icon) => (
          <IconBubble key={icon.label} {...icon} />
        ))}
      </div>
    </div>
  );
}