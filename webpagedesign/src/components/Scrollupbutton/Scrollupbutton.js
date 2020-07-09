import React from "react";

import Backtotop from "../../images/back_to_top.png";

export default () => {
  const scrollupHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="Back__to__top__button">
      <img
        style={{ width: "70px", height: "70px" }}
        src={Backtotop}
        alt="back_to_top_button"
        onClick={scrollupHandler}
      />
    </div>
  );
};
