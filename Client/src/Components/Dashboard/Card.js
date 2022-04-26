import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div>
      <div className={classes.main1}>
        <p>{props.text}</p>
        <img src={props.img} alt="Hosital" />
        <p className={classes.p}>{props.data}</p>
      </div>
    </div>
  );
}

export default Card;
