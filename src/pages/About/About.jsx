import Banner from '../../components/Banner';
import styles from '../../styles/App.module.scss';
import kasaBannerAbout from '../../assets/img/banner_kasa_about.jpg'
import InfoBloc from '../../components/InfoBloc';

function About() {
    return (
        <main className={`${styles.app}`}>
            <Banner imgSrc={kasaBannerAbout} alt="Paysage montagneux avec des nuages"/>
            <InfoBloc title="Titre 1" content="Texte random 1"/>
            <InfoBloc title="Titre 2" content="Texte random 2"/>
            <InfoBloc title="Titre 3" content="Texte random 3"/>
            <h2>About</h2>
        </main>
    )
}

export default About