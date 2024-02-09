import React from "react";
import leftArrow from "../../assets/forthSectionImages/leftArroe.svg"
import rightArrow from "../../assets/forthSectionImages/raightArrow.svg"
import Datastore from "./Datastore";
const Fourthsection = () => {
  return (
    <div className="fourth-section-container">
      <div className="top-section">
        <h1>Top Games</h1>
        <p>
          If you buy video 2 games, you will receive 1 video game for free,
          along with a <span>50%</span> discount.
        </p>
        <div>
          <button><img src={leftArrow} alt="" /></button>
          <button><img src={rightArrow} alt="" /></button>
        </div>
      </div>
      <div className="list-section">
        <div className="list">
            {Datastore.map((image,description)=>{
               <div>
                 <img src={image} alt="" />
                 <p>{description}</p>
               </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default Fourthsection;
