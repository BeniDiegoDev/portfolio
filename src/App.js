import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'

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

  const isLittleH = useMediaQuery({ query: '(max-height: 500px)' })
  const isLittleW = useMediaQuery({ query: '(max-width: 300px)' })
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  
  return (
    <>
    {!loading ? (
      !isLittleH && !isLittleW ? <div className="App">
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
    :
    <div style={{ backgroundColor: '#2c2c2c', minWidht: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black'}}>
      <h2 style={{ color: "#bff000" }}>Ecran trop petit</h2>
      <p style={{ fontSize: "12px", color: "#bff000" }}>(Taille minimum requis 500 px x 300 px)</p>
    </div>
    ) : (
      <LoadingScreen />
    )}
    </>
  );
}

export default App;
