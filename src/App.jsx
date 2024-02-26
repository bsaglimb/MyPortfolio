import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



function App() {
  const [load, updateLoad] = useState(true);

  return (
    <>
    <div id="top">
      <Nav />
      <section id="#home">
        <Home />
      </section>
      <main>
        <About />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
    </>
  );
}

export default App;
