import React from "react";
import data from "./data.json";
import "./club.css";
import gif from "./giphy.gif";

export default function Club() {
    return (
        <>
        {data.map((post, index) =>{
            return(
                <div className="Container">
                <div className="first-container">
                    <div className="AnimeHeading">
                        <h1 data-text={post.club}>{post.club}</h1>
                    </div>

                    <h3 className="header center">About the Club</h3>
                    {post.quote.map((post, index) =>{
                        return(
                            <div className="center quote normie-text">
                                {post}
                            </div>
                        );
                    })}
                    <div className="box1">
                        <div className="intro-text">
                            {post.Para.map((post, index) =>{
                                return(
                                    <div className="intro">{post}</div>
                                )
                            })}
                        </div>
                        <div class="gif"> <iframe src={gif} width="400" height="270" class="giphy-embed" ></iframe></div>
                    </div>
                </div>
                
            </div>
            )
        })}
        </>
    )
}
