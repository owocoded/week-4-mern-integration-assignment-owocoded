const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validateRequest');
const {
    getPosts, getPostById, createPost, updatePost, deletePost
} = require('../controllers/postController');

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post(
    '/',
    [body('title').notEmpty(), body('category').notEmpty()],
    validate,
    createPost
);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;