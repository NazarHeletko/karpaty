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
          <li>
            <Image
              src="/icons/house-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Будиночки в Карпатах"
            />
            <Link href="/">будиночки</Link>
          </li>
          <li>
            <Image
              src="/icons/cottage-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Котеджі в Карпатах"
            />
            <Link href="/">котеджі</Link>
          </li>
          <li>
            <Image
              src="/icons/hotel-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Готелі в Карпатах"
            />
            <Link href="/">готелі</Link>
          </li>
          <li>
            <Image
              src="/icons/glamping-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Купольні будинки в Карпатах"
            />
            <Link href="/">куполи</Link>
          </li>
          <li>
            <Image
              src="/icons/base-icon.svg"
              width={16}
              height={16}
              className={styles.responsiveImage}
              alt="Відпочинкові бази житла в Карпатах"
            />
            <Link href="/">бази</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <p>Дозвілля</p>
        <ul>
          <li>
            <Image
              src="/icons/eat-icon.svg"
              width={16}
              height={16}
              alt="Поїсти в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">розваги</Link>
          </li>
          <li>
            <Image
              src="/icons/skiing-icon.svg"
              width={16}
              height={16}
              alt="Лижі в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">лижі</Link>
          </li>
          <li>
            <Image
              src="/icons/water-icon.svg"
              width={16}
              height={16}
              alt="Водні в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">водні</Link>
          </li>
          <li>
            <Image
              src="/icons/exchange-icon.svg"
              width={16}
              height={16}
              alt="Прокат в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">прокат</Link>
          </li>
          <li>
            <Image
              src="/icons/sport-icon.svg"
              width={16}
              height={16}
              alt="Спорт в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">спорт</Link>
          </li>
          <li>
            <Image
              src="/icons/horse-icon.svg"
              width={16}
              height={16}
              alt="Кінний спорт в Карпатах"
              className={styles.responsiveImage}
            />
            <Link href="/">кінний</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <p>Туризм</p>
        <ul>
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
            <Link href="/">походи</Link>
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
