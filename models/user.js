const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const userSchema = new mongoose.Schema({
    userId: { type: ObjectId, default: new ObjectId() },
    username: { type: String, required: true },
    email: { type: String, required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Assuming friends are stored as an array of User references
});

userSchema.virtual("friendCount").get(function () {
    return this.friends ? this.friends.length : 0;
});

module.exports = mongoose.model('User', userSchema);
