const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {default: new ObjectID, },
    reactionBody: {type: String, required: true},
    // limit 280 characters. 
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});