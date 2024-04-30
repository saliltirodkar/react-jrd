import "./App.css";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { Route, Routes } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Diamond from "./pages/Diamond";
import Events from "./pages/Events";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<Aboutus />} />
        </Route>
      </Routes>
      {/* <Home /> */}
      {/* <Catalogue /> */}
      {/* <Diamond /> */}
    </div>
  );
}

export default App;
