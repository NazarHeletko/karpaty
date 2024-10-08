import styles from "./RealtyPage.module.css"

interface ContentPageProps {
  children: React.ReactNode;
}


const  RealtyPage: React.FC<ContentPageProps> = ({ children }) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default RealtyPage