const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the product name'],
  },
  code: {
    type: String,
    unique: true,
    required: true,
  },
  description: String,
  imgArray: {
    type: [String],
    default: [],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  metadata: {
    type: Object,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
