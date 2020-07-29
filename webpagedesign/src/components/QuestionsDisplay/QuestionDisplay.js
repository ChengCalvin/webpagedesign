import React, { useState } from "react";

import MetricCheckBox from "../MetricCheckBox/MetricCheckBox";

import "./QuestionDisplay.css";

export default (props) => {
  const [isChecked, setIsChecked] = useState(null);
  const [isCheckedCounter, setIsCheckedCounter] = useState(0);

  const isCheckedHandler = (id) => {
    setIsChecked(id);
    setIsCheckedCounter((isCheckedCounter) => isCheckedCounter + 1);
  };
  const isUncheckedHandler = (id) => {
    setIsChecked(null);
    setIsCheckedCounter((isCheckedCounter) => isCheckedCounter - 1);
  };

  const questions = [
    {
      Question: "What should you be looking at?",
      Question_Description:
        "Check these metrics to stay on top of your financial health",
      metric: [
        { Label: "Revenue", Description: "123", checkedId: 0 },
        {
          Label: "Cost of Goods Sold (COGS)",
          Description: "blah blah blah",
          checkedId: 1,
        },
        {
          Label:
            "EBITDA (Earnings before Interest, Tax, Deprecitation & Amortization)",
          Description: "wow ebidta?",
          checkedId: 2,
        },
        { Label: "Net Income", Description: "blah blah blah", checkedId: 3 },
        {
          Label: "Abnormal Costs",
          Description: "blah blah blah",
          checkedId: 4,
        },
        {
          Label: "Days Receivables (aka Days Sales Outstanding)",
          Description: "blah blah blah",
          checkedId: 5,
        },
        { Label: "Inventory", Description: "blah blah blah", checkedId: 6 },
        {
          Label: "Days Inventory Outstanding (DIO)",
          Description: "blah blah blah",
          checkedId: 7,
        },
        {
          Label: "Days Payable Outstanding (DPO)",
          Description: "blah blah blah",
          checkedId: 8,
        },
        { Label: "Quick Ratio", Description: "blah blah blah", checkedId: 9 },
        {
          Label: "Debt to Total Assets (Debt Ratio)",
          Description: "blah blah blah",
          checkedId: 10,
        },
        { Label: "Gross Margin", Description: "blah blah blah", checkedId: 11 },
        {
          Label: "Net Profit Margin",
          Description: "blah blah blah",
          checkedId: 12,
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
          checkedId: 13,
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
          checkedId: 14,
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
                  key={metric.Label}
                  boxChecked={isChecked === metric.checkedId}
                  boxUnchecked={() => isUncheckedHandler(metric.checkedId)}
                  boxIsChecked={() => isCheckedHandler(metric.checkedId)}
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
