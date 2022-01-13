const mongoose = require("mongoose");

const idolSchema = new mongoose.Schema({
  name: String,
  height: Number,
});

module.exports = mongoose.model("Idol", idolSchema);
