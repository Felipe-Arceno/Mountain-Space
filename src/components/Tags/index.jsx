import styles from "./Tags.module.scss";

const Tags = () => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tag:</p>
      <ul className={styles.tags__list}>
        <li>Estrelas</li>
        <li>Galáxias</li>
        <li>Luas</li>
        <li>Planetas</li>
      </ul>
    </div>
  );
};

export default Tags;
