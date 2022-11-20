import Header from './components/Header'
import Banner from './components/Banner'
import CardZone from './components/CardZone'
import Footer from './components/Footer'
import styles from './styles/App.module.scss';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
