import React, { useState } from "react";

// Import Link from react-scroll
import { Link } from "react-scroll";

// Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Projets
              </Link>
            </li>

            <li className="nav-item">
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

            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Expériences
              </Link>
            </li>

            <li className="nav-item">
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

          </ul>

        </div>

      </nav>
      
      {isOpen ?
        <div className="burger-menu">
          <nav className="nav-burger" id="navbar">

            <div className="nav-content">

              <ul className="nav-items">
                <li className="responsiveNavRetour">
                  <Link
                    onClick={() => (setIsOpen(!isOpen))}
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
                <li className="responsiveNavRetour" onClick={() => ((console.log(isOpen), setIsOpen(!isOpen), console.log(isOpen)))}>
                  <FontAwesomeIcon className="iconNav" icon={faTimes} />
                </li>
              </ul>
            </div>

            <div className="nav-items-burger">
              <p className="responsiveNavRetour">
                <Link
                  onClick={() => (setIsOpen(!isOpen))}
                  className="text-nav"
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                >
                  Projets
                </Link>
              </p>

              <p className="responsiveNavRetour">
                <Link
                  onClick={() => (setIsOpen(!isOpen))}
                  className="text-nav"
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                >
                  Langages
                </Link>
              </p>

              <p className="responsiveNavRetour">
                <Link
                  onClick={() => (setIsOpen(!isOpen))}
                  className="text-nav"
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                >
                  Expériences
                </Link>
              </p>

              <p className="responsiveNavRetour">
                <Link
                  onClick={() => (setIsOpen(!isOpen))}
                  className="text-nav"
                  activeClass="active"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                >
                  Contact
                </Link>
              </p>
            </div>
          </nav>
        </div>
        :
        <div>
          <nav className="nav-burger" id="navbar">

            <div className="nav-content">

              <ul className="nav-items">
                <li className="responsiveNavRetour">
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
                <li className="responsiveNavRetour" onClick={() => ((console.log(isOpen), setIsOpen(!isOpen), console.log(isOpen)))}>
                  <FontAwesomeIcon className="iconNav" icon={faChevronDown} />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      }
    </div>
  );
}


export default Navbar;
