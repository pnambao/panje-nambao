import React from "react";
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="header d__flex align__items__center pxy__30">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation pxy__30">
          <ul className="navbar d__flex">
          <Link to="/">
              {" "}
              <li className="nav__items mx__15"> Home</li>
            </Link>
            <Link to="/about-me">
              {" "}
              <li className="nav__items mx__15"> About me</li>
            </Link>
            <Link to="project">
              {" "}
              <li className="nav__items mx__15"> Portfolio</li>
            </Link>
            <Link to="contact">
              {" "}
              <li className="nav__items mx__15"> Contact</li>
            </Link>
            {/* <Link to="resume">
              {" "}
              <li className="nav__items mx__15">Resume</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
