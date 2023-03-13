const router = require("express").Router();
const userRoutes = require("./userRoutes");
const roomRoutes = require("./roomRoutes");
const scoreRoutes = require("./scoreRoutes")
router.use("/users", userRoutes);
// router.use("/rooms", roomRoutes);
router.use("/scores", scoreRoutes);

module.exports = router;
