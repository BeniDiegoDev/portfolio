import React, { useState, useEffect } from "react";

// Import du CSS
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./components/Home/Home";
import dummyText from "./components/DummyText";
import BottomBar from "./components/BottomBar";
import Langages from "./components/Langages";
import LoadingScreen from "./components/LoadingScreen";

function App(props) {
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

        <Section
          title="Projets"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />

        <Langages
          id="section3"
        />

        <Section
          title="Expériences"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />

        <Section
          title="Contact"
          subtitle={dummyText}
          dark={true}
          id="section5"
          number="4"
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
