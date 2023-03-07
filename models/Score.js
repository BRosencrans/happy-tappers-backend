const { Schema, Types, model } = require("mongoose");

const scoreSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});

const Score = model("Score", scoreSchema);

module.exports = Score;
