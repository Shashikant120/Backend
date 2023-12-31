const Product=require('../model/product.js');
exports.getaddproduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postaddproduct=(req, res, next) => {
  let product=new Product(req.body.title);
  product.save();
    res.redirect('/');
  };

exports.getshop=(req, res, next) => {
   Product.fetchAll((products)=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
   });
   
  }

