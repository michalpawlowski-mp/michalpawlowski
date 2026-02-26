import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./styles/style.css";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
