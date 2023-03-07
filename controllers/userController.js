const { User, Score } = require("../models");

module.exports = {
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.UserId })
            .select("-__v")
            .populate("scores")
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
            .catch((err) => res.status.json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : Score.deleteMany({ user: user._id })))
            .then(() => res.json({ message: "User and related scores deleted." }))
            .catch((err) => res.status(500).json(err));
    },
};
