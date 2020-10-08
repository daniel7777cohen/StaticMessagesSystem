const express = require("express");
const connectDB = require("./config/db.js");
const userRouter = require("./routes/api/users.js");
const messageRouter = require("./routes/api/message.js");
const cors = require("cors");
const path = require("path");
const authRouter = require("./routes/api/auth.js");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.json({ extended: false }));
connectDB();

app.use("/api/users", userRouter);
app.use("/api/message", messageRouter);
app.use("/api/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
