const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => console.log(err));

app.post("/api/pins", pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
