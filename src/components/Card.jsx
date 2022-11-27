import styles from '../styles/Card.module.scss'

const Card =({title, cover}) => {
    return(
        <div className={`${styles.card}`}>
            <div className={styles.imageContainer}>
                <img src={cover} alt="" />
            </div>
            <div className={styles.apartmentTitle}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Card