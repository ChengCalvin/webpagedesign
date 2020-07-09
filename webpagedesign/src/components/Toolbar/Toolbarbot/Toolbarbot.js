import React from "react";

import "./Toolbarbot.css";
import Whitelogo from "../../../images/white logo.png";

export default (props) => (
  <header className="Toolbarbot">
    <nav className="Toolbarbot__nav">
      <div className="Toolbarbot__logo">
        <img
          style={{ height: "25px", width: "150px" }}
          src={Whitelogo}
          alt="white logo"
        />
      </div>
      <div className="Toolbarbot__tc">
        <p>
          <a href="/">Terms and Conditions </a>
        </p>
      </div>
    </nav>
  </header>
);
