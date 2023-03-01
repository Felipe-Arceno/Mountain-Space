import styles from "./Card.module.scss";
import open from "./open.png";
import favorito from "./favorito.png";

const Card = (props) => {
  return (
    <li key={props.id} className={styles.card}>
      <img
        className={styles.card__image}
        src={props.imagem}
        alt={props.titulo}
      />
      <p className={styles.card__description}>{props.titulo}</p>
      <div>
        <p>{props.creditos}</p>
        <span>
          <img src={favorito} alt="Icone coração de curtir" />
          <img src={open} alt="Icone de abrir modal" />
        </span>
      </div>
    </li>
  );
};
export default Card;
