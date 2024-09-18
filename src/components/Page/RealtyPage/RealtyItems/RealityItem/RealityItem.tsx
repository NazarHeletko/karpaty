import Image from "next/image";
import styles from "./RealityItem.module.css";

const RealityItem = () => {
  return (
    <div className={styles["item-wrapper"]}>
      <div className={styles.item}>
        <Image
          src="/baners/house-sidebar-baner-1.jpg"
          fill
          alt="house"
          style={{ objectFit: "cover" }}
        />
        <div className={styles["short-info"]}>
          <div className={styles.price}>
            <span>3000 &#8372;</span>
          </div>
          <div className={styles["right-info"]}>
            <div className={styles.location}>
              <Image
                src="/icons/location-icon.svg"
                height={16}
                width={16}
                alt="location"
              />
              <span>Верховина</span>
            </div>
            <div className={styles.persons}>
              <Image
                src="/icons/person-icon.svg"
                height={16}
                width={16}
                alt="location"
              />
              <span>6</span>
            </div>
          </div>
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
