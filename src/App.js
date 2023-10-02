import { Work } from "@mui/icons-material";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Navbartop from "./Components/Navbartop";
import "./index.css";
import Prevwork from "./Components/Prevwork";
import Contact from "./Components/Contact";

function App() {
  return (
    // <Data></Data>
  <>
  <Navbartop></Navbartop>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Services></Services>
    <Prevwork></Prevwork>
    <Contact></Contact>
    <Footer></Footer>
  </>
  );
}

export default App;
