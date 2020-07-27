import React from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

import "./MetricBox.css";

export default () => {
  const metric = [
    { Label: "Revenue", Description: "123" },
    { Label: "Cost of Goods Sold (COGS)", Description: "blah blah blah" },
    {
      Label:
        "EBITDA (Earnings before Interest, Tax, Deprecitation & Amortization)",
      Description: "wow ebidta?",
    },
    { Label: "Net Income", Description: "blah blah blah" },
    { Label: "Abnormal Costs", Description: "blah blah blah" },
    {
      Label: "Days Receivables (aka Days Sales Outstanding)",
      Description: "blah blah blah",
    },
    { Label: "Inventory", Description: "blah blah blah" },
    {
      Label: "Days Inventory Outstanding (DIO)",
      Description: "blah blah blah",
    },
    { Label: "Days Payable Outstanding (DPO)", Description: "blah blah blah" },
    { Label: "Quick Ratio", Description: "blah blah blah" },
    {
      Label: "Debt to Total Assets (Debt Ratio)",
      Description: "blah blah blah",
    },
    { Label: "Gross Margin", Description: "blah blah blah" },
    { Label: "Net Profit Margin", Description: "blah blah blah" },
  ];
  return (
    <div className="MetricBox">
      <div className="MetricBox__title">
        <h2>What should you be looking at?</h2>
        <p>Check these metrics to stay on top of your financial health</p>
      </div>
      <div className="Item__Styling">
        {metric.map((item) => (
          <MetricCheckBox value={item.Description}>{item.Label}</MetricCheckBox>
        ))}
      </div>
    </div>
  );
};
