import logo from '../logo.svg';
import '../App.css';

// Import de react-router-dom
import { Link } from 'react-router-dom';

// Import components
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Je suis en React
        </p>
        <Link
          className="App-link"
          to="/aboutme"
        >
          BeniDiego.js
        </Link>
      </header>
    </div>
  );
}

export default Home;
