import React from "react";

function Navigation() {
  return (
    <div className="m-13">
      <div className="flex">
        <p className="logo">Budie &trade;</p>

        <nav>
          <a href="" className="links">
            Home
          </a>
          <a href="" className="links">
            About
          </a>
          <a href="" className="links">
            Contact
          </a>
          <a href="" className="links">
            FAQs
          </a>
        </nav>

        <div>
          <span>Login</span>
          <button className="button color">get started</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
