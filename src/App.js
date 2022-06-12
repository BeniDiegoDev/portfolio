import React from "react";

// Import du CSS
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./components/Home/Home";
import dummyText from "./components/DummyText";
import BottomBar from "./components/BottomBar";

function App(props) {
  
  return (
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

        <Section
          title="Langages"
          subtitle={dummyText}
          dark={true}
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
  );
}

export default App;
