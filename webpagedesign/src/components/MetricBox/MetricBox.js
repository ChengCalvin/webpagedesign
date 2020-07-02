import React from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

export default () => (
  <div className="MetricBox">
    <div className="MetricBox__title">
      <h2>What should you be looking at?</h2>
      <p>Check these metrics to stay on top of your financial health</p>
    </div>
    <div>
      <MetricCheckBox />
      <p>Check 1</p>
      <p>Check 2</p>
      <p>Check 3</p>
      <p>Check 4</p>
    </div>
  </div>
);
