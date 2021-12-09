import React from "react";
import "./Project.css";
import p1 from "../assets/portfolio-1.jpg";
import p2 from "../assets/portfolio-2.jpg";
import p4 from "../assets/portfolio-4.jpg";

function Project() {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          A few projects I have worked on.
        </p>
        <p className="heading p__color">
         More will be added soon.
        </p>
      </div>
      <div className="container">
        <div className="row">

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={p2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Note Taker</h5>
                <h4 className="project__text">
                  Keep track of your tasks.
                </h4>
                <a href="https://note-taker-maker.herokuapp.com/" className="project__btn"  target="_blank" >
                  View app
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={p1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Weather Dashboard</h5>
                <h4 className="project__text">
                  What's the weather today?
                </h4>
                <a href="https://pnambao.github.io/The-Best-Weather-app/" className="project__btn"  target="_blank" >
                  View app
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={p4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Password Generator</h5>
                <h4 className="project__text">
                  Create strong passwords.
                </h4>
                <a href="https://pnambao.github.io/Random-Password-Generator/" className="project__btn" target="_blank">
                  View app
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Project;
