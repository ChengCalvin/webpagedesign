import React from "react";

import "./DrawerToggle.css";

export default (props) => (
  <div className="Toggle-button" onClick={props.clicked}>
    <div className="Toggle-button_line" />
    <div className="Toggle-button_line" />
    <div className="Toggle-button_line" />
  </div>
);
