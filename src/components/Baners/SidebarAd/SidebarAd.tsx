import Image from "next/image";
import styles from "./SidebarAd.module.css";

type Props = {
  src: string;
  alt: string;
  title: string;
  location: string;
};

export default function ImageArticleRight({ src, alt, title, location }: Props) {
  return (
    <div className={styles["sidebar-ad"]}>
      <Image src={src} fill alt={alt} style={{ objectFit: "cover" }} />
      <div className={styles.description}>
        <span>{title}</span>
        <div className={styles.location}>
          <Image
            src="/icons/location-icon.svg"
            height={14}
            width={14}
            alt="location"
          />
          <span className={styles["location-title"]}>Верховина</span>
        </div>
      </div>
    </div>
  );
}
