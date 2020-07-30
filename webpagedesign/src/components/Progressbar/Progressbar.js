import React from "react";

export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(245, 245, 245)",
        width: "100%",
        height: "4px",
        marginTop: "4.3rem",
        position: "fixed",
        top: "0",
      }}
    >
      <div
        style={{
          width: `${props.counter}%`,
          backgroundColor: "rgb(26, 149, 250)",
        }}
      ></div>
    </div>
  );
};
