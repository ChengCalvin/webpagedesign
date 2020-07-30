import React from "react";

export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(245, 245, 245)",
        width: "100%",
        height: "4px",
        marginTop: "0.8rem",
        position: "fixed",
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
