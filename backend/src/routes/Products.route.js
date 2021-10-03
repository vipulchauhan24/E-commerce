const express = require('express');
const router = express.Router();

const productController = require('../controllers/Products.controller');

router.post('/add', productController.addProduct);
router.get('/load', productController.getProducts);
router.get('/id', productController.getProductsByCategory);


module.exports = router;