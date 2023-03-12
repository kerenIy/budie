import React from "react";

function Features() {
  return (
    <div>
      <div className="are-you-ready flex m-30 m-15">
        <div>
          <p className="header-text">
            Are you ready to level up <br />
            financially?
          </p>
          <button className="button color">Sign Up Now &#8594;</button>
        </div>
        <div>
          <p className="normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quo,
            enim placeat dolorem consequuntur pariatur eaque nsoicn.
          </p>

          <br />
          <br />

          <div className="flex">
            <div className="border-right">
              <p className="bold">Secure</p>
              <p className="not-bold">enjoy secure integrations</p>
            </div>
            <div className="border-right">
              <p className="bold">Fast</p>
              <p className="not-bold">get real-time updates </p>
            </div>
            <div>
              <p className="bold">Efficient</p>
              <p className="not-bold">efficient services 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features m-30 m-15">
        <p className="head-text">Features</p>

        <div className="flex m-15">
          <div className="box">
            <i class="fa-solid fa-piggy-bank"></i>
            <p className="normal">Integrate your bank accounts</p>
            <p className="not-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          <div className="box">
            <i class="fa-solid fa-user-group"></i>
            <p className="normal">Manage your finances with friends</p>
            <p className="not-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          <div className="box">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="normal">Track your finances all year round</p>
            <p className="not-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="features m-30 m-15">
        <div className="flex m-15">
          <div className="box">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="normal">Integrate your bank accounts</p>
            <p className="not-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          <div className="box">
            <i class="fa-solid fa-piggy-bank"></i>
            <p className="normal">Manage your finances with friends</p>
            <p className="not-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          <div className="box">
            <i class="fa-solid fa-user-group"></i>
            <p className="normal">Track your finances all year round</p>
            <p className="not-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
