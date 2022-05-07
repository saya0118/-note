const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      min: 3,
    },
    docs: {
      type: String,
      require: true,
      min: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
