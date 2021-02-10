const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  var chartData = [0, 2 , 4, 12, 22, 54, 44, 77];
  res.render('dashboard')
})

router.get('/products', function (req, res) {
  res.render('products')
})

router.get('/products/add', function (req, res) {
  res.render('add-product')
})

router.get('/products/edit/:id', function (req, res) {
  res.render('edit-product')
})

router.get('/products/print/:id', function (req, res) {
  res.render('print-product')
})

router.get('/shipments', function (req, res) {
  res.render('shipments')
})

module.exports = router;
