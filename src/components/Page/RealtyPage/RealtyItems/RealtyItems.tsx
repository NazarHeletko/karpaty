import RealityItem from "./RealityItem/RealityItem";
import styles from "./RealtyItems.module.css";
import realty from "@/data/realty.json";


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
  realtyDataOne: DataType[];
}

const RealtyItems = () => {
  function shuffleArray(array: DataType[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }
 
  const randomizeRealtyArray = shuffleArray(realty);

  return (
    <div className={styles.items}>
      <div className={styles["search-results"]}>
        <h1>Житло у Карпатах</h1>

        {
          randomizeRealtyArray.map(item => <RealityItem key={item.id} realtyItem={item}/>)
        }

        

      </div>
      {/* <div className={styles["search-recomendations-region"]}>
        <h2>Інші варіанти де поселитися в Карпатах</h2> 
        <RealityItem />
        <RealityItem />
        <RealityItem />
      </div> */}
      {/* <div className={styles["search-recomendations-all"]}>
        <h2>Всі варіанти де поселитися в Карпатах</h2>
        <RealityItem />
        <RealityItem />
        <RealityItem />
      </div> */}
    </div>
  );
};

export default RealtyItems;
