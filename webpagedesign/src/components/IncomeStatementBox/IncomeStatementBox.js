import React from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

import "./IncomeStatementBox.css";

export default () => (
  <div className="Income-Statement-box">
    <h2>What is an Income Statment?</h2>
    <p>
      Understanding your revenues and expenses you can figure out where you are
      doing well and where you can improve
    </p>
    <div>
      <MetricCheckBox value="Please fill">
        Fill out Income Statement
      </MetricCheckBox>
    </div>
  </div>
);
