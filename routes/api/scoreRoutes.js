const router = require("express").Router();

const { getScores, getSingleScore, createScore, deleteScore } = require("../../controllers/scoreController");

router.route("/").get(getScores).post(createScore);

module.exports = router;
