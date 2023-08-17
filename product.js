
let rootDir = require('../util/path');
let path=require('path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

};

exports.postAddProduct = (req, res, next) => {
    console.log('Product is ' + req.body.title);
    res.redirect('/admin/add-product');
};

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact_form.html'));
};

exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};

// shop router
exports.getslash=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};