import logo from '../logo.svg';
import '../App.css';

// Import de react-router-dom
import { Link } from 'react-router-dom';

// Import components
import NavBar from "../components/NavBar";

function AboutMe() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur <code>www.benit.fr</code> cet application web est faite par
        </p>
        <Link
          className="App-link"
          to="/"
        >
          BeniDiego.js
        </Link>
      </header>
    </div>
  );
}

export default AboutMe;
