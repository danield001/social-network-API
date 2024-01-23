const { Thought, Reaction } = require("../models");

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(400).json({ message: "No Thought with ID" });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                req.body,
                { new: true } // Returns the modified document
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            res.json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.deleteThought({
                _id: req.params.thoughtId,
            });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async postReaction(req, res) {
        try {
            const reaction = await Reaction.create(req.body);
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const dbReactionData = await Reaction.deleteReaction(
                req.params.reactionId
            );
            res.json(dbReactionData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
