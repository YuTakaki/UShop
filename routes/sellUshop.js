const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const sellUshop = require('./cotrollers/sellUshopController');
const route = express.Router();

route.post('/add-product', verifyToken, sellUshop.addProducts);

module.exports = route;