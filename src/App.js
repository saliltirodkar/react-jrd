import logo from "../src/assets/images/logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Values from "./components/Values";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Tours />
      <About />
      <Services />
      <Values />
      <Contact />
    </div>
  );
}

export default App;
