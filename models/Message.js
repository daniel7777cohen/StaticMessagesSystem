const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "staticuser",
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "staticuser",
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("message", MessageSchema);
