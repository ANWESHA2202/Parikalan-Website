import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
export default function navbar() {
  return (<div>
      <header>
                <div className="logo1">
                    <h2>PAR<span>i</span>KALAN</h2>
                </div>

                <div className="navigation">
                    <input type="checkbox" id="nav-checkbox"/>
                        <label htmlFor="nav-checkbox" className="nav-toggle">
                            {/* <img src="images/hamburger-icon-white-16.jpg" alt="open menu" className="open"/>
                            <img src="images/hamburger-icon-white-16.jpg" alt="close menu" className="close"/> */}
                        </label>

                        <ul className="nav-menu">
                        <li><Link to="/"><i className="fas fa-home" ></i> Home</Link></li>
                            <li><Link to="/clubs"><i className="fas fa-users"></i> Clubs</Link></li>
                            <li><Link to="/xenium"><i className="fab fa-elementor"></i> Our Fest</Link></li>
                            {/* <li><Link to="/clubs"><i className="fas fa-calendar-week"></i> Events</Link></li> */}
                            <li><Link to="/form"><i className="fas fa-book"></i> Register</Link></li>
                        </ul>
                </div>
            </header>
  </div>);
}
