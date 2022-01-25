import React from 'react';
import './Xenium.css';
// import data from '../data/Xenium.json';

export default function Events(props) {
    return (
  <div id='events'>
       <div className="all-events-name">
            <div className="event-name highlight" >Code Crusade</div>
            <div className="event-name" >Web Designing</div>
            <div className="event-name" >Impromptu Relay</div>
            <div className="event-name" >Group Discussion</div>
        </div>
      {/* {data.map((post, index)=>{
          return(
            <> */}
        <div id="code-crusade" className="event-description">
            <div className="event-short-description">
                <h2>{props.name}</h2>
            </div>
            <div className="event-poster-and-rules">
                <img className="event-poster" src="crusade.jpg" />
                <div className="event-rules">
                    <p>
                    <h4>{props.date}<br/>{props.time}</h4>
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
                    </p>
                </div>
            </div>
        </div>
              {/* </>
          ) */}
       {/* })} */}
  </div>);
}
