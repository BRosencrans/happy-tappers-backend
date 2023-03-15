const { Schema, Types, model } = require("mongoose");
const dayjs = require("dayjs");

const scoreSchema = new Schema(
    {
        user: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: dayjs(),
            get: formatDate,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

function formatDate(date) {
    let formattedDate = dayjs(date).format("M/D/YYYY");
    return formattedDate;
}

const Score = model("Score", scoreSchema);

module.exports = Score;
