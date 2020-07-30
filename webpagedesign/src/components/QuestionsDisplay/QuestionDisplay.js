import React, { useState } from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

import "./QuestionDisplay.css";

export default (props) => {
  const questions = [
    {
      Question: "What should you be looking at?",
      Question_Description:
        "Check these metrics to stay on top of your financial health",
      metric: [
        { Label: "Revenue", Description: "123" },
        {
          Label: "Cost of Goods Sold (COGS)",
          Description: "blah blah blah",
        },
        {
          Label:
            "EBITDA (Earnings before Interest, Tax, Deprecitation & Amortization)",
          Description: "wow ebidta?",
        },
        { Label: "Net Income", Description: "blah blah blah" },
        {
          Label: "Abnormal Costs",
          Description: "blah blah blah",
        },
        {
          Label: "Days Receivables (aka Days Sales Outstanding)",
          Description: "blah blah blah",
        },
        { Label: "Inventory", Description: "blah blah blah" },
        {
          Label: "Days Inventory Outstanding (DIO)",
          Description: "blah blah blah",
        },
        {
          Label: "Days Payable Outstanding (DPO)",
          Description: "blah blah blah",
        },
        { Label: "Quick Ratio", Description: "blah blah blah" },
        {
          Label: "Debt to Total Assets (Debt Ratio)",
          Description: "blah blah blah",
        },
        { Label: "Gross Margin", Description: "blah blah blah" },
        {
          Label: "Net Profit Margin",
          Description: "blah blah blah",
        },
      ],
    },
    {
      Question: "What is an Income Statment?",
      Question_Description:
        "Understanding your revenues and expenses you can figure out where you are doing well and where you can improve",
      metric: [
        {
          Label: "Fill out Income Statement",
          Description: "Here is the form to fill",
        },
      ],
    },
    {
      Question: "What is Cash Flow Statment?",
      Question_Description:
        "The cash flow statement tells you how much money is entering and leaving your business",
      metric: [
        {
          Label: "Fill out Cash Flow Statement",
          Description: "Here is the form to fill",
        },
      ],
    },
  ];

  return (
    <div className="Box-Display">
      {questions.map((question) => (
        <div key={question.Question}>
          <div>
            <h1>{question.Question}</h1>
            <p>{question.Question_Description}</p>
          </div>
          <div>
            {question.metric.map((metric, i) => {
              return (
                <MetricCheckBox
                  value={metric.Description}
                  key={i}
                  checkAdd={props.checkAdd}
                  checkSubtract={props.checkSubtract}
                >
                  {metric.Label}
                </MetricCheckBox>
              );
            })}
          </div>
          <div
            style={{
              width: "85%",
              borderBottom: "1px solid gray",
              marginLeft: "5%",
              marginTop: "5rem",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
