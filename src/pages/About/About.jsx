import Banner from '../../components/Banner';
import styles from '../../styles/App.module.scss';
import kasaBannerAbout from '../../assets/img/banner_kasa_about.jpg'

function About() {
    return (
        <main className={`${styles.app}`}>
            <Banner imgSrc={kasaBannerAbout} alt="Paysage montagneux avec des nuages"/>
            <h2>About</h2>
        </main>
    )
}

export default About