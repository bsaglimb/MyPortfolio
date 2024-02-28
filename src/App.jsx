import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



function App() {
  const [load, updateLoad] = useState(true);

  return (
    <>
        <Nav />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
