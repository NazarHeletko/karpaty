import Link from "next/link";
import styles from "./BlogItem.module.css";
import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    title: string;
    description: string;
}

const BlogItem = ({src, alt, title, description}:Props )=> {
  return (
    <div className={styles["item-wrapper"]}>
      <div className={styles.item}>
        <div className={styles["article-img"]}>
          <Image src={src} fill alt={alt} style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>
            {description}
          </p>
         
            <Link href={"/"}><span>Читати далі</span></Link>
        

        </div>
      </div>
    </div>
  );
};

export default BlogItem;
