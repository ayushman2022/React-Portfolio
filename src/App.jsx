import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <Header />
    <Banner />
    <ScrollToTopButton />
    <About />
    <Projects/>
    <Expertise />
    <Contact />
    <Footer />
  </>;
}

export default App;
