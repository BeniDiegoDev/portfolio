import React, { useState } from "react";
import "../App.css";

// Import Link from react-scroll
import { Link } from "react-scroll";

// Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                BeniDiego.js
              </Link>
            </li>
            <li className="nav-item , responsiveNav">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item , responsiveNav">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Langages
              </Link>
            </li>
            <li className="nav-item , responsiveNav">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Compétences
              </Link>
            </li>
            <li className="nav-item , responsiveNav">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item , responsiveNavRetour" onClick={() => ((console.log(isOpen) , setIsOpen(!isOpen)) )}>
                <FontAwesomeIcon className="iconNav" icon={faSignOutAlt} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  
export default Navbar;
