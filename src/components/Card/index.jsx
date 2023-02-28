const Card = (props) => {
  return (
    <li key={props.id} className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={props.imagem}
        alt={props.titulo}
      />
      <p className={styles.gallery__description}>{props.titulo}</p>
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
