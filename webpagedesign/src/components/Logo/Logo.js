import React from "react";

import Icon from "../../images/icon.png";
import "./Logo.css";

export default () => (
  <div className="Logo">
    <a href="/">
      <img
        style={{ height: "3rem", width: "3rem" }}
        src={Icon}
        alt="icon"
      ></img>
    </a>
  </div>
);
