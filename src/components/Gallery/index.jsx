import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import images from "./images.json";
import open from "./open.png";
import favorito from "./favorito.png";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {images.map((img) => {
          return (
            <li key={img.id} className={styles.gallery__card}>
              <img
                className={styles.gallery__image}
                src={img.imagem}
                alt={img.titulo}
              />
              <p className={styles.gallery__description}>{img.titulo}</p>
              <div>
                <p>{img.creditos}</p>
                <span>
                  <img src={favorito} alt="Icone coração de curtir" />
                  <img src={open} alt="Icone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
