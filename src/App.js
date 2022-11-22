import Header from './components/Header'
import Footer from './components/Footer'
import styles from './styles/App.module.scss';
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
