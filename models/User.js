const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema();

const User = model("User", userSchema);

module.exports = User;
