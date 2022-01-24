import React from 'react';
import "./Home.css";

export default function navbar() {
  return (<div>
      <header>
                <div className="logo1">
                    <h2>PAR<span>i</span>KALAN</h2>
                </div>

                <div className="navigation">
                    <input type="checkbox" id="nav-checkbox"/>
                        <label for="nav-checkbox" className="nav-toggle">
                            {/* <img src="images/hamburger-icon-white-16.jpg" alt="open menu" className="open"/>
                            <img src="images/hamburger-icon-white-16.jpg" alt="close menu" className="close"/> */}
                        </label>

                        <ul className="nav-menu">
                        <li><a href="#"><i className="fas fa-home" ></i> Home</a></li>
                            <li><a href="#"><i className="fas fa-users"></i> Clubs</a></li>
                            <li><a href="#"><i className="fab fa-elementor"></i> Our Fest</a></li>
                            <li><a href="#"><i className="fas fa-calendar-week"></i> Events</a></li>
                            <li><a href="#"><i className="fas fa-book"></i> Register</a></li>
                        </ul>
                </div>
            </header>
  </div>);
}
