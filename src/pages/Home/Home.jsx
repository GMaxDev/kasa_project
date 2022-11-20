import Banner from '../../components/Banner';
import CardZone from '../../components/CardZone'
import styles from '../../styles/App.module.scss';

function Home() {
    return (
        <div className={styles.app}>
            <Banner />
            <CardZone />
        </div>
    )
}

export default Home