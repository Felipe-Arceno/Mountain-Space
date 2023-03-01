import styles from "./Populars.module.scss";
import images from "./images.json";

const Populars = () => {
  return (
    <aside className={styles.populars}>
      <h2>Populares</h2>
      <ul className={styles.populars__images}>
        {images.map((img) => {
          return (
            <li key={img.id}>
              <img src={img.path} alt={img.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais Fotos</button>
    </aside>
  );
};

export default Populars;
