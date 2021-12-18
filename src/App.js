import logo from "./logo.svg";
import "./App.css";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";
import Main from "./components/pages/main/Main";
import Services from "./components/pages/services/Services";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/about/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
