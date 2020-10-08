const express = require("express");
const authRouter = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

//@route GET api/auth
//get current user details
//@access private
authRouter.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (error) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

//@route post api/auth
//authenticate and get token
//@access public
authRouter.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invald credentials" }] });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invald credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).send({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

module.exports = authRouter;
