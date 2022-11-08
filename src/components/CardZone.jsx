import styles from '../styles/CardZone.module.scss'
import Card from './Card'

function CardZone() {
    return(
        <main className={`${styles.cardzone}`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </main>
    )
}

export default CardZone