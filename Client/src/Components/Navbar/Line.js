import React from "react";
import { useState } from "react";
import classes from "./Line.module.css";

function Line(props) {
  const [click, setClick] = useState(false);
  const clickHandler = (e) => {
    setClick(!click);
    props.setHandler(!click);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${classes.container} ${click ? classes.containerClick : ""}`}
    >
      <div className={`${classes.line1} ${classes.line}`}></div>
      <div className={`${classes.line2} ${classes.line}`}></div>
      <div className={`${classes.line3} ${classes.line}`}></div>
    </div>
  );
}

export default Line;
