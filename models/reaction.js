const { Schema, Types } = require('mongoose');
function formattingDate(dateNow) {
    return dateNow.getDate() + dateNow.getMonth() + dateNow.getYear();
};

const reactionSchema = new Schema({
    reactionId: { type: Types.ObjectId, default: () => new Types.ObjectId(), },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now,
        get: (dateNow) => formattingDate(dateNow)},
});

module.exports =  reactionSchema;
