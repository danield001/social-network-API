const { Reaction } = require('../models');

module.exports = {
    async createReaction(req, res) {
        try {
            const dbReactionData = await Reaction.create(req.body);
            res.json(dbReactionData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const reaction = await Reaction.deleteReaction({_id: req.params.reactionId});
            if (!reaction) {
                res.status(400).json({message: 'No Reaction Found'});
                return;
            }
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};