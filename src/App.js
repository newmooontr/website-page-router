import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Logo from "./pages/Logo";
import Html from "./pages/Html";
import Services from "./pages/Services";
import Css from "./pages/Css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Css" element={<Css/>}/>
        <Route path="/Html" element={<Html/>}/>
        <Route path="/Logo" element={<Logo/>}/>
        <Route path="/Services" element={<Services/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  );
}

export default App;

