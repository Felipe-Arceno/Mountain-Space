import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import images from "./images.json";
import Card from "../Card";
import { useState } from "react";

const Gallery = () => {
  const [itens, setItens] = useState(images);
  const tags = [...new Set(images.map((img) => img.tag))];

  const filtraFotos = (tag) => {
    const newImages = images.filter((img) => {
      return img.tag === tag;
    });

    setItens(newImages);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela Galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
      <ul className={styles.gallery__cards}>
        {itens.map((img) => {
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
