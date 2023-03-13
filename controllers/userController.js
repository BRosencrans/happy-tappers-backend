const { User, Score } = require("../models");
const bcrypt = require("mongoose-bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    
        loginUser(req, res) {
            User.findOne({
                username: req.body.username
              
            })
                .then((foundUser) => {
                    
                    if (!foundUser) {
                        return res.status(401).json({ msg: "User  is incorrect." });
                    }
                    if (!foundUser.verifyPasswordSync(req.body.password)) {
                        return res.status(401).json({ msg: "password is incorrect." });
                    }
                    
                    const token = jwt.sign({ username: foundUser.username  }, process.env.JWT_SECRET, { expiresIn: "1h" });
                    console.log(foundUser)
                    return res.json({foundUser, token  });
                    
                })
                .catch((err) => res.status(500).json(err));
        },
    signupUser(req, res) {
        User.create(req.body)
            .then((user) => {
                const token = jwt.sign(
                    {
    
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );
                return res.json(token, user);
            })
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        const{ username , password }= req.body
        User.create(req.body)
            .then((user) => {
                const obj = jwt.sign(
                    {
                        username: user.username,
                        
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );
                return res.status(200).json(obj);
            })
            .catch((err) => res.status(500).json(err));
    },
    isValidToken(req, res) {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) {
            return res.status(403).json({ isValid: false, msg: "You are not logged in." });
        }
        try {
            const tokenData = jwt.verify(token, process.env.JWT_SECRET);
            res.json({
                isValid: true,
                user: tokenData,
            });
        } catch (err) {
            res.status(403).json({
                isValid: false,
                msg: "invalid token",
            });
        }
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.UserId })
            .select("-__v")
            .populate("scores")
            .then((user) => (!user ? res.status(404).json({ message: "No user found." }) : res.json(user)))
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
