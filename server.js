const express = require("express");
const connectDB = require("./config/db.js");
const userRouter = require("./routes/api/users.js");
const messageRouter = require("./routes/api/message.js");
const cors = require("cors");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: false }));
connectDB();

app.use("/api/users", userRouter);
app.use("/api/message", messageRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
