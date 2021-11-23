import React from 'react';
import Typed from "react-typed"


const Header = () => {
    return (
        <div  className="header-wraper">
            <div className="main-info">
                <h1>Siboniso Mabuza Portfolio</h1>
                <Typed
                className="typed-text"
                strings={["Software Developer", "Web Designer", "Software Tester"]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
<div className="center-image">
                <img src= "https://i.ibb.co/1qHPGmP/IMG-0382-2.jpg" className="img-thumbnail" alt="Siboniso" />
              </div>

            </div>
            
        </div>
    )
}

export default Header
