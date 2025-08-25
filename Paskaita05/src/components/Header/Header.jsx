import styles from "./Header.module.css";

function Header({ links }) {
  return (
    <header className={styles.header}>
      <h3 className={styles.heading}>HP Characters</h3>
      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link.link} className={styles.link} href={link.link}>
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
