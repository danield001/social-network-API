const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Import ObjectId from mongoose.Types

const reactionSchema = new mongoose.Schema({
    reactionId: { type: ObjectId, default: new ObjectId() }, // Use ObjectId type and a function to generate a new ObjectId
    reactionBody: { type: String, required: true },
    // limit 280 characters.
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reaction', reactionSchema);
