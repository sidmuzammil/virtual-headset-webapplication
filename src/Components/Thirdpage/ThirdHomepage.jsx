import React from "react";
import "./Thirdpage.scss";
import viewersImage from "../../assets/thirdpageImages/viewers.svg";
import mainhero from "../../assets/thirdpageImages/mainhero.svg";
import twitterimage from "../../assets/thirdpageImages/twitterimage.svg";
import arrowimage from "../../assets/thirdpageImages/buttonarrow.svg";

const ThirdHomepage = () => {
  return (
    <div className="thirdpage-container">
      {/* left section */}

      <div className="description-area">
        <h1>Jane Wilson, Gaming Creator</h1>
        <p>
          A virtual headset creator is an individual or company that specializes
          in designing and manufacturing virtual reality headsets, also known as
          VR headsets.
        </p>
        <button>
          Read my blog <img src={arrowimage} alt="" />
        </button>
        <div className="viewers">
          <img src={viewersImage} alt="" />
          <p>+258K Views</p>
        </div>
      </div>

      {/* right section */}
      <div className="heroimage">
        <div className="girl-image">
          <img src={mainhero} alt="" />
        </div>
        <div className="twitter-image">
          <img src={twitterimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdHomepage;
