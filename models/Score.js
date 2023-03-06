const { Schema, Types, model } = require("mongoose");

const scoreSchema = new Schema();

const Score = model("Score", scoreSchema);

module.exports = Score;
