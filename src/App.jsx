import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default App;
