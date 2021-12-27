import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  Footer,
  Main,
  ServiceMain,
  Services,
  Partners,
  BeforeAfter,
  News,
  Contact,
} from "./components/components";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // не было последней версии bootstrap
import About from "./components/pages/about/about";
import Articles from "./components/pages/article/Articles";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main" element={<ServiceMain />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Main />
      <ServiceMain />
      <Services />
      <Partners />
      <BeforeAfter />
      <News />
      <Contact />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
