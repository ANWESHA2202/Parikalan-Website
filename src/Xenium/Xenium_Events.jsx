import React from 'react';
import './Xenium_Style.css';
import { Link } from 'react-router-dom';

export default function Events(props) {
    return (
        <div id='events'>
            {/* <!-- Added hamburger menu --> */}
            {/* <div class="all-events-name-mobile">
                <div class="heading">EVENTS</div>
                <div className="icon" onClick={show_events_name}>
                    <i class="fa fa-bars"></i>
                </div>
            </div> */}
            {/* <!-- end --> */}
            <div className="all-events-name">
                <Link className='event-name-link' to="/xenium/coding"><div id="nav_cc" className="event-name highlight" onClick={code_crusade}>Code Crusade</div></Link>
                <Link className='event-name-link' to="/xenium/webdev"><div id="nav_wd" className="event-name" onClick={web_development}>Web Development</div></Link>
                <Link className='event-name-link' to="/xenium/impromptu"><div id="nav_ir" className="event-name" onClick={impromptu_relay}>Impromptu Relay</div></Link>
                <Link className='event-name-link' to="/xenium/gd"><div id="nav_gd" className="event-name" onClick={group_discussion}>Group Discussion</div></Link>
            </div>

            <div className="event-description">
                <div className="event-short-description">
                    <h2>{props.content.name}</h2>
                </div>
                <div className="event-poster-and-rules">
                    <img className="event-poster" alt="" src={"./cc.jpg"} />
                    <div className="event-rules">
                        <div>
                            <h4>{props.content.date}<br />{props.content.time}</h4>
                            <h3 className="mt-5px">Rules:</h3>
                            <ol>
                                {props.content.rules.map((post, index) => {
                                    return (
                                        <div>
                                            <p>{post}</p>
                                        </div>
                                    )
                                })}
                            </ol>
                            <h3 className="mt-5px">Event Coordinator:</h3>
                            <ul>
                                <li>Arpit Samadhiya - 6398921252</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* </>
          ) */}
            {/* })} */}
        </div>);
}
// var cc = document.getElementById('code-crusade');
// var wd = document.getElementById('web-development');
// var ir = document.getElementById('impromptu-relay');
// var gd = document.getElementById('group-discussion');

function code_crusade() {
    // cc.classList.remove('hidden');
    // wd.classList.add('hidden');
    // ir.classList.add('hidden');
    // gd.classList.add('hidden');

    document.getElementById('nav_cc').classList.add('highlight');
    document.getElementById('nav_wd').classList.remove('highlight');
    document.getElementById('nav_ir').classList.remove('highlight');
    document.getElementById('nav_gd').classList.remove('highlight');

}
function web_development() {
    // cc.classList.add('hidden');
    // wd.classList.remove('hidden');
    // ir.classList.add('hidden');
    // gd.classList.add('hidden');

    document.getElementById('nav_cc').classList.remove('highlight');
    document.getElementById('nav_wd').classList.add('highlight');
    document.getElementById('nav_ir').classList.remove('highlight');
    document.getElementById('nav_gd').classList.remove('highlight');
}
function impromptu_relay() {
    // cc.classList.add('hidden');
    // wd.classList.add('hidden');
    // ir.classList.remove('hidden');
    // gd.classList.add('hidden');

    document.getElementById('nav_cc').classList.remove('highlight');
    document.getElementById('nav_wd').classList.remove('highlight');
    document.getElementById('nav_ir').classList.add('highlight');
    document.getElementById('nav_gd').classList.remove('highlight');
}
function group_discussion() {
    // cc.classList.add('hidden');
    // wd.classList.add('hidden');
    // ir.classList.add('hidden');
    // gd.classList.remove('hidden');

    document.getElementById('nav_cc').classList.remove('highlight');
    document.getElementById('nav_wd').classList.remove('highlight');
    document.getElementById('nav_ir').classList.remove('highlight');
    document.getElementById('nav_gd').classList.add('highlight');
}

// function show_events_name() {
//     // e.preventDefault();
//     var x = document.getElementById("all-events-name");
//     if (x.style.display === "flex") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "flex";
//     }
//   }