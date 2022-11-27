import styles from '../../styles/ErrorPage.module.scss'
import Header from "../../components/Header"
import { NavLink, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className={styles.errorPage}>
            <Header />
            <div className={styles.titles}>
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