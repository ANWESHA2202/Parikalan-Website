import React from "react";
import data from "../data/Xenium.json";
import "./Xenium.css";

function Xenium() {
  let dat = data;
  var events = []
  Object.keys(dat).forEach((key,ind)=>{
     events.push(dat[key])
  })
  return (
    <div className="Xenium">
      <div id="cards">
     {events.map(even=>{
       return(
         <>
           <div className="glass-card" key={even.name}>
        <h2>{even.name}</h2>  
          <div className="cards-info">{even.glass}</div>
          
        <div className="cards-button">
          <a href="#events">
            <button>Explore More &#8594;</button>
          </a>
        </div>
      </div>

         </>
         
       )
     })}
    
      </div>
    </div>
  );
}

export default Xenium;
