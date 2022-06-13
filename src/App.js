import React, { useState, useEffect } from "react";

// Import du CSS
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
// import Section from "./components/Section";
import Home from "./components/Home/Home";
// import dummyText from "./components/DummyText";
import BottomBar from "./components/BottomBar";
import Langages from "./components/Langages";
import LoadingScreen from "./components/LoadingScreen";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  
  return (
    <>
    {!loading ? (
       <div className="App">
      <Navbar />
        <Home 
          id="section1"
          offset={0}
          />

        <Projets
          id="section2"
        />

        <Langages
          id="section3"
        />

        <Experience
          id="section4"
        />

        <Contact
          id="section5"
        />

      <BottomBar />
    </div>
    ) : (
       <LoadingScreen />
     )}
    </>
  );
}

export default App;
