const express = require('express');
const router = express.Router();
const {createProduct, getProducts, getProductById, getProductByCategory, deleteProduct, increaseView} = require('../controllers/product');

router.post('/add', createProduct);
router.get('/all-products', getProducts);
router.get('/all-products/:id', getProductById);
router.get('/all-products/category/:id', getProductByCategory);
router.put('/:id/increase-view', increaseView)
router.delete('/:id', deleteProduct);


module.exports = router;