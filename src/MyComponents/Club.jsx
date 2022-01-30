import React from "react";
// import data from "./data.json";
import "./club.css";
import gif from "./giphy.gif";

export default function Club({clubData}) {
    return (
        <>
        
        {clubData.map((post, index) =>{
            const {club, quote, Para, mentor, members} = post;

            return(
            <div className="Container" key={club}>
                <div className="first-container">
                    <div className="AnimeHeading">
                        <h1 data-text={post.club}>{club}</h1>
                    </div>

                    <h3 className="header center">About the Club</h3>
                    {quote.map((post, index) =>{
                        return(
                            <div className="center quote normie-text">
                                {post}
                            </div>
                        );
                    })}
                    <div className="box1">
                        <div className="intro-text">
                            {Para.map((post, index) =>{
                                return(
                                    <div className="intro">{post}</div>
                                )
                            })}
                        </div>
                        <div class="gif"> <iframe src={gif} width="400" height="270" class="giphy-embed" ></iframe></div>
                    </div>
                </div>
                <div className="core_team">
                    <h3 className="superheader center">Core Team</h3>
                    {/* Mentors */}
                    <h4 className="center header">MENTOR</h4>

                    <div className="mentor-container">
                        {mentor.map((post, index)=>{
                            return(
                                <div className="mentor">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="profile-img">
                                                <img src={post.img} alt={post.name} className="photo" style={{width:"100px" , height:"100px"}}/>
                                                <h2 className="mentor-name center">{post.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <p>COURSE</p>
                                            <p>YEAR</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* MEMBERS */}
                    <h4 className="center member">MEMBERS</h4>

                    <div className="mentor-container">
                       {members.map((post, index)=>{
                           return(
                            <div className="mentor">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="profile-img">
                                        <img src={post.img} alt={post.name} className="photo" style={{width:"100px" , height:"100px"}}/>
                                        <h2 className="mentor-name center">{post.name}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <p>{post.course}</p>
                                    <p>{post.year}</p>
                                </div>
                            </div>
                        </div>
                           )
                       })}
                    </div>
                </div>
            </div>
            )
        })}
                

        </>
    )
}
