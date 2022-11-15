import Header from './components/Header'
import Banner from './components/Banner'
import CardZone from './components/CardZone'
import Footer from './components/Footer'
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <CardZone />
      <Footer />
    </div>
  );
}

export default App;
