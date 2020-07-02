import React, { useState } from "react";

import "./MetricCheckBox.css";

export default (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Box__Item">
      <input type="checkbox" id="mycheck" />
      <label className="Label__Styling">Revenue</label>
      <button className="Dropdown__Item" onClick={() => setOpen(!open)}>
        V
      </button>
      {open ? <p>drop down</p> : <p></p>}
    </div>
  );
};
