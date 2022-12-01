import './../styles/layout/_footer.scss'
import {ReactComponent as KasaLogo} from '../assets/img/logo_kasa_small_white.svg'

const Footer = () => {
    return(
        <footer className="footer">
            <KasaLogo className="footer__logoColor"/>
            <h2>© 2022 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer