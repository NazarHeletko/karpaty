import RealityItem from "./RealityItem/RealityItem";
import styles from "./RealtyItems.module.css";
import realty from "@/data/realty.json";

type DataType = {
  id: number;
  oblast: string;
  raion: string;
  city: string;
  name: string;
  price: string;
  "people-count": number;
  "title-image": string;
};



const RealtyItems = ({ firstFilter, secondFilter, thirdFilter, forthFilter, fifthFilter }: any) => {
  function shuffleArray(array: DataType[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }



  function filterArray(array: any, filters: any) {
    return array.filter((item: any) => {
      return Object.keys(filters).every((key) => {
        // Якщо значення фільтру об'єкта - це підрядок, перевіряємо часткову відповідність (для рядків)
        if (typeof filters[key] === "string") {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }
        // Якщо значення фільтру - число, порівнюємо його прямо
        return item[key] === filters[key];
      });
    });
  }

  return (
    <div className={styles.items}>
      <div className={styles["search-results"]}>
        <h1>{firstFilter[0].title}</h1>
        {shuffleArray(filterArray(realty, firstFilter[1])).map((item: any) => (
          <RealityItem key={item.id} realtyItem={item} />
        ))}
      </div>
      <div className={styles["search-results"]}>
        <h1>{secondFilter[0].title}</h1>
        {shuffleArray(filterArray(realty, secondFilter[1])).map((item: any) => (
          <RealityItem key={item.id} realtyItem={item} />
        ))}
      </div>
      <div className={styles["search-results"]}>
        <h1>{thirdFilter[0].title}</h1>
        {shuffleArray(filterArray(realty, thirdFilter[1])).map((item: any) => (
          <RealityItem key={item.id} realtyItem={item} />
        ))}
      </div>
      <div className={styles["search-results"]}>
        <h1>{forthFilter[0].title}</h1>
        {shuffleArray(filterArray(realty, forthFilter[1])).map((item: any) => (
          <RealityItem key={item.id} realtyItem={item} />
        ))}
      </div>
      <div className={styles["search-results"]}>
        <h1>{fifthFilter[0].title}</h1>
        {shuffleArray(filterArray(realty, fifthFilter[1])).map((item: any) => (
          <RealityItem key={item.id} realtyItem={item} />
        ))}
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
