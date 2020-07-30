import React, { useState } from "react";

import CheckedBox from "../../images/checked-box.png";

import "./MetricCheckBox.css";

export default (props) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const descriptionBoxIsOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="Box__Sizing">
      <div className="Box__Item">
        {isChecked ? (
          <div className="CheckBox-styling">
            <img
              style={{ width: "19px", height: "19px" }}
              src={CheckedBox}
              alt="Box-checked"
              id={props.checkboxId}
              onClick={() => {
                props.checkSubtract();
                setIsChecked(false);
              }}
            />
          </div>
        ) : (
          <div className="Checkbox__Style">
            <div
              className="Checkbox__Style-container"
              id={props.checkboxId}
              onClick={() => {
                props.checkAdd();
                setIsChecked(true);
              }}
            />
          </div>
        )}

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
