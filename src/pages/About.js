import React from 'react';
import './About.css';
import aboutImg from '../assets/panje2.jpg';
import resume from '../assets/Resume.pdf'

function About() {
    return (
        <div className="about component__space ">
           <div className="container">
               <div className="row">
                   <div className="col__2">
                       <img src={aboutImg} alt="" className="about__image"/>
                   </div>
                   <div className="col__2">
                    <h1 className="about__heading">
                        About Me
                    </h1>
                    <div className="about__meta">
                        <p className="about__text p__color">
                        I am a full stack web developer with a passion to learn more and take on new challenges on a daily basis.
                        I love front-end web design, but I am also trained in the back-end.
                        </p>

                        <p className="about__text p__color">
                        I enjoy doing fan-art illustrations, graphic design and character design in my free time.I love to dabble in some CSS art, because I feel like the worlds of web design and art are connected in some way or another, and exploring the inbetween is always interesting.
                        </p>

                        <p className="about__text p__color">
                        My hobbies include watching anime and horror movies, playing video games, and working out whenever I get a chance.
                        Check out my resume below for more information on my work experience and skill set.  
                        </p>
                        <div className="about__button d__flex align__items__center">
                            <a href={resume} download><button className="about btn pointer" > Download Resume</button></a>
                            <a href="/contact"><button className="about btn pointer"> Hire Me</button></a>
                        </div>
                    </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default About
