import React from 'react'
import '../css/Navbar.css';
// import '../js/Navbar.js';


import PropTypes from 'prop-types'


let logo_name = "MySite";

export default function Navbar(props) {
  return (
    <div>
         {/* _____________________________ navbar start */}
   
        <nav>
            <div className="navbar">
            <i className='bx bx-menu'></i>
            <div className="logo"><a href="/">{logo_name}</a></div>
            <div className="nav-links">
                <div className="sidebar-logo">
                <span className="logo-name">{logo_name}</span>
                <i className='bx bx-x' ></i>
                </div>
                <ul className="links">


                {/* __________________________________________ */}
                <li><a className='main_li' href="/">HOME</a></li>


                {/* __________________________________________ */}
                <li>
                    {/* <a className='main_li' href="/">Dropdown</a> */}
                    <a className='main_li' href="/">{props.option1}</a>
                    <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i>
                    <ul className="htmlCss-sub-menu sub-menu">
                    <li><a href="/">Dropdown 1</a></li>
                    <li><a href="/">Dropdown 2</a></li>
                    <li><a href="/">Dropdown 3</a></li>
                    <li className="more">
                        <span><a href="/">More</a>
                        <i className='bx bxs-chevron-right arrow more-arrow'></i>
                    </span>
                        <ul className="more-sub-menu sub-menu">
                        <li><a href="/">More 1</a></li>
                        <li><a href="/">More 2</a></li>
                        <li><a href="/">More 3</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>


                {/* __________________________________________ */}
                <li >
                    <a className='main_li' href="/">{props.option2}</a>
                    <i className='bx bxs-chevron-down js-arrow arrow '></i>
                    <ul className="js-sub-menu sub-menu">
                    <li><a href="/">Dynamic Clock</a></li>
                    <li><a href="/">Form Validation</a></li>
                    <li><a href="/">Card Slider</a></li>
                    <li><a href="/">Complete Website</a></li>
                    </ul>
                </li>


                {/* __________________________________________ */}
                <li><a className='main_li' href="/">ABOUT US</a></li>


                {/* __________________________________________ */}
                <li><a className='main_li' href="/">CONTACT US</a></li>


                {/* __________________________________________ */}
                </ul>
            </div>
            <div className="search-box">
                <i className='bx bx-search'></i>
                <div className="input-box">
                <input type="text" placeholder="Search..."/>
                </div>
            </div>
            </div>
        </nav>
        {/* _____________________________ navbar end */}

    </div>
  )
}







// __________________________ setting props variable type if necessery
Navbar.propTypes={
    option1: PropTypes.string.isRequired, // if this option is required
    option2: PropTypes.string
}
// __________________________ setting default value in props variable
Navbar.defaultProps={
    option1: "Set Option1",
    option2: "Set Option2",
}







