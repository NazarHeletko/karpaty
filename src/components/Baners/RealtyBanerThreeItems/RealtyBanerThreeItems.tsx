import Image from "next/image";
import styles from "./RealtyBanerThreeItems.module.css";
import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["cyrillic"] });

type Props = {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
  src3: string;
  alt3: string;
};

const RealtyBanerThreeItems = ({
  src1,
  alt1,
  src2,
  alt2,
  src3,
  alt3,
}: Props) => {
  return (
    <div className={`${styles["wrapper"]} ${caveat.className}`}>
      <div className={styles.item}>
        <Image src={src1} fill alt={alt1} style={{objectFit: "cover"}}/>
        <span >Будиночки</span>
      </div>
      <div className={styles.item}>
        <Image src={src2} fill alt={alt2} style={{objectFit: "cover"}}/>
        <span>Глемпінги</span>
      </div>
      <div className={styles.item}>
        <Image src={src3} fill alt={alt3} style={{objectFit: "cover"}}/>
        <span>Готелі</span>
      </div>
    </div>
  );
};

export default RealtyBanerThreeItems;
