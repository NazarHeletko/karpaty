import Image from "next/image";
import styles from "./RealityItem.module.css";

const RealityItem = ({ realtyItem }: any) => {
  return (
    <div className={styles["item-wrapper"]}>
      <div className={styles.item}>
        <Image
          src={realtyItem["title-image"]}
          fill
          alt="house"
          style={{ objectFit: "cover" }}
        />
        <div className={styles["short-info"]}>
          <div className={styles.price}>
            <span>{realtyItem.price} &#8372;</span>
          </div>
          <div className={styles["right-info"]}>
            <div className={styles.location}>
              <Image
                src="/icons/location-icon.svg"
                height={16}
                width={16}
                alt="location"
              />
              <span>{realtyItem.cityName}</span>
            </div>
            <div className={styles.persons}>
              <Image
                src="/icons/person-icon.svg"
                height={16}
                width={16}
                alt="location"
              />
              <span>{realtyItem["people-count"]}</span>
            </div>
          </div>
        </div>
        <div className={styles["reality-title"]}>
          <p>{realtyItem.name}</p>
        </div>
        <div className={styles.favorite}>
          <Image
            src="/icons/favorite-icon.svg"
            width={16}
            height={16}
            alt="Улюблена нерухомість"
          />
          <span>зберегти</span>
        </div>
        <div className={styles["details-wrapper"]}>
          <div className={styles.details}>
            <span>детальніше</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealityItem;
