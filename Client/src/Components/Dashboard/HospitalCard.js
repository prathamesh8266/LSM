import React from "react";
import classes from "./Card.module.css";

function HospitaCard(props) {
  return (
    <div className={classes.main2}>
      <p>{props.text}</p>
      <img src={props.img} alt="Hosital" />
      <p>{props.data.Hospital}</p>
    </div>
  );
}

export default HospitaCard;
