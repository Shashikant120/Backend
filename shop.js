let express = require('express');
let shoproute = express.Router();
let ProductController=require('../Controllers/product.js');

shoproute.get('/',ProductController.getslash);

module.exports = shoproute;
