import Image from "next/image";
import styles from "./ImageArticleLeft.module.css";


type Props = {
  src: string;
  alt: string;
  title: string
}

export default function ImageArticleLeft({src, alt, title}:Props) {
  
  return (
    <div className={styles["article-image"]}>
      <Image
        src={src}
        fill
        style={{objectFit: "cover"}}
        alt={alt}
      />
      <span>{title}</span>
    </div>
  );
}
