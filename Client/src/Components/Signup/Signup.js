import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className={classes.main}>
      <form className={classes.div}>
        <div className={classes.flex}>
          <label>Name</label>
          <input type="text" placeholder="Name" required />
        </div>
        <div className={classes.flex}>
          <label>Password</label>
          <input type="password" placeholder="Password" required />
        </div>
        <div className={classes.flex}>
          <label>Email</label>
          <input type="email" placeholder="Email" required />
        </div>
        <div className={classes.flex}>
          <label>Age</label>
          <input type="Number" placeholder="Age" required />
        </div>
        <div className={classes.flex}>
          <label>Phone</label>
          <input type="Number" placeholder="Phone number" required />
        </div>
        <button>Submit</button>
        <p>
          <span>
            <Link to="/Login"> If already a user clik here</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
