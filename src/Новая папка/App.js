
//    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1701986668722!2d74.60482211533956!3d42.869251679156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7cf99d5d33d%3A0x36dff1646de6c45a!2zMjEg0L_RgNC-0YHQvy4g0K3RgNC60LjQvdC00LjQuiwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1640528893354!5m2!1sru!2skg" width="600" height="450" border= "0" allowfullscreen="" loading="lazy" title="map"></iframe>
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";
import Main from "./components/pages/main/Main";
import Mape from "./components/pages/map/Mape";
import Services from "./components/pages/services/Services";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="services" element={<Services />} />
        
      </Routes>
      <Main />
      <Mape />

      <Footer />
      
    </div>
  );
}

export default App;
