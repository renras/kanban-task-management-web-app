import styles from "./Home.module.scss";
import Circle from "./Circle/Circle";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.columnHeader}>
          <Circle backgroundColor="#49C4E5" />
          TODO
        </h2>
      </div>
      <div>
        <h2 className={styles.columnHeader}>
          <Circle backgroundColor="#8471F2" />
          DOING
        </h2>
      </div>
      <div>
        <h2 className={styles.columnHeader}>
          <Circle backgroundColor="#67E2AE" />
          DONE
        </h2>
      </div>
    </div>
  );
};

export default Home;
