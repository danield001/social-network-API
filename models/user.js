const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: {
        type: String, required: true, unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        },
    },
    thought: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }] // Assuming friends are stored as an array of User references
});

userSchema.virtual("friendCount").get(function () {
    return this.friends ? this.friends.length : 0;
});

const User = model('User', userSchema);

module.exports = User;
