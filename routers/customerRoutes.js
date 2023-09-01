const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router
  .route('/customers')
  .post(customerController.createCustomer)
  .get(customerController.getAllCustomers);

router
  .route('/customers/:id')
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
