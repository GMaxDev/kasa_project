import './../styles/components/_cardZone.scss'
import Card from './Card'
import ApartmentList from '../data/apartment.json'
import { Link } from "react-router-dom"

const CardZone = ({title, image}) => {
    return(
        <section className="cardzone">
                {ApartmentList.map( apartment => 
                    <Link to={`logement/${ apartment.id }`}>
                        <Card title={apartment.title} cover={apartment.cover}/>
                    </Link>
                )}
        </section>
    )
}

export default CardZone