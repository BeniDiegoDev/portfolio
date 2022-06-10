import React from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./components/Home/Home";
import dummyText from "./components/DummyText";

function App(props) {
  
  return (
    <div className="App">
      <Navbar />
        <Home dark={true} id="section1"
          number="0" />

        <Section
          title="Portfolio"
          subtitle={dummyText}
          dark={false}
          id="section2"
          number="1"
        />

        <Section
          title="Langages"
          subtitle={dummyText}
          dark={true}
          id="section3"
          number="2"
        />

        <Section
          title="Compétences"
          subtitle={dummyText}
          dark={false}
          id="section4"
          number="3"
        />

        <Section
          title="Contact"
          subtitle={dummyText}
          dark={true}
          id="section5"
          number="4"
        />
    </div>
  );
}

export default App;
