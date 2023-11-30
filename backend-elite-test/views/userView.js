const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/star-product', userController.starProduct);

// Add other routes using userController

module.exports = router;
