const express = require("express");
const messageRouter = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");
const Message = require("../../models/Message");
const _ = require("lodash");
const auth = require("../middleware/auth");

// @route GET api/message
// get all messages
messageRouter.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ errors: [{ msg: error.message }] });
  }
});

// @route GET api/message/:userId
// get messages by user id
// @access private
messageRouter.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    if (req.user.id !== userId) {
      return res.status(400).json({
        errors: [
          {
            msg:
              "Failed - your own user id doesnt match to the input you've given",
          },
        ],
      });
    }
    const received = await Message.find({
      receiverId: userId,
    }).sort({ createdAt: -1 }).populate('senderId','name');;
    const sent = await Message.find({ senderId: userId }).sort({
      createdAt: -1,
    }).populate('receiverId','name');

    res.status(200).json({ received, sent });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(400)
        .json({ errors: [{ msg: `Id ${error.value} is invalid` }] });
    }
    res.status(400).json({ errors: [{ msg: "server error" }] });
  }
});

// @route POST api/message
// create message
//@access private
messageRouter.post(
  "/",
  [
    auth,
    [
      check("senderId", "sender id is required").not().isEmpty(),
      check("receiverId", "receiver id is required").not().isEmpty(),
      check("subject", "subject is required").not().isEmpty(),
      check("message", "message is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const messageFields = _.pick(req.body, [
      "senderId",
      "receiverId",
      "subject",
      "message",
    ]);

    if (req.user.id !== messageFields.senderId) {
      return res.status(400).json({
        errors: [
          { msg: "Failed - your own user id doesnt match to the input" },
        ],
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }

    try {
      //validate senderId
      const sender = await User.findOne({ _id: messageFields.senderId });
      if (!sender) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Sender does not exists" }] });
      }

      //validate receiverId
      const receiver = await User.findOne({ _id: messageFields.receiverId });
      if (!receiver) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Receiver does not exists" }] });
      }

      const newMessage = new Message(messageFields);
      await newMessage.save();
      return res
        .status(200)
        .json({ msg: "Message was saved and posted successfully" });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res
          .status(400)
          .json({ errors: [{ msg: `Id ${error.value} is invalid` }] });
      }
      return res.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

// @route DELETE api/message/:messageId/
// delete message by message id
// @access private
messageRouter.delete("/:messageId", auth, async (req, res) => {
  try {
    await Message.deleteOne({ _id: req.params.messageId });
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
