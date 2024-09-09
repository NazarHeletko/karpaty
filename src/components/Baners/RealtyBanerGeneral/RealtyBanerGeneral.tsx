import Link from "next/link";
import styles from "./RealtyBanerGeneral.module.css";
import { Caveat } from "next/font/google";
import Image from "next/image";
const caveat = Caveat({ subsets: ["cyrillic"] });

export default function RealtyBaner() {
  return (
    <Link href="/realty">
      <div className={styles["realty-baner"]}>
        <Image
          priority
          src="/realty-baner.png"
          style={{objectFit: "cover"}}
          fill
          alt="Нерухомість банер"
        />
        <div className={`${styles.title} ${caveat.className}`}>
          <p>
            Де поселитися?
            <br /> Подивіться варіанти
            <Image
              priority
              src="/icons/click-icon.svg"
              height={32}
              width={32}
              alt="clik icon"
            />
          </p>
        </div>
      </div>
    </Link>
  );
}
