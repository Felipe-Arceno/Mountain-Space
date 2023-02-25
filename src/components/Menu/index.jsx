import { BiHomeAlt } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <a className={styles.menu__icon}>
            <BiHomeAlt color="white" size={20} />
          </a>

          <a className={styles.menu__link} href="/">
            Início
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__icon}>
            <BiLike color="white" size={20} />
          </a>
          <a className={styles.menu__link} href="/">
            Mais Curtidas
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__icon}>
            <FaEye color="white" size={20} />
          </a>
          <a className={styles.menu__link} href="/">
            Mais Vistas
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__icon}>
            <BsSunFill color="white" size={20} />
          </a>
          <a className={styles.menu__link} href="/">
            Novas
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__icon}>
            <HiOutlineLightBulb color="white" size={20} />
          </a>
          <a className={styles.menu__link} href="/">
            Surpreenda-me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
