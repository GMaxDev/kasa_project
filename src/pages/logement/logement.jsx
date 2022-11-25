import ApartmentList from '../../data/apartment.json'
import Rating from '../../components/Rating'

import { useParams } from "react-router-dom"


const Logement = () => {
    const { params } = useParams()
    const product = ApartmentList.find((a) => a.id === params)

    // const { title, location, rating, host, equipments, description, pictures } = product

    console.log(product)

    return (
        <main>
            <Rating rating='3'/>
            <h2>Logement</h2>
        </main>
    )
}

export default Logement