const express = require("express");
const messageRouter = express.Router();
const { check, validationResult } = require("express-validator/check");
const config = require("config");
const User = require("../../models/User");
const Message = require("../../models/Message");
const _ = require("lodash");

// @route POST api/message
// create message

messageRouter.post(
  "/",
  [
    [
      check("senderId", "senderId is required").not().isEmpty(),
      check("receiverId", "receiverId is required").not().isEmpty(),
      check("subject", "subject is required").not().isEmpty(),
      check("message", "message is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }

    const messageFields = _.pick(req.body, [
      "senderId",
      "receiverId",
      "subject",
      "message",
    ]);

    try {
      //validate senderId and receiverId
      const sender = await User.findOne({ _id: messageFields.senderId });
      if (!sender) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Sender does not exists" }] });
      }

      const receiver = await User.findOne({ _id: messageFields.receiverId });
      if (!receiver) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Receiver does not exists" }] });
      }

      // create
      const newMessage = new Message(messageFields);
      await newMessage.save();
      return res
        .status(200)
        .json({ msg: "Message Was Saved and Posted Successfully" });
    } catch (error) {
      console.error(error.message);
      if (error.kind === "ObjectId") {
        return res
          .status(400)
          .json({ errors: [{ msg: "Sender id or Receiver id are invalid" }] });
      }
      console.error(error.message);
      return res.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

// @route GET api/message
// get all messages

messageRouter.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ errors: [{ msg: error.message }] });
  }
});

// @route delete api/profile/:messageId
// delete message by message id

messageRouter.delete("/:userId", async (req, res) => {
  try {
    await Message.deleteOne({ _id: req.params.userId });
    res.status(200).json({ msg: `Message was deleted successfully` });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId")
      return res
        .status(400)
        .json({ errors: [{ msg: "Message not found at database" }] });
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

module.exports = messageRouter;
