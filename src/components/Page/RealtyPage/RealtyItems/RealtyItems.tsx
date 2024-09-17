import RealityItem from "./RealityItem/RealityItem";
import styles from "./RealtyItems.module.css";

const RealtyItems = () => {
  return (
    <div className={styles.items}>
      <div className={styles["search-results"]}>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
        <RealityItem/>
      </div>
      <div className={styles["search-recomendations-region"]}>

      </div>
      <div className={styles["search-recomendations-all"]}>

      </div>
    </div>
  );
};

export default RealtyItems;
