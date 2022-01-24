import React from 'react';
import './Xenium.css';
import data from '../data/Xenium.json';

export default function Events() {
    function code_crusade() {
        document.getElementById('code-crusade').classList.remove('hidden');
        document.getElementById('web-designing').classList.add('hidden');
        document.getElementById('impromptu-relay').classList.add('hidden');
        document.getElementById('group-discussion').classList.add('hidden');
    }

    function web_designing() {
        document.getElementById('code-crusade').classList.add('hidden');
        document.getElementById('web-designing').classList.remove('hidden');
        document.getElementById('impromptu-relay').classList.add('hidden');
        document.getElementById('group-discussion').classList.add('hidden');
    }

    function impromptu_relay() {
        document.getElementById('code-crusade').classList.add('hidden');
        document.getElementById('web-designing').classList.add('hidden');
        document.getElementById('impromptu-relay').classList.remove('hidden');
        document.getElementById('group-discussion').classList.add('hidden');
    }

    function group_discussion() {
        document.getElementById('code-crusade').classList.add('hidden');
        document.getElementById('web-designing').classList.add('hidden');
        document.getElementById('impromptu-relay').classList.add('hidden');
        document.getElementById('group-discussion').classList.remove('hidden');
    }
    
  return (
  <div id='events'>
       <div className="all-events-name">
            <div className="event-name highlight" onclick={code_crusade}>Code Crusade</div>
            <div className="event-name" onclick={web_designing}>Web Designing</div>
            <div className="event-name" onclick={impromptu_relay}>Impromptu Relay</div>
            <div className="event-name" onclick={group_discussion}>Group Discussion</div>
        </div>
      {data.map((post, index)=>{
          return(
            <>
        <div id="code-crusade" className="event-description">
            <div className="event-short-description">
                <h2>{post.name}</h2>
            </div>
            <div className="event-poster-and-rules">
                <img className="event-poster" src="crusade.jpg" />
                <div className="event-rules">
                    <p>
                    <h4>{post.date}<br/>{post.time}</h4>
                    <h3 className="mt-5px">Rules:</h3>
                    <ol>
                        {post.rules.map((post, index)=>{
                            return(
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
                    </p>
                </div>
            </div>
        </div>
              </>
          )
      })}
  </div>);
}
