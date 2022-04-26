import mongoose from "mongoose";

const data = mongoose.Schema({
  hospital: String,
  Logo: String,
  beds: Number,
  Oxygen: String,
  Blood: String,
  Hospital_code: Number,
  Location: String,
});

const model = mongoose.model("user", data);

export default model;
