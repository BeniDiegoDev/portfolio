import React from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import dummyText from "./components/DummyText";

function App() {
    return (
      <div className="App">

        <Navbar />

        <Section
          title="Hello, i'm"
          subtitle="BeniDiego.js"
          dark={true}
          id="section1"
        />
        <Section
          title="Portfolio"
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
          title="Compétences"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Contact"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />        
      </div>
    );
  }

export default App;
