import React from 'react';
import './Home.css';



function Home() {
    const bg = {
            background: `url("./image/home_background.jpg")`,
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundSize: "cover"
    }
    return (
        <div>
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
            <div className="hero"  style={bg} >
                            {/* <video autoplay muted loop id="myVideo">
                                <source src="videos/vecteezy_abstract-plexus-geometrical-shapes-connection-and-web-concept-digital-communication-and-technology-polygonal-background-with-moving-lines-and-dots_2020497.mov" type="video/mp4">
                            </video> */}
                            <span>We're changing the world with technology</span>
                            <h1>The Computer Science Society <br /><br />of PGDAV College</h1>
                            {/* <img src="images/parikalan.6af86543.png" width="200px" alt="" /> */}

            65</div>
                        
                        <div className="container">
                            <div className="content">
                                <h1>Parikalan</h1>
                                <h3>The Computer Science Society of PGDAV College<br /><br /><hr/></h3>
                                <p>"You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers."~ <i>Walter Lippman</i>
                                    <br /><br />
                                    Parikalan- The Computer Science Society of P.G.D.A.V. College was formed with one objective- unification of students of the Computer Science Department in a way that helps them grow through various activities and opportunities. <br />
                                    The society has 4 constituents: Netweavers, Codebots, Quizbots and EWS (Elocution, Workshop and Seminar). All these teams coordinate with each other to conduct events throughout the year. At the same time, the teams also conduct their own training sessions where they share information and learn new things.
                                    All in all, the Parikalan society strives to shape young minds in a way that every student is technically sound but at the same time they are holistically developed into better humans.</p>
                            </div>
                        </div>
                        
                        <br /><br /><br /><br />

                        <div className="row">
                            <div className="container3">
                                <div className="column">
                                    <div className="card">
                                        <h2>A Word from Teacber</h2>
                                        <p>aliquet. In fringilla interdum ex, id volutpat tellus elementum eget. Nunc et felis nec nibh dapibus cursus. Proin ullamcorper vulputate tincidunt. Sed quis neque at dui molestie tristique in id turpis. Cras eleifend commodo nunc, at vestibulum lectus ullamcorper eu. In euismod mauris tellus, non tempus odio vive</p>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="card">
                                        <h2>A  Word from President</h2>
                                        <p>aliquet. In fringilla interdum ex, id volutpat tellus elementum eget. Nunc et felis nec nibh dapibus cursus. Proin ullamcorper vulputate tincidunt. Sed quis neque at dui molestie tristique in id turpis. Cras eleifend commodo nunc, at vestibulum lectus ullamcorper eu. In euismod mauris tellus, non tempus odio vive</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
                )
}

                export default Home
