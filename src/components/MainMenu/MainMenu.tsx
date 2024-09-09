import Link from "next/link";
import styles from "./MainMenu.module.css";
import Image from "next/image";

export default function MainMenu() {
  return (
    <div className={styles["main-menu"]}>
      <nav>
        <p>Житло</p>
        <ul>
          <li>
            <Image
              src="/icons/rent-house-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Оренда житла в Карпатах"
            />
            <Link href="/">оренда</Link>
          </li>
          <li>
            <Image
              src="/icons/house-sell-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Продажа житла в Карпатах"
            />
            <Link href="/">продаж</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <p>Туризм</p>
        <ul>
          <li>
            <Image
              src="/icons/mountain-road-icon.svg"
              width={16}
              height={16}
              alt="Походи в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">походи</Link>
          </li>
          <li>
            <Image
              src="/icons/locations-icon.svg"
              width={16}
              height={16}
              alt="Місця в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">місця</Link>
          </li>
          <li>
            <Image
              src="/icons/activity-icon.svg"
              width={16}
              height={16}
              alt="Активний відпочинок в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">активний відпочинок</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <p>Relax</p>
        <ul>
          <li>
            <Image
              src="/icons/swimming-icon.svg"
              width={16}
              height={16}
              alt="Басейни в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">басейни</Link>
          </li>
          <li>
            <Image
              src="/icons/spa-icon.svg"
              width={16}
              height={16}
              alt="SPA в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">spa</Link>
          </li>
          <li>
            <Image
              src="/icons/tub-icon.svg"
              width={16}
              height={16}
              alt="Чани в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">чани</Link>
          </li>
          <li>
            <Image
              src="/icons/sauna-icon.svg"
              width={16}
              height={16}
              alt="Сауна в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">сауни</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <p>Харчування</p>
        <ul>
          <li>
            <Image
              src="/icons/eat-icon.svg"
              width={16}
              height={16}
              alt="Поїсти в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">поїсти</Link>
          </li>
          <li>
            <Image
              src="/icons/drink-icon.svg"
              width={16}
              height={16}
              alt="Попити в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">попити</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
