import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  Footer,
  Main,
  Services,
  Partners,
} from "./components/components";
import { Routes, Route, Link } from "react-router-dom";
// import "./components/bootstrap/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // не было последней версии bootstrap
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
      <Main />
      <Services />
      <Partners />
      <About />
      <Footer />
    </div>
  );
}

export default App;
