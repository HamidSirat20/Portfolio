import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Banner from "../src/components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Footer } from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Educations from "./components/Educations";
import NavBar from "./components/NavBar";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Educations />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
