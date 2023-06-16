const express = require("express");
const router = express.Router();
const SiteTouristRoute = require("../routes/siteTouristRoute");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");

router.get("/test", (req, res, next) => res.send("Halo dunia"));
router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/home", SiteTouristRoute);

module.exports = router;
