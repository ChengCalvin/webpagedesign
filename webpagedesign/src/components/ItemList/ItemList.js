import React from "react";

import "./ItemList.css";

export default (props) => (
  <div className="Item__List" onClick={props.clicked}>
    <div className="Text-alignment">{props.children}</div>
  </div>
);
