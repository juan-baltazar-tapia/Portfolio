import { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "./Heading";
import About from "./About";
import Projects from "./Projects.jsx";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode)
  };

  return (
    <div className={`${darkMode && "dark "}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Heading />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
