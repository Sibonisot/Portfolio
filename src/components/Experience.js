import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug, faCheckCircle, faCode, faCodeBranch, faCog, faDesktop, faLanguage } from "@fortawesome/free-solid-svg-icons";



export const Experience = () => {
    return (
        <div className="experience">
            <h1 className="py-5" >my experience</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon={faCode} size="3x" /></div>
                            <h3>Languages</h3>
                            <p>C#, HTML5/CSS, VB.NET, Python,
                                PHP, Java, JavaScript</p>

                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCog} size="3x" /></div>
                            <h3>Technologies Used</h3>
                            <p>ASP.Net Core, Visual Studio, Android Studio, React JS, Netbeans, Pycharm, Intelli J</p>

                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faBug} size="3x" /></div>
                            <h3>Software Testing</h3>
                            <p>Rest Assured API, Jenkins, Cucumber, Selenium, Postman</p>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCodeBranch} size="3x" /></div>
                            <h3>Version Control</h3>
                            <p>Git Bash, Bitbucket, Github</p>

                        </div>
                    </div>
                </div>

            </div>

        

        </div>


    )
}
