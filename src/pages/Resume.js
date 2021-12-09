import React from 'react';
import resume from '../assets/Resume.pdf'

function Resume() {
    return (
        <div className="container">
            <h1 className="resume__heading">RESUME</h1>
            <div className="row">
                <div className="col__1">
                    <h3>Front End Technologies</h3>

                    <p className="about__text p__color" >
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>IndexedDB</li>
                        <li>Material UI</li>
                    </ul>
                    </p>
                    <h3>Back End Technologies</h3>

                    <p className="about__text p__color" >
                    <ul>
                        <li>JavaScript</li>
                        <li>Web APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                    </p>
              
                <a href={resume} download><button className="about btn pointer" > Click to Download Resume</button></a>
                </div>
            </div>
        </div>
    );
}

export default Resume;