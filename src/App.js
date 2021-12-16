import logo from "./logo.svg";
import "./App.css";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";
import Main from "./components/pages/main/Main";
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
      <Footer />
    </div>
  );
}

export default App;
