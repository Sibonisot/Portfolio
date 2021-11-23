import React from 'react'
import Logo from "../logo.png";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


/*React fontawesone imports*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#"><img src={Logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}  style={{color: "#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="Home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="About" className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Experience" className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Education" className="nav-link" href="#">Education</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Contacts" className="nav-link" href="#">Contacts</Link>
            </li>

            
       
          </ul>
          
        </div>
      </nav>
    )
}

export default Navbar
