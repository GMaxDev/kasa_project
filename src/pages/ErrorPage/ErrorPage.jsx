import '../../styles/base/_errorPage.scss'
import { NavLink } from "react-router-dom"

const ErrorPage = () => {

    return (
        <div className="errorPage">
            <div className="errorPage__titles">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink end className='link' to="/">
                    <h3>Retourner sur la page d'accueil</h3>
                </NavLink>
            </div>
        </div>
    )
}

export default ErrorPage