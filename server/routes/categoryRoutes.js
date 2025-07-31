const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validateRequest');
const {
    getCategories, createCategory
} = require('../controllers/categoryController');

const router = express.Router();

router.get('/', getCategories);
router.post(
    '/',
    [body('name').notEmpty()],
    validate,
    createCategory
);

module.exports = router;