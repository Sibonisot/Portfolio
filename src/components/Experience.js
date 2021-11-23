import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faCheckCircle, faCode, faCodeBranch, faCog, faDesktop, faLanguage } from "@fortawesome/free-solid-svg-icons";
import AltHealth from '../althealth.png';


export const Experience = () => {
    return (
        <div  id="experience" className="experience">
            <h1 className="py-5" >my experience</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon={faCode} size="3x" /></div>
                            <h3>Languages</h3>
                            <p>C#, HTML5/CSS, VB.NET, Python,
                                PHP, Java, JavaScript, SQL, Oracle Database</p>

                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCog} size="3x" /></div>
                            <h3>Technologies Used</h3>
                            <p>C#, HTML5/CSS, VB.NET, Python,
                                PHP, Java, JavaScript, SQL, Oracle Database</p>

                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faBug} size="3x" /></div>
                            <h3>Software Testing</h3>
                            <p>C#, HTML5/CSS, VB.NET, Python,
                                PHP, Java, JavaScript, SQL, Oracle Database</p>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCodeBranch} size="3x" /></div>
                            <h3>Version Control</h3>
                            <p>C#, HTML5/CSS, VB.NET, Python,
                                PHP, Java, JavaScript, SQL, Oracle Database</p>

                        </div>
                    </div>
                </div>

            </div>
            <h2>PORTFOLIO</h2>
            <div className="portfolio-wrapper">
            <div className="container py-8">
            <div className="row">
                <div className="col-lg-7 col-xm-12">
                    <div className="image-box-wrapper row justify-content-center">
                        <div className="photo-wraper" >
                            <img className="portfolio-image" src={AltHealth} alt="Final year Project..." />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" />
                        </div>
                    </div>
                </div>
                <div className="heading4 col-lg-5 col-xm-6">
                    <h4 className="heading4">Final Year Project</h4>
                    <p className="pharagraph">I am an aspiring recent graduate Software Developer, technically skilled in C#, HTML5/CSS, VB.NET, Python,
                        PHP, Java, JavaScript, SQL, Oracle Database, Git in addition to front and backend development. Gained knowledge
                        of the full Software Development Life Cycle (SDLC) methodologies and managing requirements while studding
                        for a Diploma in IT. Seeking to utilize my academic skills in IT and technically skills accumulated from the current
                        role to land IT related entry level jobs.</p>
                </div>
            </div>
            </div>
            </div>
            

        </div>


    )
}
