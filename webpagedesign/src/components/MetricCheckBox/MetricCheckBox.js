import React, { useState } from "react";

import "./MetricCheckBox.css";

export default (props) => {
  const [open, setOpen] = useState(false);
  const toggleDescriptionHandler = () => {
    setOpen((open) => !open);
  };
  return (
    <div>
      <div className="Box__Item">
        <input className="Checkbox__Style" type="checkbox" id="mycheck" />
        <label className="Label__Styling">{props.children}</label>
        <button className="Dropdown__Item" onClick={toggleDescriptionHandler}>
          V
        </button>
      </div>
      {open ? (
        <div className="Description__Box">{props.value}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
