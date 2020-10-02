const express = require("express");
const userRouter = express.Router();
const User = require("../../models/User");
const config = require("config");

//@route get api/users
// fetch all users
userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "unable to receive users" }] });
    }

    return res.status(200).json({ users });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = userRouter;
