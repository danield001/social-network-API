const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
function formattingDate(dateNow) {
    return dateNow.getDate() + dateNow.getMonth() + dateNow.getYear();
};

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, maxLength: 480, minLength: 1 },
    createdAt: { type: Date, default: Date.now, 
        get: (dateNow) => formattingDate(dateNow)},
    username: { type: String, required: true, },
    reaction: [{reactionSchema}],
});

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reaction ? this.reaction.length : 0;
});

const Thought = model('Thought', thoughtSchema)

module.exports =  Thought;
