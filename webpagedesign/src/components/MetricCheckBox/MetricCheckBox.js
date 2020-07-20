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
        <div className="Checkbox__Style">
          <input type="checkbox" id="mycheck" />
        </div>
        <div className="Label__Dropdown-item__Spacing">
          <label className="Label__Styling">{props.children}</label>
          <button className="Dropdown__Item" onClick={toggleDescriptionHandler}>
            V
          </button>
        </div>
      </div>
      {open ? (
        <div className="Description__Box">{props.value}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
