const mongoose= require("mongoose");
const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", Product);