// let mongoose = require('mongoose');

// let BookSchema = new mongoose.Schema({
//   isbn: String,
//   title: String,
//   author: String,
//   description: String,
//   published_year: String,
//   publisher: String,
//   updated_date: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('menu', menuSchema);


var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
    combo: String,
    price: Number,
    ingredients: String,
    calories: Number,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Menu', MenuSchema);