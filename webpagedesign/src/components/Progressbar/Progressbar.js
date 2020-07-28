import React, {useState, useEffect} from 'react';

export default () => {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [width, setWidth] = useState(0);

    
    useEffect(() => {
        //let width = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.offsetHeight)) * 100;
        const onScroll = (event) => {
        setScrollTop(event.target.documentElement.scrollTop);
        setScrolling(event.target.documentElement.scrollTop > 0);
        };
      window.addEventListener('scroll', onScroll);
      let width = parseInt((scrollTop / (document.documentElement.scrollHeight - document.documentElement.offsetHeight)) * 100);
      setWidth(width);
      return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop])

    return (     
    <div style={{ display: 'flex', backgroundColor: "rgb(245, 245, 245)", width: "100%", height:"4px", marginTop: "0.8rem", position:"fixed"}} >
        <div style={{width: `${width}%`, backgroundColor:"rgb(26, 149, 250)"}}></div>
    </div>
    )

}