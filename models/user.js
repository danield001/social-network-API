const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true }
});

userSchema
    .virtual("friendCount")
    .get(function () {
        return `${this.friends.length}`;
    })
    .set(function (v) {
        // Your set logic goes here
    });
