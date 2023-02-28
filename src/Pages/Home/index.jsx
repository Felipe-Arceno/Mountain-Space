import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.section}>
          <Menu />
          <Banner />
        </section>
      </main>
      <div className={styles.gallery}>
        <Gallery />
      </div>
      <Footer />
    </>
  );
};

export default Home;
