import React from "react"

import Header from './components/Header'
import Footer from './components/Footer'
import styles from './styles/App.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <main className={styles.app}>
        <Router>
          <Header />
          <main className={styles.body}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/Logement/:id" element={<Logement />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
    </main>
  );
}

export default App;
