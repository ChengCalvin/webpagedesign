import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

export default (props) => (
  <div>
    <Backdrop show={props.show} clicked={props.clicked}>
      <div className="Modal__Style">
        {props.children}
        <div className="Close__Modal"></div>
      </div>
    </Backdrop>
  </div>
);
