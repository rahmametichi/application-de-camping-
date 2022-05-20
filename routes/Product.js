/*const express = require("express");
const Product = require("../models/Product");

const router = express.Router();
const product= require("../models/Product");

router.get("/getallproduct", async (req, res) => {
  try {
    const product = await Product.find({});
    res
      .status(200)
      .json({ status: true, message: "product  List", data: product });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/createproduct", async (req, res) => {
  try {
    const { name, varients, prices, category, image, description } = req.body;

    const existingProduct = await Product.findOne({ name: name });
    if (existingProduct) {
      res.status(400).json({ msg: "product ALREADY EXIST !!!!" });
    } else {
      const product = await Product.create({
        name: name,
        varients: varients,
        prices: prices,
        category: category,
        image: image,
        description: description,
      });
      res.status(200).json({
        status: true,
        message: "Product CREATED SUCCESSFULLY",
        data: product,
      });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
});

module.exports = router;*/
