import Link from "next/link";
import styles from "./ContentPageHeader.module.css";
import Image from "next/image";

type Props = {
    title: string
    src: string
    alt: string
    hrefRealty: string
    hrefTours: string
    hrefPlaces: string
  }


const ContentPageHeader = ({title, src, alt, hrefRealty, hrefTours, hrefPlaces}:Props) => {
  return (
    <div className={styles["title-block"]}>
      <Image
        priority
        src={src}
        fill
        quality={100}
        alt={alt}
      />
      <div className={styles["title-header"]}>
        <h1>{title}</h1>
      </div>
      <div className={styles["title-menu"]}>
        <Link href={hrefRealty}>житло</Link>
        <Link href={hrefTours}>тури</Link>
        <Link href={hrefPlaces}>місця</Link>
      </div>
    </div>
  );
};

export default ContentPageHeader;
