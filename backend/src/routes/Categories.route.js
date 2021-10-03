var express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/Categories.controller');

router.post('/add', categoriesController.addCategories);
router.get('/load', categoriesController.getCategories);

module.exports = router;