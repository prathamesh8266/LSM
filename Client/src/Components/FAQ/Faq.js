import React from "react";
import classes from "./Faq.module.css";

function Faq() {
  return (
    <div className={classes.main}>
      <p className={classes.question}>1. How can I create an account?</p>
      <p className={classes.answer}>
        You can request the admin to create the account for you.
      </p>
      <p className={classes.question}>
        2. Do I need to pay anything to create an account?
      </p>
      <p className={classes.answer}>No. It is free to create an account.</p>
      <p className={classes.question}>3. How can I contact the doctor?</p>
      <p className={classes.answer}>
        You can get the doctor details from this website and contact.
      </p>
      <p className={classes.question}>
        4. How can I make appointment with doctor?
      </p>
      <p className={classes.answer}>
        You can contact the hospital and get an appointment. You can get the
        hospital contact details from this website.
      </p>
      <p className={classes.question}>
        5. How can I get to know whether hospital has available bed or not?
      </p>
      <p className={classes.answer}>
        You can get to know by looking into this website.
      </p>
      <p className={classes.question}>6. How will you store the records?</p>
      <p className={classes.answer}>
        We will store the records in centrialised database in encrypted form.
      </p>
      <p className={classes.question}>7. Are my records safe?</p>
      <p className={classes.answer}>Yes. They are safe.</p>
      <p className={classes.question}>
        8. How can I view my previous medical reports?
      </p>
      <p className={classes.answer}>
        You can view the previous medical reports in the records page.
      </p>
    </div>
  );
}

export default Faq;
