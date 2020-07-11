import React from "react";

import "./Backdrop.css";

export default (props) =>
  props.show ? (
    <div className="Backdrop" onClick={props.clicked}>
      {props.children}
    </div>
  ) : null;
