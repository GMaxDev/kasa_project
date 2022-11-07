import styles from '../styles/Header.module.scss'
import {ReactComponent as KasaLogo} from '../assets/img/logo_kasa.svg'

function Header() {
    return(
        <header className={`${styles.header}`}>
            <KasaLogo />
            <ul>
                <li><a href="">Accueil</a></li>
                <li><a href="">A Propos</a></li>
            </ul>
        </header>
    )
}

export default Header