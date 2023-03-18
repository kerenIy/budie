import React from "react";
import header from "https://kerenIy.github.io/budie/src/header-img.svg";

function Heading() {
  return (
    <div className="header">
      <div className="flex m-30">
        <div className="text">
          <p className="header-text capitalize">
            A better and smarter way to <br />
            manage your finances with ease
          </p>
          <p className="uppercase">
            Manage your finances with your best{" "}
            <span className="logo">Budie&trade;</span>
          </p>
          <div>
            <button className="button">get started</button>
            <span className="capitalize"> view demo</span>
          </div>
        </div>

        <div className="illustration">
          <img src={header} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Heading;
