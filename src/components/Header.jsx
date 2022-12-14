import './../styles/layout/_header.scss'
import {ReactComponent as KasaLogo} from '../assets/img/logo_kasa.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header className="header">
            <KasaLogo className="header__imgHeader"/>
            <ul>
                <NavLink end className='link' to="/">Accueil</NavLink>
                <NavLink className='link' to="/about">A Propos</NavLink>
            </ul>
        </header>
    )
}

export default Header