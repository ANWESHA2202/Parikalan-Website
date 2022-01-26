import React from 'react';
import data from '../data/Xenium.json';
import './Xenium.css';

function Xenium() {
  return (
    <div className='Xenium'>
        <div id="cards">
            {data.map((post , index)=>{
              
              return(
                <>
                  {index.map((post , index)=>{
                
                    return(
                      <div className="glass-card">
                      <h2>{post.name}</h2>
                      <div className="cards-info">{post.glass}</div>
                      <div className="cards-button"><a href="#events"><button>Explore More &#8594;</button></a></div>
                      </div>
                    )
                })}
                  </>
                )
            })}
        </div>
    </div>
  );
}

export default Xenium;

