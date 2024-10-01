import styles from "./BlogPreview.module.css";

interface ContentProps {
  children: React.ReactNode;
}

const BlogPreview: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className={styles["aricles-list-wrapper"]}>
      <div className={styles["aricles-list"]}>
        <h1>Блог про подорожі</h1>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default BlogPreview;
