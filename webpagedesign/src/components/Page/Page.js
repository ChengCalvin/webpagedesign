import React, { useState } from "react";

import Toolbar from "../Toolbar/Toolbar";
import Toolbarbot from "../Toolbar/Toolbarbot/Toolbarbot";
import Scrollupbutton from "../Scrollupbutton/Scrollupbutton";
import Progressbar from "../Progressbar/Progressbar";
import QuestionDisplay from "../QuestionsDisplay/QuestionDisplay";

import "./Page.css";

export default () => {
  const [Counter, setCounter] = useState(0);

  const checkAddUpdate = () => {
    setCounter((Counter) => Counter + 1);
  };
  const checkSubtractUpdate = () => {
    setCounter((Counter) => Counter - 1);
  };
  return (
    <div>
      <Toolbar counter={Counter} />
      <Progressbar counter={+((Counter / 15) * 100)} />
      <div className="All__Done">
        <div>All done</div>
      </div>
      <main
        style={{
          marginBottom: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuestionDisplay
          checkAdd={checkAddUpdate}
          checkSubtract={checkSubtractUpdate}
        />
      </main>
      <Scrollupbutton />
      <Toolbarbot />
    </div>
  );
};
