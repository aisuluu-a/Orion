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
import "./components/bootstrap/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Main />
      <Services />
      <Partners />

      <Footer />
    </div>
  );
}

export default App;
