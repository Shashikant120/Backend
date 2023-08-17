let express = require('express');
let router = express.Router();

let ProductController=require('../Controllers/product.js');


router.get('/add-product', ProductController.getAddProduct );
router.post('/add-product', ProductController.postAddProduct);

router.get('/contactus',ProductController.getContactUs);

router.post('/success',ProductController.getSuccess);


module.exports = router;

