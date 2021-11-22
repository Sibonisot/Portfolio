import React from "react";
import author from "../sibo.jpg";



const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wraper mg-5">
                    <img className="profile-img" src={author} alt="Siboniso Mabuza"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>I am an aspiring recent graduate Software Developer, technically skilled in C#, HTML5/CSS, VB.NET, Python,
                        PHP, Java, JavaScript, SQL, Oracle Database, Git in addition to front and backend development. Gained knowledge
                        of the full Software Development Life Cycle (SDLC) methodologies and managing requirements while studding
                        for a Diploma in IT. Seeking to utilize my academic skills in IT and technically skills accumulated from the current
                        role to land IT related entry level jobs.</p>
                </div>
            </div>

        </div>
    )
}

export default About
