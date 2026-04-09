import styles from "./SocialIcons.module.css";

const ROW_1 = [
  { label: "Figma", color: "#F24E1E", letter: "Fi" },
  { label: "React", color: "#61DAFB", letter: "Re" },
  { label: "C", color: "#659AD2", letter: "C" },
  { label: "Redux", color: "#764ABC", letter: "Rx" },
  { label: "JavaScript", color: "#F7DF1E", letter: "JS" },
  { label: "CSS", color: "#1572B6", letter: "CSS" },
];

const ROW_2 = [
  { label: "XD", color: "#FF2BC2", letter: "Xd" },
  { label: "Gatsby", color: "#663399", letter: "G" },
  { label: "Illustrator", color: "#FF9A00", letter: "Ai" },
  { label: "Git", color: "#F05032", letter: "Git" },
];

function IconBubble({ label, color, letter }) {
  return (
    <div
      className={styles.bubble}
      title={label}
      style={{ "--icon-color": color }}
    >
      <span className={styles.letter}>{letter}</span>
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