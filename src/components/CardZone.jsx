import styles from '../styles/CardZone.module.scss'
import Card from './Card'
import ApartmentList from '../data/apartment.json'

function CardZone({title, image}) {

    return(
        <main className={`${styles.cardzone} br`}>
            {ApartmentList.map( a => <Card title={a.title} cover={a.cover}/>)}
        </main>
    )
}

export default CardZone