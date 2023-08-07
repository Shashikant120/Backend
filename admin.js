let express=require('express');
let router=express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="title" name="val1" placeholder="Enter title of Product"/><br><input type="text" name="val2" placeholder="Enter the size of Product"/><br><button type="submit" >send</button></form>')
})
router.post('/product',(req,res,next)=>{
    console.log('first input field is '+req.body.val1, 'and second input field is ' +req.body.val2);
    res.redirect('/add-product');
})


module.exports=router;