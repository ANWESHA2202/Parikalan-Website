import React from 'react';
import './Xenium.css';
import { Link } from 'react-router-dom';
import data from '../data/Xenium.json';

export default function Events(props) {
    return (
  <div id='events'>
       <div className="all-events-name">
            <Link to="/xenium/coding"><div className="event-name highlight" >Code Crusade</div></Link>
            <Link to="/xenium/webdev"><div className="event-name" >Web Designing</div></Link>
            <Link to="/xenium/impromptu"><div className="event-name" >Impromptu Relay</div></Link>
            <Link to="/xenium/gd"><div className="event-name" >Group Discussion</div></Link>
        </div>
      {/* {data.map((post, index)=>{
          return(
            <> */}
            
        <div id="code-crusade" className="event-description">
            <div className="event-short-description">
                <h2>{props.content.name}</h2>
            </div>
            <div className="event-poster-and-rules">
                <img className="event-poster" src="crusade.jpg" />
                <div className="event-rules">
                    <div>
                    <h4>{props.content.date}<br/>{props.content.time}</h4>
                    <h3 className="mt-5px">Rules:</h3>
                    <ol>
                        {/* {post.rules.map((post, index)=>{
                            return(
                                <div>
                                    <p>{post}</p>
                                </div>
                            )
                        })} */}
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
// var wd = document.getElementById('web-designing');
// var ir = document.getElementById('impromptu-relay');
// var gd = document.getElementById('group-discussion');

// function code_crusade() {
//     cc.classList.remove('hidden');
//     wd.classList.add('hidden');
//     ir.classList.add('hidden');
//     gd.classList.add('hidden');

//     document.getElementById('nav_cc').classList.add('highlight');
//     document.getElementById('nav_wd').classList.remove('highlight');
//     document.getElementById('nav_ir').classList.remove('highlight');
//     document.getElementById('nav_gd').classList.remove('highlight');
    
// }
// function web_designing() {
//     cc.classList.add('hidden');
//     wd.classList.remove('hidden');
//     ir.classList.add('hidden');
//     gd.classList.add('hidden');
    
//     document.getElementById('nav_cc').classList.remove('highlight');
//     document.getElementById('nav_wd').classList.add('highlight');
//     document.getElementById('nav_ir').classList.remove('highlight');
//     document.getElementById('nav_gd').classList.remove('highlight');
// }
// function impromptu_relay() {
//     cc.classList.add('hidden');
//     wd.classList.add('hidden');
//     ir.classList.remove('hidden');
//     gd.classList.add('hidden');
    
//     document.getElementById('nav_cc').classList.remove('highlight');
//     document.getElementById('nav_wd').classList.remove('highlight');
//     document.getElementById('nav_ir').classList.add('highlight');
//     document.getElementById('nav_gd').classList.remove('highlight');
// }
// function group_discussion() {
//     cc.classList.add('hidden');
//     wd.classList.add('hidden');
//     ir.classList.add('hidden');
//     gd.classList.remove('hidden');
    
//     document.getElementById('nav_cc').classList.remove('highlight');
//     document.getElementById('nav_wd').classList.remove('highlight');
//     document.getElementById('nav_ir').classList.remove('highlight');
//     document.getElementById('nav_gd').classList.add('highlight');
// }

// function show_events_name() {
//     var x = document.getElementById("all-events-name");
//     if (x.style.display === "flex") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "flex";
//     }
//   }