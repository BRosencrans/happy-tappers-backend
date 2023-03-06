const { Schema, Types, model } = require("mongoose");

const roomSchema = new Schema();

const Room = model("Room", roomSchema);

module.exports = Room;
