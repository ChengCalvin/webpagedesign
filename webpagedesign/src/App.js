import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import Toolbarbot from "./components/Toolbar/Toolbarbot/Toolbarbot";
import Scrollupbutton from "./components/Scrollupbutton/Scrollupbutton";
import Progressbar from './components/Progressbar/Progressbar';
import QuestionDisplay from './components/QuestionsDisplay/QuestionDisplay'

function App() {

  return (
    <div>
      <Toolbar />
      <Progressbar />
      <main
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuestionDisplay />
      </main>

        <Scrollupbutton />

        <Toolbarbot />
    </div>
  );
}

export default App;
