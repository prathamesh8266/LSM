import User from "./User-schema.js";

const obj = {};
export const getUser = async (req, res) => {
  User.find({ hospital: "Apolo" }, (err, data) => {
    // console.log(data);
    res.send(data);
    // const obj = data;
  });
};

export const addUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = User(user);

  try {
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.json(err.message);
  }
};
