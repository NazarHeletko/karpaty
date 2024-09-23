import RealityItem from "./RealityItem/RealityItem";
import styles from "./RealtyItems.module.css";



type DataType = {
  "id": number
  "oblast": string,
  "raion": string,
  "city": string,
  "name": string,
  "price": string,
  "people-count": number,
  "title-image": string
};

interface MyPageProps {
  realtyData: DataType[];
}

const RealtyItems = ({realtyData}:MyPageProps) => {
  console.log(typeof realtyData)
  return (
    <div className={styles.items}>
      <div className={styles["search-results"]}>
        <h1>Житло у Карпатах</h1>

        {
          realtyData.map(item => <RealityItem key={item.id} realtyItem={item}/>)
        }

        

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
