import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import images from "./images.json";
import Card from "../Card";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {images.map((img) => {
          return (
            <Card
              id={img.id}
              imagem={img.imagem}
              titulo={img.titulo}
              creditos={img.creditos}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
