const express = require('express');
const router = express.Router();
let db = require('../database');


router.get('/products/:id?', function (req, res) {
  if (req.params.id == null) {
    db.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      res.json(result)
    });
  } else {
    db.query("SELECT * FROM products WHERE prod_id=?", [req.params.id], function (err, result, fields) {
      if (err) throw err;
      res.json(result)
    });
  }

})

router.post('/products/add', function (req, res) {
  let product = [];
  //  db.query("SELECT * FROM products", function (err, result, fields) {
      product.push({
        product_name : req.body.prod_name,
        product_shelf_location : req.body.shelf_location,
        product_id : req.body.prod_label,
        product_sku : req.body.prod_sku,
        product_stock : req.body.stock_amount

      })
      let insert = ("INSERT INTO products (prod_label, prod_name, prod_sku, prod_location, prod_stock) VALUES (?,?,?,?,?) ");
      db.query(insert, [product[0].product_id, product[0].product_name, product[0].product_sku, product[0].product_shelf_location, product[0].product_stock]);
      res.redirect('/products/add');
    });

    router.post('/products/update', function (req, res) {
      let product = [];
          product.push({
            product_name : req.body.prod_name,
            product_shelf_location : req.body.shelf_location,
            product_label : req.body.prod_label,
            product_sku : req.body.prod_sku,
            product_stock : req.body.stock_amount
          })
          let insert = ("UPDATE products SET prod_name=?, prod_sku=?, prod_location=?, prod_stock=? WHERE prod_label=?");
          db.query(insert, [product[0].product_name, product[0].product_sku, product[0].product_shelf_location, product[0].product_stock, product[0].product_label]);
          res.redirect('/products');
        });

router.get('/warehouse_volume', function (req, res) {
  db.query("SELECT * FROM warehouse_volume ORDER BY volume_id DESC LIMIT 7", function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})

router.get('/shipment/:id/', function (req, res) {
  db.query("SELECT * FROM shipments WHERE shipment_id=?",[], function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})


module.exports = router;
