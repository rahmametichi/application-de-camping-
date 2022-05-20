/*const router = require("express").Router();
const Profile = require("../models/Profile");
const verifyToken = require("../middlewares/verifyToken");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");

const fileUploadPaths = {
  FILE_UPLOAD_PATH: path.join(__dirname, "..", "client/public/uploads"),
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileUploadPaths.FILE_UPLOAD_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.toLowerCase().replace(/ /g, "_"));
  },
});

const postFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploadPost = multer({
  storage: storage,
  fileFilter: postFilter,
});
router.post("/profile", verifyToken,uploadPost.single("img"), async (req, res) => {
  const { bio, age,image } = req.body;
  try {
    let profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      let profile = await Profile.create({
        bio,
        age,
        image,
      });
      res
        .status(200)
        .json({ status: true, msg: "Profile created", data: profile });
    } else {
      res.status(400).json({ status: true, msg: "Profile exists" });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});
router.put("/profile/:id", verifyToken, async (req, res) => {
  const { bio, age, image } = req.body;
  try {
    let { id } = req.params;
    console.log(id);
    let profile = await Profile.findOne({
      user: req.user._id,
    });
    if (profile) {
      let profile = await Profile.findOneAndUpdate(
        { id },
        { ...req.body },
        { new: true }
      );
      return res.status(200).json({
        status: true,
        msg: "Profile updated successfully!!",
        data: profile,
      });
    } else {
      return res.status(400).json({ status: true, msg: "Not allowed!!" });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});
router.delete("/deleteprofile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Deletedprofile = await Profile.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: "profile Deleted .. !",
      data: Deletedprofile,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: err });
  }
});

module.exports = router;*/
