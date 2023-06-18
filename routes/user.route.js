const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const multer = require("multer");
const storage = require("../services/multer");
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // const fileSize = parseInt(req.headers["content-length"]);
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
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

router.delete("/delete/:id", userController.DestroyUser);

router.put("/update/:id", upload.single("profile"), userController.UpdateUsers);

module.exports = router;
