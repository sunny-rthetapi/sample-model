const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router
  .route('/products')
  .post(productController.createProduct)
  .get(productController.getAllProducts);

router
  .route('/customers/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
