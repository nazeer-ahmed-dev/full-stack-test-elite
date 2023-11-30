const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/starred-products', productController.getStarredProducts);
app.post('/api/starred/:productId', starredController.starProduct);

// Add other routes using productController

module.exports = router;
