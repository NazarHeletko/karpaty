import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["items-wrapper"]}>
        <div className={styles.item}>
          <span>Мої карпати</span>
          <Link href="/">Головна</Link>
          <Link href="/">Події</Link>
          <Link href="/">Новини</Link>
          <Link href="/">Реклама</Link>
        </div>
        <div className={styles.item}>
          <span>Напрямок</span>
          <div className={styles["sub-column-wrapper"]}>
            <div className={styles["sub-column"]}>
              <Link href="/">Верховина</Link>
              <Link href="/">Ворохта</Link>
              <Link href="/">Буковель</Link>
              <Link href="/">Яремче</Link>
              <Link href="/">Микуличин</Link>
              <Link href="/">Татарів</Link>
            </div>
            <div className={styles["sub-column"]}>
              <Link href="/">Рахів</Link>
              <Link href="/">Мукачево</Link>
              <Link href="/">Берегово</Link>
              <Link href="/">Хуст</Link>
              <Link href="/">Косино</Link>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles["social-wrapper"]}>
            <span>Поділитися</span>
            <div className={styles.social}>
              <Link href="/"><Image src="/icons/telegram-icon.svg" height={16} width={16} alt="телеграм"/>Телеграм</Link>
              <Link href="/"><Image src="/icons/instagram-icon.svg" height={16} width={16} alt="Інстаграм"/>Інстаграм</Link>
              <Link href="/"><Image src="/icons/twitter-icon.svg" height={16} width={16} alt="Твітер"/>Твітер</Link>
              <Link href="/"><Image src="/icons/tiktok-icon.svg" height={16} width={16} alt="Тік Ток"/>Тік Ток</Link>
              <Link href="/"><Image src="/icons/youtube-icon.svg" height={16} width={16} alt="Тік Ток"/>Ютуб</Link>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <span>Контакти</span>
          <p className={styles["contact-header"]}>Телефон:</p>
          <a className={styles.phone} href="tel:+380667440364">
            +380667440364
          </a>
          <p className={styles["contact-header"]}>Email:</p>
          <a href="mailto:heletko.nazar@gmail.com">heletko.nazar@gmail.com</a>
          <p className={styles["contact-header"]}>Telegram:</p>
          <a href="https://t.me/soyer12">написати</a>
        </div>
      </div>
      <div className={styles.copyrigt}>
        <p>© "Мої карпати". Всі права захищені. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
