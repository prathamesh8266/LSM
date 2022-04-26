// const express = require("express");
// const bodyParse = require("body-parser");
// const addUser = require("./Mongoose/User-controller");

import express from "express";
import mongoose from "mongoose";
import bodyParse from "body-parser";
import { addUser, getUser } from "./Mongoose/User-controller.js";

const db =
  "mongodb+srv://prathamesh:1234@cluster0.dwk1c.mongodb.net/lsm?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("successful connection"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParse.json({ extended: true }));
app.use(bodyParse.urlencoded({ extended: true }));

app.post("/", addUser);
app.get("/", getUser);

app.listen(8000);
