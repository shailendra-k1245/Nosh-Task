const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  dishId: { type: String, unique: true },
  details: String,
  dishName: String,
  imageUrl: String,
  isPublished: Boolean
});

module.exports = mongoose.model('Dish', dishSchema);
