const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const multer = require("multer");
const storage = require("../services/multer");
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(
        {
          status: 400,
          message: "File type does not match",
        },
        false
      );
    }
  },
});

router.get("/getId/:id", userController.getDataById);

router.put("/update", upload.single("profile"), userController.UpdateUser);

module.exports = router;
