import styles from '../styles/CardZone.module.scss'
import Card from './Card'
import ApartmentList from '../data/apartment.json'
import { NavLink, useParams } from "react-router-dom"

function CardZone({title, image}) {
    const {id} = useParams()

    return(
        <main className={`${styles.cardzone}`}>
                {ApartmentList.map( a => 
                    <NavLink to={`logement/${ a.id }`}>
                        <Card title={a.title} cover={a.cover} id={a.id}/>
                    </NavLink>
                )}
        </main>
    )
}

export default CardZone