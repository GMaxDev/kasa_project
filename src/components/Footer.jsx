import styles from '../styles/Footer.module.scss'
import {ReactComponent as KasaLogo} from '../assets/img/logo_kasa_small_white.svg'

function Footer() {
    return(
        <footer className={`${styles.footer}`}>
            <KasaLogo className={styles.logoColor}/>
            <h2>© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer