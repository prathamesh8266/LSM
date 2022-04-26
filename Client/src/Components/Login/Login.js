import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.main}>
      <form className={classes.div}>
        <div className={classes.flex}>
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className={classes.flex}>
          <label>Password</label>
          <input ype="password" placeholder="Password" />
        </div>
        <button>Submit</button>
        <p>
          <span>
            <Link to="/Signup">If your new clik here</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
