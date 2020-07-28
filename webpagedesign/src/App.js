import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import MetricBox from "./components/MetricBox/MetricBox";
import IncomeStatementBox from "./components/IncomeStatementBox/IncomeStatementBox";
import CashFlowBox from "./components/CashFlowBox/CashFlowBox";
import Toolbarbot from "./components/Toolbar/Toolbarbot/Toolbarbot";
import Scrollupbutton from "./components/Scrollupbutton/Scrollupbutton";

function App() {
  return (
    <div>
      <Toolbar />
      <div style={{top: '0', display: 'flex', flexWrap: 'wrap'}} >

      </div>
      <main
        style={{
          marginTop: "100px",
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
          marginBottom: "50px",
        }}
      >
        <CashFlowBox />
      </div>
      <div
        style={{
          bottom: '0',
          right: '0',
          marginBottom: "50px",
          marginRight: '1.5rem',
          position:'fixed'
        }}
      >
        <Scrollupbutton />
      </div>
        <Toolbarbot />
    </div>
  );
}

export default App;
