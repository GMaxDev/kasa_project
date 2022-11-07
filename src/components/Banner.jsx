import styles from '../styles/Banner.module.scss'
import kasaBanner from '../assets/img/banner_kasa.jpg'

function Banner() {
    return(
        <div className={`${styles.banner}`}>
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={kasaBanner} alt="Paysage de falaise avec des forêts" />
        </div>
    )
}

export default Banner