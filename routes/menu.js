var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Menu = require('../models/Menu.js');

/* GET ALL Menu */
router.get('/', function(req, res, next) {
  Menu.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Menu BY ID */
router.get('/:id', function(req, res, next) {
  console.log("looking up item ");
  Menu.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(post);
    res.json(post);
  });
});

/* SAVE Menu */
router.post('/', function(req, res, next) {
  Menu.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Menu */
router.put('/:id', function(req, res, next) {
  console.log("item update");
  Menu.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Menu */
router.delete('/:id', function(req, res, next) {
  Menu.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
