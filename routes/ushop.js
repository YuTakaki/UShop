const express = require('express');
const route = express.Router();
const ushop = require('./cotrollers/ushopController');
const verifyToken = require('../middleware/verifyToken');

route.get('/most-popular-products', ushop.getMostPopularProducts);
route.get('/categories', ushop.getCategories);
route.get('/most-popular-categories', ushop.getPopularCategories);
route.get('/top-category-product', ushop.getTopCategoryProduct);
route.get('/get-popular-products/:start', ushop.getPopularUshopProducts);
route.get('/get-latest-products/:start', ushop.getLatestUshopProducts);
route.get('/get-top-sales-products/:start', ushop.getTopSalesUshopProducts);
route.post('/get-popular-shops-product/:start', ushop.getShopsPopularProductList);
route.post('/get-latest-shops-product/:start', ushop.getShopsLatestProductList);
route.post('/get-top-sales-shops-product/:start', ushop.getShopsTopSalesProductList);
route.get('/get-product-info/:product_id', ushop.getProductInfo);
route.post('/checkout', verifyToken, ushop.checkout);
module.exports = route;