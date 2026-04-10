import styles from "./SocialIcons.module.css";
import {
  siReact,
  siJavascript,
  siCss,
  siFigma,
  siGit,
} from "simple-icons";

const ROW_1 = [
  { label: "Figma", color: "#F24E1E", icon: siFigma },
  { label: "React", color: "#61DAFB", icon: siReact },
  { label: "JavaScript", color: "#F7DF1E", icon: siJavascript },
  { label: "CSS", color: "#1572B6", icon: siCss },
];

const ROW_2 = [
  { label: "XD", color: "#FF2BC2", letter: "Xd" },
  { label: "Gatsby", color: "#663399", letter: "G" },
  { label: "Illustrator", color: "#FF9A00", letter: "Ai" },
  { label: "Git", color: "#F05032", letter: "Git" },
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
      <div className={styles.row}>
        {ROW_1.map((icon) => (
          <IconBubble key={icon.label} {...icon} />
        ))}
      </div>

      <div className={styles.row}>
        {ROW_2.map((icon) => (
          <IconBubble key={icon.label} {...icon} />
        ))}
      </div>
    </div>
  );
}