let express = require('express');
let bodyparser = require('body-parser');
const app = express();
let adminRoutes=require('./routes/admin');
let shopRoutes=require('./routes/shop');
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1 style="text-align:center">Page not found </h1>')
})
app.listen(3000);
