// import { render } from "@testing-library/react";
import React from "react";
import data from "./data.json";
import "./club1.css";

export default function Club() {
  return (
    <div>
      {data.map((post, index) => {
        return (
          <div className="Container">
            <h1 className="center superheader">{post.club}</h1>
            <h3 className="header center">About the Club</h3>

            {post.quote.map((quot, index) => {
              return (
                <div className="center quote">
                  <p className="normie-text">{quot}</p>
                </div>
              );
            })}

            {post.Para.map((p, index) => {
              return (
                <div className="box1">
                  <p className="intro normie-text">{p}</p>
                </div>
              );
            })}

            <div className="core_team">
              <h3 className="superheader center">CORE TEAM</h3>
              <h4 className="center header">MENTORS</h4>
              <div className="mentor">
              {post.mentor.map((details, index) => {
                return (
                    <div className="img-card">
                      <img src={details.img} alt={details.name} />
                      <p className="center">
                        <strong>{details.name}</strong>
                      </p>
                    </div>
                );
              })}
              </div>
              
              <h4 className="center header">MEMBERS</h4>
              <div className="member">
                {post.members.map((details, index)=>{
                  return(
                  <div className="img-card">
                    <img src={details.img} alt={details.name} />
                    <p className="center">
                      <strong>{details.name}</strong>
                    </p>
                    <p className="center">
                      <strong>{details.course}</strong>
                    </p>
                    <p className="center">
                      <strong>{details.year}</strong>
                    </p>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
