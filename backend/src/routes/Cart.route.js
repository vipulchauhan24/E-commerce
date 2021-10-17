const express = require('express');
const router = express.Router();

const cartController = require('../controllers/Cart.controller');

router.post('/add', cartController.addToCart);
router.get('/load', cartController.loadCart);

module.exports = router;