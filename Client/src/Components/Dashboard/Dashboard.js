import React from "react";
import classes from "./Dashboard.module.css";
import Hospital from "../../Images/Hospital.png";
import Bed from "../../Images/Beds.png";
import HospitaCard from "./HospitalCard";
import Oxygen from "../../Images/Oxygen.png";
import Blood from "../../Images/Blood.png";
import Card from "./Card";
import Code from "../../Images/Code.png";
import Location from "../../Images/Location.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState({
    Hospital: "Apolo",
    Beds: 200,
    Oxygen: "Available",
    Doctors: "Available",
    Blood: "Available",
    code: 12345,
    Location: "Bangalore, Near manti mall, Hebbal",
  });
  var HospitalData = {};

  const handler = async () => {
    const res = await fetch("/", {
      method: "GET",
    });
    console.log(res);
    const dataSet = await res.json();
    console.log(dataSet);
  };
  console.log(handler());
  // console.log(HospitalData);
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.g}>
          <HospitaCard text={"Hospital"} data={data} img={Hospital} />
        </div>
        <div className={classes.g1}>
          <Card text={"Beds"} data={data.Beds} img={Bed} />
        </div>
        <div className={classes.g2}>
          <Card text={"Oxygen"} data={data.Oxygen} img={Oxygen} />
        </div>
        <div className={classes.g3}>
          <Card text={"Blood"} data={data.Blood} img={Blood} />
        </div>
        <div className={classes.g4}>
          <Card text={"Hospital code"} data={data.code} img={Code} />
        </div>
        <div className={classes.g5}>
          <Card text={"Location"} data={data.Location} img={Location} />
        </div>
      </div>
      <Link to="/login" className={classes.loginButton}>
        Book a room
      </Link>
    </div>
  );
}

export default Dashboard;
