import ApartmentList from '../../data/apartment.json'
import { useParams } from "react-router-dom"

const Logement = () => {
    const { params } = useParams()
    const product = ApartmentList.find((a) => a.id === params)

    const { title, location, rating, host, equipments, description, pictures } = product

    console.log(product)

    return (
        <main>
            <h2>Logement</h2>
        </main>
    )
}

export default Logement