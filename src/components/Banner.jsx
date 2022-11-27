import styles from '../styles/Banner.module.scss'

const Banner = ({imgSrc, title, alt}) => {
    return(
        <div className={`${styles.banner}`}>
            <img src={imgSrc} alt={alt}/>
            <h1>{title}</h1>

        </div>
    )
}

export default Banner