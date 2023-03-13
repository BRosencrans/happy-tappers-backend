const router = require("express").Router();

const { getScores, createScore } = require("../../controllers/scoreController");

router.route("/").get(getScores).post(createScore);

module.exports = router;
