import React from "react";

import mobile from "https://kerenIy.github.io/src/assets/final.png";
import apple from "https://kerenIy.github.io/src/assets/appstore.svg";
import playstore from "https://kerenIy.github.io/src/assets/playstore.svg";

function Mobile() {
  return (
    <div className="mobile">
      <div className="flex m-30 m-15">
        <div>
          <img src={mobile} alt="" />
        </div>

        <div>
          <p className="header-text">
            Download the <span className="logo">Budie &trade;</span> <br />
            mobile app
          </p>
          <p className="normal capitalize not-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            <br />
            quam, dolore. Lorem ipsum dolor sit.
          </p>

          <div className="flex">
            <img src={apple} alt="" className="store" />
            <img src={playstore} alt="" className="store" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
