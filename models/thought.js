const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const thoughtSchema = new mongoose.Schema({
    thoughtId: { type: ObjectId, default: new ObjectId() },
    thoughtText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reaction: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }] // Assuming reactions are stored as an array of Reaction references
});

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reaction ? this.reaction.length : 0;
});

module.exports = mongoose.model('Thought', thoughtSchema);
