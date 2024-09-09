import Image from "next/image";
import styles from "./SidebarAd.module.css";

type Props = {
  src: string;
  alt: string;
  title: string;
};

export default function ImageArticleRight({ src, alt, title }: Props) {
  return (
    <div className={styles["sidebar-ad"]}>
      <Image src={src} fill alt={alt} style={{ objectFit: "cover" }} />
      <span>{title}</span>
    </div>
  );
}
