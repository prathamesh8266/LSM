import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Images/national-health-authority_logo.jpg";
import nems from "../../Images/healthcare-made-convenient.png";
import Line from "./Line";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const [active, setActive] = useState(false);
  // console.log(active);
  return (
    <>
      <div className={classes.main}>
        <img src={logo} alt="NHA-logo" className={classes.logo} />
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link} to="/dashboard">
                Resources
              </Link>
            </li>
            <li className={classes.li}>
              <Link to="/faq" className={classes.link}>
                FAQ
              </Link>
            </li>
            <li className={classes.li}>Contact</li>
            <li className={classes.li}>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </li>
            <li className={classes.li}>Records</li>
            <li className={`${classes.li} ${classes.signup}`}>
              <Link to="/Signup" className={classes.link}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <Line setHandler={(state) => setActive(state)} />
      </div>
      <div>
        <ul className={active === true ? `${classes.ul1}` : `${classes.ul2}`}>
          <li className={classes.li}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/dashboard">
              Resources
            </Link>
          </li>
          <li className={classes.li}>FAQ</li>
          <li className={classes.li}>Contact</li>
          <li className={classes.li}>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
          </li>
          <li className={classes.li}>Records</li>
          <li className={`${classes.li} ${classes.signup}`}>
            <Link to="/Signup" className={classes.link}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
      {/* <img src={logo2} alt="logo2" /> */}
    </>
  );
}

export default Navbar;
