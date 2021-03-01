const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Thing = new Schema({
  thing: String
});

module.exports = mongoose.model("Thing", Thing);