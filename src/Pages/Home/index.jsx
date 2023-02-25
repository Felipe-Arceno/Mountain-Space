import Banner from "../../components/Banner";
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
    </>
  );
};

export default Home;
