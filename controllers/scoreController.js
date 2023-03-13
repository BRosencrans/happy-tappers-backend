const { User, Score } = require("../models");

module.exports = {
    getScores(req, res) {
        Score.find()
            .select("-__v")
            .sort({ score: "desc" })
            .then((scores) => res.json(scores))
            .catch((err) => res.status(500).json(err));
    },
    createScore(req, res) {
        Score.create(req.body)
            .then((score) => {
                return User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { scores: score._id } }, { new: true });
            })
            .then(res.json("Score created."))
            .catch((err) => res.status(500).json(err));
    },
};
