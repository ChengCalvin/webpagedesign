import React from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

import "./CashFlowBox.css";

export default () => (
  <div className="Cash-Flow-Box">
    <h2>What is Cash Flow Statment?</h2>
    <p>
      The cash flow statement tells you how much money is entering and leaving
      your business
    </p>
    <div>
      <MetricCheckBox value="Cash flow box">
        Fill out Cash Flow Statement
      </MetricCheckBox>
    </div>
  </div>
);
