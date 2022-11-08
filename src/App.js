import Header from './components/Header'
import Banner from './components/Banner'
import CardZone from './components/CardZone'
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <CardZone />
    </div>
  );
}

export default App;
