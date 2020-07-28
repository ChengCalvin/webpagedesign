import React from "react";

import Backtotop from "../../images/back_to_top.png";

export default () => {
  const scrollupHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="Back__to__top__button">
      <img
        style={{ width: "55px", height: "55px" }}
        src={Backtotop}
        alt="back_to_top_button"
        onClick={scrollupHandler}
      />
    </div>
  );
};
