import React, { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import BottomBar from "./components/BottomBar";
import Langages from "./components/Langages";
import LoadingScreen from "./components/LoadingScreen";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      {!loading ? (
        <div className="App">
          <Navbar />

          <Home />

          <Langages />

          <Projets />

          <Experiences />

          <Contact />

          <BottomBar />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
