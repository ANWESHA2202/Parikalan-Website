import React from 'react';
import "./club.css";


const Club_nav = ({clubName, filterData}) => {
    console.log(clubName);
  return (
    <>
      <nav className="navbar">
          <div className="btn-group">
            {clubName.map((post, index) =>{
                return(
                    <>
                    {/* <p>{post}</p> */}
                    <button className="btn-group__item" onClick={() => filterData(post)}>{post}</button>

                    </>
                )
            })}
          </div>
      </nav>
    </>
  )
}

export default Club_nav

