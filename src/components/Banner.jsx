import styles from '../styles/Banner.module.scss'
import kasaBanner from '../assets/img/banner_kasa.jpg'

function Banner({imgSrc, title, alt}) {
    return(
        <div className={`${styles.banner}`}>
            <img src={imgSrc} alt={alt}/>
            <h1>{title}</h1>

        </div>
    )
}

export default Banner