import styles from '../styles/Header.module.scss'
import {ReactComponent as KasaLogo} from '../assets/img/logo_kasa.svg'

function Header() {
    return(
        <header>
            <KasaLogo />
        </header>
    )
}

export default Header