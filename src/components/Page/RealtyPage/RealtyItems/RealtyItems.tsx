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

const RealtyItems = ({
  firstFilter,
  secondFilter,
  thirdFilter,
  forthFilter,
  fifthFilter,
}: any) => {
  //функція для перемішування обєктів
  function shuffleArray(array: DataType[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  //функція для фільтрування обєктів
  function filterArray(array: any, filters: any) {
    return array.filter((item: any) => {
      return Object.keys(filters).every((key) => {
        if (typeof filters[key] === "string") {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }

        return item[key] === filters[key];
      });
    });
  }
  //відфільтровані обєкти по локації
  const firstFilteredArr =firstFilter[1] ? filterArray(realty, firstFilter[1]) : [];
  const secondFilteredArr =secondFilter[1] ? filterArray(realty, secondFilter[1]) : [];
  const thirdFilteredArr =thirdFilter[1] ? filterArray(realty, thirdFilter[1]): [];
  const forthFilteredArr =forthFilter[1] ? filterArray(realty, forthFilter[1]): [];
  const fifthFilteredArr =fifthFilter[1] ? filterArray(realty, fifthFilter[1]): [];

  return (
    <div className={styles.items}>
      {firstFilter && firstFilteredArr.length ? (
        <div className={styles["search-results"]}>
          <h1>{firstFilter[0].title}</h1>
          {shuffleArray(firstFilteredArr).map((item: any) => (
            <RealityItem key={item.id} realtyItem={item} />
          ))}
        </div>
      ) : null}

      {secondFilter && secondFilteredArr.length ? (
        <div className={styles["search-results"]}>
          <h2>{secondFilter[0].title}</h2>
          {shuffleArray(secondFilteredArr).map((item: any) => (
            <RealityItem key={item.id} realtyItem={item} />
          ))}
        </div>
      ) : null}

      {thirdFilter && thirdFilteredArr.length ? (
        <div className={styles["search-results"]}>
          <h2>{thirdFilter[0].title}</h2>
          {shuffleArray(thirdFilteredArr).map((item: any) => (
            <RealityItem key={item.id} realtyItem={item} />
          ))}
        </div>
      ) : null}

      {forthFilter && forthFilteredArr.length ? (
        <div className={styles["search-results"]}>
          <h2>{forthFilter[0].title}</h2>
          {shuffleArray(forthFilteredArr).map((item: any) => (
            <RealityItem key={item.id} realtyItem={item} />
          ))}
        </div>
      ) : null}

      {fifthFilter && fifthFilteredArr.length ? (
        <div className={styles["search-results"]}>
          <h2>{fifthFilter[0].title}</h2>
          {shuffleArray(fifthFilteredArr).map((item: any) => (
            <RealityItem key={item.id} realtyItem={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default RealtyItems;
