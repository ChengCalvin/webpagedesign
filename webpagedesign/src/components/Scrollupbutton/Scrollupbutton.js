import React, {useState, useEffect} from "react";

import Backtotop from "../../images/back_to_top.png";
import './Scrollupbutton.css'

export default () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const scrollupHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect ( () => {
    const onScroll = (event) => {
      // console.log(event.target.documentElement.offsetHeight)
      // console.log(event.target.documentElement.scrollHeight)
      // console.log(event.target.documentElement.scrollTop)
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop > 0);
    } ;
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop])

  return (
    <div className={(scrolling) ? "Back__to__top__button" : "Hide-button"} >
      <img
        style={{ width: "100%", height: "100%" }}
        src={Backtotop}
        alt="back_to_top_button"
        onClick={scrollupHandler}
      />
    </div>
  );
};
