import styles from "./Info.module.css"

interface InfoProps {
    children: React.ReactNode;
  }

const  Info: React.FC<InfoProps> = ({children}) => {
    return(
        <div className={styles.info}>
            {children}
        </div>
    )
}

export default Info