import Image from "next/image";
import styles from "./page.module.css";

export default function Contacts() {
  return (
    <div className={styles["contscts-wrapper"]}>
      <div className={styles.contacts}>
        <h3>
          Привіт, якщо у Вас є якісь питання, чи ви хочете дізнатися про умови
          співпраці, ось наші контакти:
        </h3>
        <div className={styles["items-wrapper"]}>
          <div className={styles.item}>
            <div className={styles["item-title"]}>
              <Image
                src="/icons/telegram-icon.svg"
                height={20}
                width={20}
                alt="телеграм"
              />
              <p>Телеграм</p>
            </div>
            <a target="_blank" href="https://t.me/soyer12">@soyer12</a>
          </div>
          <div className={styles.item}>
            <div className={styles["item-title"]}>
              <Image
                src="/icons/viber-icon.svg"
                height={20}
                width={20}
                alt="вайбер"
              />
              <p>Вайбер</p>
            </div>
            <a target="_blank" href="viber://chat/?number=%2B380937708304">Viber Chat</a>
          </div>
          <div className={styles.item}>
            <div className={styles["item-title"]}>
              <Image
                src="/icons/gmail-icon.svg"
                height={20}
                width={20}
                alt="пошта"
              />
              <p>Пошта</p>
            </div>
            <a target="_blank" href="mailto:heletko.nazar@gmail.com">heletko.nazar@gmail.com</a>
          </div>
          <div className={styles.item}>
            <div className={styles["item-title"]}>
              <Image
                src="/icons/phone-icon.svg"
                height={20}
                width={20}
                alt="телефон"
              />
              <p>Телефон</p>
            </div>
            <a target="_blank" href="tel:+380667440364">+380667440364</a>
          </div>
        </div>

        <h3>Стосовно реклами:</h3>
      </div>
    </div>
  );
}
