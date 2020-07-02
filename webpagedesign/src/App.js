import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import MetricBox from "./components/MetricBox/MetricBox";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MetricBox />
      </main>
    </div>
  );
}

export default App;
