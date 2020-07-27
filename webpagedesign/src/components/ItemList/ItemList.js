import React from "react";

import "./ItemList.css";

export default (props) => (
  <div className="Item__List" onClick={props.clicked}>
    {props.children}
  </div>
);
