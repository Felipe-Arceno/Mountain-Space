import styles from "./Banner.module.scss";
import banner from "./Banner.jpg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa</h1>
      <img src={banner} alt="Montanha Kanchenjunga" />
    </div>
  );
};

export default Banner;
