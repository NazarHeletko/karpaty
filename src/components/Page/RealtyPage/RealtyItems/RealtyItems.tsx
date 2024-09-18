import RealityItem from "./RealityItem/RealityItem";
import styles from "./RealtyItems.module.css";

type Props = {
  oblastItems: Array<object>
}


const RealtyItems = ({oblastItems}:Props) => {
  console.log(oblastItems)
  return (
    <div className={styles.items}>
      <div className={styles["search-results"]}>
        <h1>Житло у Карпатах</h1>
        <RealityItem />
        <RealityItem />
        <RealityItem />
        <RealityItem />
        <RealityItem />
      </div>
      {/* <div className={styles["search-recomendations-region"]}>
        <h2>Інші варіанти де поселитися в Карпатах</h2>
        <RealityItem />
        <RealityItem />
        <RealityItem />
        <RealityItem />
      </div>
      <div className={styles["search-recomendations-all"]}>
        <h2>Всі варіанти де поселитися в Карпатах</h2>
        <RealityItem />
        <RealityItem />
        <RealityItem />
      </div> */}
    </div>
  );
};

export default RealtyItems;
