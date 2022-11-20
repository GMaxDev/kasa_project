import CardZone from '../../components/CardZone'
import styles from '../../styles/App.module.scss';

function Homepage() {
    return (
        <div className={styles.app}>
            <CardZone />
        </div>
    )
}

export default Homepage