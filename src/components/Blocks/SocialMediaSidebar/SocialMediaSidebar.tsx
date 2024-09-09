import Image from "next/image";
import styles from "./SocialMediaSidebar.module.css";
import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["cyrillic"] });

export default function SocialMediaSidebar() {
  return (
    <div className={styles.social}>
      <div className={`${styles.items} ${caveat.className}`}>
        <div>
          <a href="https://www.instagram.com" target="blank">
            <div className={styles.item}>
              <Image
                src="/icons/telegram-icon.svg"
                alt="Телеграм"
                height={20}
                width={20}
              />
              <span className={styles.telegram}>Telegram</span>
            </div>
          </a>
          <a href="">
            <div className={styles.item}>
              <Image
                src="/icons/instagram-icon.svg"
                alt="Інстаграм"
                height={20}
                width={20}
              />
              <span className={styles.instagram}>Instagram</span>
            </div>
          </a>
        </div>
        <div>
          <a href="">
            <div className={styles.item}>
              <Image
                src="/icons/tiktok-icon.svg"
                alt="Тік-ток"
                height={20}
                width={20}
              />
              <span className={styles.tiktok}>TikTok</span>
            </div>
          </a>
          <a href="">
            <div className={styles.item}>
              <Image
                src="/icons/twitter-icon.svg"
                alt="Твітер"
                height={20}
                width={20}
              />
              <span className={styles.twitter}>Twitter</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
