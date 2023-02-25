import logo from "./Logo.png";
import search from "./Search.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Site" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="Ícone Lupa" />
      </div>
    </header>
  );
};

export default Navbar;
