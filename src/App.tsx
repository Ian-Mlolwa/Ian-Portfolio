import { useState } from "react";
import NavBar from "./components/NavBar";
import Bot from "./components/Bot";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <Bot />
      <About />
      <Skills />
      <Hireme />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
