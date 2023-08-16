let express = require('express');
let path = require('path');
let rootDir = require('../util/path.js');
let router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
})
router.post('/add-product', (req, res, next) => {
    console.log('Product is '+req.body.title);
    res.redirect('/admin/add-product');
})

router.get('/contactus',(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','contact_form.html'));
})
router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
})


module.exports = router;

