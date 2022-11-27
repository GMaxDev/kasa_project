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
    <div className={styles.app}>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
