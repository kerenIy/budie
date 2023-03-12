import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer flex m-15 m-30">
        <div>
          <p className="logo">Budie &trade;</p>
          <p className="not-bold">Lorem ipsum dolor sit.</p>
        </div>

        <ul className="lists">
          <p className="bold">Company</p>
          <li className="not-bold">Careers</li>
          <li className="not-bold">About</li>
          <li className="not-bold">Cookies</li>
          <li className="not-bold">FAQs</li>
        </ul>

        <ul className="lists">
          <p className="bold">Quick links</p>
          <li className="not-bold">Blog</li>
          <li className="not-bold">Privacy</li>
          <li className="not-bold">Data Policy</li>
          <li className="not-bold">Terms of Use</li>
        </ul>

        <ul className="lists">
          <p className="bold">Contact</p>
          <li className="not-bold">+234 703 582 4902</li>
          <li className="not-bold">support@budie.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
