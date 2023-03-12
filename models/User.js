const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        min: [7, "Not enough characters"],
        required: true,
        bcrypt: true,
    },
    avatar: {
        //We will reference a link for now since GridFS looks like it will take a while to figure out and would need its own model and schema.
        type: String,
        /* enum: { //This is to limit the images to what we have available - maybe we will have to do this by using links.
                values: [image1, image2, image3],
                message: '{VALUE} is not supported'
            } */
    },
    scores: [{ type: Schema.Types.ObjectId, ref: "Score" }],
});

userSchema.plugin(require("mongoose-bcrypt"));

const User = model("User", userSchema);

module.exports = User;
