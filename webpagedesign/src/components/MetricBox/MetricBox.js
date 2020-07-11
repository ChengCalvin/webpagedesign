import React from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

import "./MetricBox.css";

export default () => (
  <div className="MetricBox">
    <div className="MetricBox__title">
      <h2>What should you be looking at?</h2>
      <p>Check these metrics to stay on top of your financial health</p>
    </div>
    <div className="Item__Styling">
      <MetricCheckBox value="123">Revenue</MetricCheckBox>
      <MetricCheckBox value="1234">Cost of Goods Sold (COGS)</MetricCheckBox>
      <MetricCheckBox value="12345">
        EBITDA (Earnings before Interest, Tax, Deprecitation & Amortization)
      </MetricCheckBox>
      <MetricCheckBox value="12345">Net Income</MetricCheckBox>
      <MetricCheckBox value="123">Abnormal Costs</MetricCheckBox>
      <MetricCheckBox value="123">
        Days Receivables (aka Days Sales Outstanding)
      </MetricCheckBox>
      <MetricCheckBox value="123">Inventory</MetricCheckBox>
      <MetricCheckBox value="123">
        Days Inventory Outstanding (DIO)
      </MetricCheckBox>
      <MetricCheckBox value="123">
        Days Payable Outstanding (DPO)
      </MetricCheckBox>
      <MetricCheckBox value="123">Quick Ratio</MetricCheckBox>
      <MetricCheckBox value="123">
        Debt to Total Assets (Debt Ratio)
      </MetricCheckBox>
      <MetricCheckBox value="123">Gross Margin</MetricCheckBox>
      <MetricCheckBox value="123">Net Profit Margin</MetricCheckBox>
    </div>
  </div>
);