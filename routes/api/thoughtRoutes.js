const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require ('../../controllers/thoughtControllers');

router.route('/').get(getThoughts).post(createThought);

router.route('/:postId').get(getSingleThought).delete(deleteThought).put(updateThought);

module.exports = router;