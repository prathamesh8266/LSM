import React from "react";
import hospitalLogo from "../../Images/HospitalLogo.jpg";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.main}>
      <div>
        <h1 className={classes.h1}>National E-Medical Service</h1>
        <h1 className={classes["h1_2"]}>Creating India's Health Ecosystem</h1>
        <p className={classes.p}>Health care made easy</p>
        <button className={classes.heroBtn}>Join Now</button>
      </div>
      <div>
        <img src={hospitalLogo} className={classes.logo} />
      </div>
    </div>
  );
}

export default Hero;
