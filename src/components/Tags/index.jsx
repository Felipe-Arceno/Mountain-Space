import styles from "./Tags.module.scss";
import images from "../Gallery/images.json";

const Tags = (props) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tag:</p>
      <ul className={styles.tags__list}>
        {props.tags.map((tg) => {
          return (
            <li key={tg} onClick={() => props.filtraFotos(tg)}>
              {tg}
            </li>
          );
        })}
        <li onClick={() => props.setItens(images)}>Todas</li>
      </ul>
    </div>
  );
};

export default Tags;
