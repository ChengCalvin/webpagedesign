import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import MetricBox from "./components/MetricBox/MetricBox";
import IncomeStatementBox from "./components/IncomeStatementBox/IncomeStatementBox";
import CashFlowBox from "./components/CashFlowBox/CashFlowBox";
import Toolbarbot from "./components/Toolbar/Toolbarbot/Toolbarbot";
import Scrollupbutton from "./components/Scrollupbutton/Scrollupbutton";
import Progressbar from './components/Progressbar/Progressbar';

function App() {

  return (
    <div>
      <Toolbar />
      <Progressbar />
      <main
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MetricBox />
      </main>
      <div
        style={{
          width: "85%",
          borderBottom: "1px solid gray",
          marginLeft: "5%",
          marginTop: "5rem",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <IncomeStatementBox />
      </div>
      <div
        style={{
          width: "85%",
          borderBottom: "1px solid gray",
          marginLeft: "5%",
          marginTop: "5rem",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "90px",
        }}
      >
        <CashFlowBox />
      </div>

        <Scrollupbutton />

        <Toolbarbot />
    </div>
  );
}

export default App;
