const mongoose = require("mongoose");

const User = new mongoose.Schema({
   username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Confirmepaasword: {
    type: Number,
    required: true,
    unique: true,
  },
  isAdmin : {
    type : Boolean ,
    default : false
  }
});
module.exports = mongoose.model("user", User);
