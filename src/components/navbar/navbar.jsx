import styles from "./navbar.module.css";
import logo from "../../assets/logo-t.png";

const links = [
  { id: 1, to: "/home", label: "Home" },
  { id: 2, to: "/about", label: "About" },
  { id: 3, to: "/lab", label: "Lab" },
];

export function NavBar() {
  return (
    <nav className={styles.container}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}