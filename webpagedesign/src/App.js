import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import MetricBox from "./components/MetricBox/MetricBox";
import IncomeStatementBox from "./components/IncomeStatementBox/IncomeStatementBox";
import CashFlowBox from "./components/CashFlowBox/CashFlowBox";
import Toolbarbot from "./components/Toolbar/Toolbarbot/Toolbarbot";
import Scrollupbutton from "./components/Scrollupbutton/Scrollupbutton";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          zIndex: "9999",
        }}
      >
        <MetricBox />
      </main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          borderTop: "1px solid gray",
        }}
      >
        <IncomeStatementBox />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          borderTop: "1px solid gray",
          marginBottom: "50px",
        }}
      >
        <CashFlowBox />
      </div>
      <Toolbarbot />
      <div
        style={{
          marginBottom: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <Scrollupbutton />
      </div>
    </div>
  );
}

export default App;
