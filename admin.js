

const express = require('express');
const router = express.Router();
const productsfile=require('../Controller/products.js');


// /admin/add-product => GET
router.get('/add-product',productsfile.getaddproduct);

// /admin/add-product => POST
router.post('/add-product', productsfile.postaddproduct);

module.exports=router;

