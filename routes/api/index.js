const router = require("express").Router();
const userRoutes = require("./userRoutes");
const roomRoutes = require("./roomRoutes");

router.use("/users", userRoutes);
router.use("/rooms", roomRoutes);
router.use("/socres", scoreRoutes);

module.exports = router;
