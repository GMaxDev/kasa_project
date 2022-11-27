import Banner from '../../components/Banner';
import CardZone from '../../components/CardZone'
import styles from '../../styles/App.module.scss';
import kasaBanner from '../../assets/img/banner_kasa.jpg'

const Home = () => {
    return (
        <section className={styles.app}>
            <Banner imgSrc={kasaBanner} title="Chez vous, partout et ailleurs" alt="Paysage de falaise avec des forêts"/>
            <CardZone />
        </section>
    )
}

export default Home