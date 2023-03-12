import React from "react";

import microsoft from "../assets/microsoft 1.svg";
import flutterwave from "../assets/flutter 1.svg";

import netflix from "../assets/netflix 1.svg";
import google from "../assets/google 1.svg";

function Partners() {
  return (
    <div>
      <div className="m-30">
        <p className="head-text">Partners</p>
        <img src={microsoft} alt="" className="companies" />
        <img src={flutterwave} alt="" className="companies" />
        <img src={netflix} alt="" className="companies" />
        <img src={google} alt="" className="companies" />
      </div>
    </div>
  );
}

export default Partners;
