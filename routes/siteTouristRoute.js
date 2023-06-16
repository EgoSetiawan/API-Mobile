const express = require("express");
const router = express.Router();
const siteTouristController = require("../controller/siteTourist.controller");

router.get("/all", siteTouristController.getSiteTouristAll);
router.get("/search", siteTouristController.getSearchSiteTouristAll);
// router.get("/home", siteTouristController.getSiteTouristAll);

module.exports = router;
