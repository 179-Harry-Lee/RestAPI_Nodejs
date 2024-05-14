const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config();
//connect db
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection Database successful");
  })
  .catch(() => {
    console.log("connect failure");
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
