let express = require('express');
let bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="title" name="val1" placeholder="Enter title of Product"/><br><input type="text" name="val2" placeholder="Enter the size of Product"/><br><button type="submit" >send</button></form>')
})
app.post('/product',(req,res,next)=>{
    console.log('first input field is '+req.body.val1, 'and second input field is ' +req.body.val2);
    res.redirect('/add-product');
})
app.listen(3000);
