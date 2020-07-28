import React, { useState } from "react";

import "./MetricCheckBox.css";

export default (props) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const descriptionBoxIsOpen = () => {
    setOpen((open) => !open);
  };
  const isCheckedHandler = () => {
    setIsChecked((isChecked) => !isChecked);
  };
  return (
    <div className="Box__Sizing">
      <div className="Box__Item">
        <div className="Checkbox__Style">
          <div
            className="Checkbox__Style-container"
            style={{
              backgroundColor: isChecked ? "rgb(0, 162, 255)" : "transparent",
            }}
            onClick={isCheckedHandler}
          >
            <div
              className={
                isChecked
                  ? "Checkbox__Style-checked"
                  : "Checkbox__Style-unchecked"
              }
            ></div>
          </div>
        </div>
        <div className="Label__Dropdown-item__Spacing">
          <div>
            <label className="Label__Styling">{props.children}</label>
          </div>
          <div style={{ paddingTop: open ? "5px" : "" }}>
            <div
              className={open ? "Dropdown__Icon-open" : "Dropdown__Icon"}
              onClick={descriptionBoxIsOpen}
            ></div>
          </div>
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
