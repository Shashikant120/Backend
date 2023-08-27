

const express = require('express');
const router = express.Router();
let productfile=require('../Controller/products.js');

router.get('/', productfile.getshop);

module.exports = router;
