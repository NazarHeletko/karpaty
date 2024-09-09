import styles from "./ContentPage.module.css";

interface ContentPageProps {
  children: React.ReactNode;
}

const ContentPage: React.FC<ContentPageProps> = ({ children }) => {
  return <div className={styles["content-block"]}>{children}</div>;
};

export default ContentPage;
