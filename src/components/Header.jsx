import styles from '../styles/Header.module.scss'
import {ReactComponent as KasaLogo} from '../assets/img/logo_kasa.svg'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className={`${styles.header}`}>
            <KasaLogo className={styles.imgHeader}/>
            <ul>
                <Link className='link' to="/">Accueil</Link>
                <Link className='link' to="/about">A Propos</Link>
                {/* <li><a href="">Accueil</a></li>
                <li><a href="">A Propos</a></li> */}
            </ul>
        </header>
    )
}

export default Header